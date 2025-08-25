<script lang="ts">
    let projects = [
        {
            title: 'FA Conferences (New)',
            description: 'Website',
            tech: 'Svelte, Tailwind CSS, TypeScript',
            date: 'August 2025',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/faconfnew.avif',
            link: 'https://fa-mag.com/conferences/iiw2026'
        },
        {
            title: 'Paddock Court Trading',
            description: 'Website',
            tech: 'Svelte, Tailwind CSS',
            date: 'January 2024',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/paddock.avif',
            link: 'https://paddockcttrading.com'
        },
        {
            title: 'FA Conferences',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, Sass, JavaScript',
            date: 'February 2019 - June 2025',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/faconf.avif',
            link: 'https://faconferences.com/iiw25'
        },
        {
            title: 'Matriarch',
            description: 'Library',
            tech: 'Rust',
            date: 'June 2018',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/matriarch.png'
        },
        {
            title: 'Terraform',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'September 2017',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/terraform.jpg'
        },
        {
            title: 'The Haute Maven',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'December 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/hautemaven.jpg'
        },
        {
            title: 'Jacé Jewelers',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'November 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/jace.jpg'
        },
        {
            title: 'Bettye',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'October 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/bettye.jpg'
        },
        {
            title: 'Ayatana',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'July 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/ayatana.jpg'
        },
        {
            title: 'Atlantic Veterinary Hospital',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'June 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/atlanticvh.jpg',
            link: 'https://atlanticvh.com/'
        },
        {
            title: 'LifExpressed',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            date: 'May 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/lifexpressed.jpg'
        },
        {
            title: 'Polar State',
            description: 'Website',
            tech: 'HTML, CSS',
            date: 'February 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/polarstate.jpg'
        },
        {
            title: 'Rezoundr',
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            date: 'November 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/rezoundr.jpg',
            link: 'https://rezoundr.com'
        },
        {
            title: "Butch's Car Wash",
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            date: 'September 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/butchscarwash.avif',
            link: 'https://butchscarwash.com'
        },
        {
            title: 'CollabMatch',
            description: 'Website',
            tech: 'AngularJS, JavaScript, CSS',
            date: 'April 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/collabmatch.jpg',
            link: 'https://match.cosmicskymedia.com'
        },
        {
            title: 'Cosmic Sky Media',
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            date: 'September 2014',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/csm.jpg',
            link: 'https://cosmicskymedia.com'
        },
        {
            title: 'Pool Game',
            description: 'Video Game',
            tech: 'Java, OpenGL (via LWJGL)',
            date: 'May 2012',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/poolgame.png'
        },
        {
            title: 'Project Z',
            description: 'Video Game',
            tech: 'C#, XNA',
            date: 'March 2012',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/projectz.png'
        }
    ];
</script>

<svelte:head>
    <title>Portfolio - heyitspaul.dev</title>
    <meta name="description" content="Portfolio of my work." />
    <meta property="og:title" content="Portfolio - heyitspaul.dev" />
    <meta property="og:description" content="Portfolio of my work." />
    <meta property="og:url" content="https://heyitspaul.dev/portfolio" />
</svelte:head>

<div class="text-center px-4">
    <h1 class="font-semibold text-5xl">Portfolio</h1>
    <p class="opacity-70">Projects I've worked on (non-exhaustive).</p>
</div>

<ul
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 lg:px-0"
    aria-label="Projects"
>
    {#each projects as project (project.title)}
        <li class="card card-border border-slate-700/50">
            <div class="card-body">
                <img
                    src={project.image}
                    alt={`${project.title} — ${project.description}`}
                    class="w-full h-auto rounded-md"
                    loading="lazy"
                    decoding="async"
                />
                <div class="card-text">
                    <h2 class="card-title">{project.title}</h2>
                    <p class="opacity-80">{project.description}</p>

                    {#if project.tech && project.tech.split(',').some((x) => x.trim())}
                        <ul class="flex flex-wrap gap-2 mt-2" aria-label="Technologies used">
                            {#each project.tech
                                .split(',')
                                .map((s) => s.trim())
                                .filter(Boolean) as tech}
                                <li><span class="badge badge-outline">{tech}</span></li>
                            {/each}
                        </ul>
                    {/if}

                    <div class="card-actions mt-4 flex items-center justify-between">
                        <span class="text-sm opacity-70">{project.date}</span>
                        {#if project.link}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer external"
                                class="btn btn-primary"
                                aria-label={`View ${project.title} (opens in a new tab)`}
                                >View <span class="material-symbols-rounded text-xs!"
                                    >open_in_new</span
                                >
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        </li>
    {/each}
</ul>
