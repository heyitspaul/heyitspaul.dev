<script lang="ts">
    import { get_human_date } from '$lib/utils';

    export let data;
</script>

<svelte:head>
    <title>{data.title} - heyitspaul.dev</title>
    <meta name="description" content={data.excerpt} />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.excerpt} />
    <meta property="og:url" content={`https://heyitspaul.dev/blog/${data.slug}`} />
    <meta property="og:type" content="article" />
</svelte:head>

<article class="container max-w-4xl mx-auto px-10">
    <header>
        <h1 class="font-semibold text-5xl mb-2">{data.title}</h1>
        <p>
            Published: {get_human_date(data.date)}
        </p>
        <div class="spacer"></div>
    </header>
    <div class="blog-content">
        <svelte:component this={data.content} />
    </div>
    <div class="spacer"></div>
</article>
