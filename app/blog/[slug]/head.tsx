import { blogPosts } from "../blogData";

export default function Head({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return (
            <>
                <title>Post Not Found | Spark Studios</title>
            </>
        );
    }

    return (
        <>
            <title>{`${post.title} | Spark Studios`}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={post.excerpt} />
            <link rel="icon" href="/images/favicon.ico" />
            <meta property="og:title" content={`${post.title} | Spark Studios`} />
            <meta property="og:description" content={post.excerpt} />
            <meta property="og:type" content="article" />
        </>
    );
}
