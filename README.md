# heyitspaul.dev

Personal website and blog built with SvelteKit. It includes a blog powered by Markdown via mdsvex, Tailwind UI styling with daisyUI, sitemap generation, and lightweight analytics via PostHog.

## Features

- Blog posts written in Markdown (`src/posts/*.md`) using mdsvex
- Dynamic blog routes with slug pages (`/blog/[slug]`)
- API endpoint to list posts (`/api/posts`)
- Sitemap at `/sitemap.xml` generated with `super-sitemap`
- Tailwind CSS + daisyUI for styling
- TypeScript-first setup
- Vitest unit testing and Playwright integration/e2e testing

## Tech Stack

- SvelteKit
- Svelte
- Vite
- TypeScript
- Tailwind CSS + daisyUI
- mdsvex for Markdown content
- Vitest + Playwright for testing
- PostHog for analytics

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm, npm, or bun (project scripts assume npm)

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

This starts the SvelteKit dev server with Vite. Open the URL printed in the terminal.

### Build

```bash
bun run build
```

### Preview (after build)

```bash
bun run preview
```

## Content & Routing

- Place blog posts in `src/posts` as Markdown files with frontmatter (e.g., `title`, `date`, `excerpt`).
- The list page `/blog` loads posts from `/api/posts`, which pulls metadata via helpers in `$lib/utils`.
- Individual post pages are served from `/blog/[slug]`, loading the corresponding Markdown file dynamically.

## Styling

- Tailwind CSS is configured in `tailwind.config.js` and enabled via the Vite Tailwind plugin.
- daisyUI is included as a Tailwind plugin.

## Sitemap

- `/sitemap.xml` is served by `src/routes/sitemap.xml/+server.ts` using `super-sitemap` and blog slugs from `$lib/utils`.

## Testing

- Unit tests with Vitest (see `vite.config.ts` for test include patterns)
- Integration/E2E tests with Playwright (see `playwright.config.ts`)

Run all tests:

```bash
bun run test
```

## Deployment

The project uses `@sveltejs/adapter-vercel`. Deploy by connecting the repository to Vercel. Ensure the required environment variables are set in your Vercel project settings.

## License

MIT
