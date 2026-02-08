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

<div class="container mx-auto">
    <div
        class="navbar bg-base-100 sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-base-100/80"
    >
        <div class="flex-1 gap-2">
            <ul class="menu menu-horizontal px-1">
                {#each menu_links as link}
                    <li>
                        <a href={link.link} class={link.link === page.url.pathname ? 'active' : ''}>{link.name}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    {@render children()}

    <footer class="footer footer-center text-base-content py-10 mt-10 border-t border-slate-700">
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
