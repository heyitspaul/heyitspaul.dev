<script lang="ts">
    const emailAddress = 'paul@heyitspaul.dev';
</script>

<svelte:head>
    <title>Contact - heyitspaul.dev</title>
    <meta name="description" content="Contact me for questions or job opportunities." />
    <meta property="og:title" content="Contact - heyitspaul.dev" />
    <meta property="og:description" content="Contact me for questions or job opportunities." />
    <meta property="og:url" content="https://heyitspaul.dev/contact" />
</svelte:head>

<section class="max-w-3xl mx-auto px-4">
    <header class="text-center">
        <h1 class="font-semibold text-5xl">Contact</h1>
        <p class="mt-4 text-base-content/70">Prefer email? Feel free to reach out.</p>
        <div class="spacer"></div>
    </header>

    <div class="grid md:grid-cols-2 gap-6">
        <div
            class="card bg-[#111418] drop-shadow-[3px_3px_8px_#111418]/85 transition-all duration-300"
        >
            <div class="card-body">
                <h2 class="card-title">Email</h2>
                <p class="text-sm text-base-content/70 mb-2">{emailAddress}</p>
                <a class="btn btn-sm bg-main" href={`mailto:${emailAddress}`}>Open mail app</a>
            </div>
        </div>

        <div
            class="card bg-[#111418] drop-shadow-[3px_3px_8px_#111418]/85 transition-all duration-300"
        >
            <div class="card-body">
                <h2 class="card-title">GitHub</h2>
                <p class="text-sm text-base-content/70 mb-2">
                    Check out my projects and contributions.
                </p>
                <a
                    class="btn btn-sm bg-main"
                    href="https://github.com/heyitspaul"
                    target="_blank"
                    rel="noopener"
                >
                    <span class="devicon-github-original mr-2 text-xl"></span>
                    Visit @heyitspaul
                </a>
            </div>
        </div>
    </div>
</section>
