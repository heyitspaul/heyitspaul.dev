<script lang="ts">
    import { get_human_date } from '$lib/utils';

    export let data;
</script>

<div class="container max-w-4xl mx-auto px-10">
    <div class="text-center">
        <h1 class="font-semibold text-5xl mb-2">Blog</h1>
        <div class="spacer"></div>
    </div>
    {#each data.posts as post}
        <h2 class="font-semibold text-3xl mb-2">
            <a href={post.path} class="text-blue-600 hover:underline">{post.meta.title}</a>
        </h2>
        <p>
            Published: {get_human_date(post.meta.date)}
        </p>
        <p class="mb-2">{post.meta.excerpt}</p>
        <div class="divider"></div>
    {/each}
</div>
