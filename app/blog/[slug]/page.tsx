import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";
import CTA from "@/components/CTA";
import EmailButton from "@/components/Common/EmailButton";

// Generate static params so the posts are pre-rendered at build time
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}



export default function BlogPost(props: any) {
    const slug = props?.params?.slug || props?.slug;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <article className="relative bg-surface pt-32 pb-20 md:pb-32">
                <div className="container max-w-4xl pt-8">

                    {/* Back button & Meta */}
                    <div className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-ink-4 hover:text-primary transition-colors duration-200 mb-8">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back to Journal
                        </Link>

                        <div className="flex flex-wrap items-center gap-6 mt-4">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-white bg-ink px-3 py-1">
                                {post.category}
                            </span>
                            <span className="text-[13px] uppercase tracking-widest text-ink flex items-center gap-2 font-bold">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {post.author}
                            </span>
                            <span className="text-[12px] uppercase tracking-widest text-ink-4">
                                {post.date} • {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1
                        className="font-display font-black text-ink uppercase tracking-tighter mb-8"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1" }}
                    >
                        {post.title}
                    </h1>

                    <div
                        className="w-20 h-1 bg-primary mb-16"
                    />

                    {/* Markdown / Content Area */}
                    <div
                        className="blog-content text-ink-3 leading-[1.8] text-[16px] md:text-[18px]"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <style dangerouslySetInnerHTML={{
                        __html: `
            .blog-content h2 {
              font-family: var(--font-display, "Inter", sans-serif);
              font-weight: 900;
              text-transform: uppercase;
              letter-spacing: -0.05em;
              color: var(--color-ink);
              font-size: clamp(2rem, 3vw, 2.5rem);
              margin-top: 4rem;
              margin-bottom: 2rem;
              line-height: 1.1;
            }
            .blog-content h3 {
              font-family: var(--font-display, "Inter", sans-serif);
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: -0.05em;
              color: var(--color-ink);
              font-size: clamp(1.4rem, 2vw, 1.8rem);
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              line-height: 1.2;
            }
            .blog-content p {
              margin-bottom: 1.5rem;
            }
            .blog-content strong {
              color: var(--color-ink);
              font-weight: 700;
            }
          `}} />

                </div>
            </article>

            {/* Email CTA Section */}
            <section className="relative bg-surface-2">
                <div className="border-t border-border" />
                <div className="container py-20 md:py-28">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display font-black text-ink uppercase tracking-tighter mb-4 text-3xl md:text-4xl">
                            Ready to elevate your{" "}
                            <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                brand?
                            </span>
                        </h2>
                        <p className="text-[15px] leading-[1.8] text-ink-3 mb-10 max-w-xl mx-auto">
                            We partner with visionary founders to build digital experiences that refuse to be ignored. Let's discuss your next big project.
                        </p>

                        <EmailButton />
                    </div>
                </div>
            </section>

            <div className="border-t border-border" />
            <CTA />
        </>
    );
}
