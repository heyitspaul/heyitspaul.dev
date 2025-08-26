<script lang="ts">
    import { get_human_date } from '$lib/utils';

    export let data;
</script>

<svelte:head>
    <title>Blog - heyitspaul.dev</title>
    <meta name="description" content="A blog about my experiences with technology and life." />
    <meta property="og:title" content="Blog - heyitspaul.dev" />
    <meta
        property="og:description"
        content="A blog about my experiences with technology and life."
    />
    <meta property="og:url" content="https://heyitspaul.dev/blog" />
</svelte:head>

<div class="container max-w-6xl mx-auto px-6">
    <div class="text-center">
        <h1 class="font-semibold text-5xl mb-2">Blog</h1>
        <p class="opacity-70">Articles and notes on software, tooling, and experiments.</p>
        <div class="spacer"></div>
    </div>
    {#each data.posts as post, index}
        <h2 class="font-semibold text-3xl mb-2">
            <a href={post.path} class="link link-hover text-main">{post.meta.title}</a>
        </h2>
        <p class="opacity-70">
            Published: {get_human_date(post.meta.date)}
        </p>
        <p class="mb-6">{post.meta.excerpt}</p>
        {#if index !== data.posts.length - 1}
            <div class="divider"></div>
        {/if}
    {/each}
</div>
