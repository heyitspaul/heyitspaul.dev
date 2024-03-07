import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
    return await sitemap.response({
        origin: 'https://heyitspaul.dev',
        page: params.page,
        maxPerPage: 50_000
    });
};
