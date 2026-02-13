<script lang="ts">
    import '../app.css';
    import 'devicon/devicon.min.css';
    import { page } from '$app/state';
    import { browser } from '$app/environment';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import posthog from 'posthog-js';

    let { children } = $props();

    const menu_links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Portfolio',
            link: '/portfolio'
        }
    ];

    const currentYear = new Date().getFullYear();

    if (browser) {
        beforeNavigate(() => posthog.capture('$pageleave'));
        afterNavigate(() => posthog.capture('$pageview'));
    }
</script>

<div class="site-shell">
    <div
        class="navbar bg-base-100 sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-base-100/80 py-2 mb-6"
    >
        <div class="flex-1 gap-2">
            <ul class="menu menu-horizontal px-0 gap-1">
                {#each menu_links as link}
                    <li>
                        <a
                            href={link.link}
                            class={`rounded-md px-4 py-2 transition-colors ${link.link === page.url.pathname ? 'active' : 'hover:bg-base-200'}`}
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    {@render children()}

    <footer class="footer footer-center text-base-content py-12 mt-14 border-t border-slate-700/80">
        <nav class="md:grid md:grid-flow-col gap-4">
            <a href="/blog" class="link link-hover">Blog</a>
            <a href="/portfolio" class="link link-hover">Portfolio</a>
            <a href="/contact" class="link link-hover">Contact</a>
            <a
                href="https://github.com/heyitspaul"
                target="_blank"
                rel="noopener"
                class="link link-hover">GitHub</a
            >
            <aside>
                <p>© {currentYear} heyitspaul.dev</p>
            </aside>
        </nav>
    </footer>
</div>
