<script>
    let projects = [
        {
            title: 'Paddock Court Trading',
            description: 'Website',
            tech: 'Svelte, Tailwind CSS',
            devicons: ['devicon-svelte-plain colored', 'devicon-tailwindcss-plain colored'],
            date: 'January 2024',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/paddock.avif',
            link: 'https://paddockcttrading.com'
        },
        {
            title: 'Matriarch',
            description: 'Library',
            tech: 'Rust',
            devicons: ['devicon-rust-plain colored'],
            date: 'June 2018',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/matriarch.png'
        },
        {
            title: 'Terraform',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'September 2017',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/terraform.jpg'
        },
        {
            title: 'The Haute Maven',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'December 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/hautemaven.jpg'
        },
        {
            title: 'Jacé Jewelers',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'November 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/jace.jpg'
        },
        {
            title: 'Bettye',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'October 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/bettye.jpg'
        },
        {
            title: 'Ayatana',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'July 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/ayatana.jpg'
        },
        {
            title: 'Atlantic Veterinary Hospital',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'June 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/atlanticvh.jpg',
            link: 'https://atlanticvh.com/'
        },
        {
            title: 'LifExpressed',
            description: 'Website',
            tech: 'Wordpress, PHP, HTML, CSS, JavaScript',
            devicons: [
                'devicon-wordpress-plain colored',
                'devicon-php-plain colored',
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'May 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/lifexpressed.jpg'
        },
        {
            title: 'Polar State',
            description: 'Website',
            tech: 'HTML, CSS',
            devicons: [
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored'
            ],
            date: 'February 2016',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/polarstate.jpg'
        },
        {
            title: 'Rezoundr',
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            devicons: [
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'November 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/rezoundr.jpg',
            link: 'https://rezoundr.com'
        },
        {
            title: "Butch's Car Wash",
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            devicons: [
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'September 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/butchscarwash.avif',
            link: 'https://butchscarwash.com'
        },
        {
            title: 'CollabMatch',
            description: 'Website',
            tech: 'AngularJS, JavaScript, CSS',
            devicons: [
                'devicon-angularjs-plain colored',
                'devicon-javascript-plain colored',
                'devicon-css3-plain-wordmark colored'
            ],
            date: 'April 2015',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/collabmatch.jpg',
            link: 'https://match.cosmicskymedia.com'
        },
        {
            title: 'Cosmic Sky Media',
            description: 'Website',
            tech: 'HTML, CSS, JavaScript',
            devicons: [
                'devicon-html5-plain-wordmark colored',
                'devicon-css3-plain-wordmark colored',
                'devicon-javascript-plain colored'
            ],
            date: 'September 2014',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/csm.jpg',
            link: 'https://cosmicskymedia.com'
        },
        {
            title: 'Pool Game',
            description: 'Video Game',
            tech: 'Java, OpenGL (via LWJGL)',
            devicons: ['devicon-java-plain-wordmark colored', 'devicon-opengl-plain colored'],
            date: 'May 2012',
            image: 'https://s3.us-east-1.wasabisys.com/heyitspaul/portfolio_images/poolgame.png'
        },
        {
            title: 'Project Z',
            description: 'Video Game',
            tech: 'C#, XNA',
            devicons: ['devicon-csharp-plain colored'],
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

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as project}
        <div class="card">
            <div class="card-body">
                <img src={project.image} alt={project.title} class="w-full h-auto" />
                <h2 class="card-title">{project.title}</h2>
                <div class="card-text">
                    <p class="text-2xl flex flex-wrap gap-2">
                        {#each project.devicons as devicon}
                            <span class={devicon}></span>
                        {/each}
                    </p>
                </div>
                <div class="card-text">
                    <p>{project.description}</p>
                    <p>{project.tech}</p>
                    <p>{project.date}</p>
                </div>
                {#if project.link}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        >View
                    </a>
                {/if}
            </div>
        </div>
    {/each}
</div>
