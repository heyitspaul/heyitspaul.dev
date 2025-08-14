<script>
    import '../app.css';
    import 'devicon/devicon.min.css';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import posthog from 'posthog-js';

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

    if (browser) {
        beforeNavigate(() => posthog.capture('$pageleave'));
        afterNavigate(() => posthog.capture('$pageview'));
    }
</script>

<div class="container mx-auto">
    <div class="navbar bg-base-100">
        <div class="flex-1"></div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                {#each menu_links as link}
                    <li>
                        <a href={link.link} class={link.link === $page.url.pathname ? 'active' : ''}
                            >{link.name}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <slot />
</div>
