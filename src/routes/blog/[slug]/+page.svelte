<script lang="ts">
    import { get_human_date } from '$lib/utils';

    export let data;
</script>

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
