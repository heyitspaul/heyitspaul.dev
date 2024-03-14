import * as sitemap from 'super-sitemap';
import { get_blog_slugs } from '$lib/utils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
    const blog_slugs = await get_blog_slugs();
    return await sitemap.response({
        origin: 'https://heyitspaul.dev',
        page: params.page,
        maxPerPage: 50_000,
        paramValues: {
            '/blog/[slug]': blog_slugs,
        }
    });
};
