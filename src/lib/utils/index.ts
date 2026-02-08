export const fetch_markdown_posts = async () => {
    const allPostFiles = import.meta.glob('../../../src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as { metadata: Record<string, string> };
            const postPath = "blog" + path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts;
};

export const get_blog_slugs = async () => {
    let posts = fetch_markdown_posts();
    return (await posts).map((post) => post.path.slice(5));
}

export const get_human_date = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
