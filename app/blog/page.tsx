import Link from "next/link";
import CTA from "@/components/CTA";
import EmailButton from "@/components/Common/EmailButton";
import { blogPosts } from "./blogData";



const BlogPage = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="relative bg-surface pt-32 pb-0">
                <div className="pointer-events-none absolute inset-0 flex justify-between container opacity-20 z-0">
                    <div className="w-px h-full bg-border" />
                    <div className="w-px h-full bg-border" />
                    <div className="w-px h-full bg-border" />
                    <div className="w-px h-full bg-border" />
                </div>

                <div className="container relative z-10 pb-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-8">
                        <Link href="/" className="hover:text-primary transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-border-2">—</span>
                        <span className="text-primary">Blog</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1
                                className="font-display font-black text-ink uppercase tracking-tighter"
                                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
                            >
                                Journal &{" "}
                                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                    insights
                                </span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="text-[16px] leading-[1.8] text-ink-3">
                                Deep dives into design psychology, development strategies,
                                and how to build digital products that refuse to be ignored.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border" />
            </section>

            {/* Blog Grid */}
            <section className="relative bg-surface">
                <div className="container py-20 md:py-28 lg:py-32">

                    {/* Featured/Latest Post Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative bg-surface border border-border p-8 md:p-10 hover:border-ink hover:bg-surface-2 transition-all duration-300 flex flex-col justify-between h-full">

                                <div className="mb-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-white bg-ink px-3 py-1">
                                            {post.category}
                                        </span>
                                        <div className="h-10 w-10 flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h2 className="font-display font-black text-[22px] md:text-[26px] uppercase tracking-tighter text-ink mb-4 group-hover:text-primary transition-colors duration-300" style={{ lineHeight: '1.1' }}>
                                        {post.title}
                                    </h2>
                                    <p className="text-[15px] leading-[1.7] text-ink-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Meta Footer */}
                                <div className="border-t border-border pt-6 flex items-center justify-between mt-auto">
                                    <span className="text-[13px] font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        {post.author}
                                    </span>
                                    <span className="text-[12px] uppercase tracking-widest text-ink-4">
                                        {post.date} • {post.readTime}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

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

            <CTA />
        </>
    );
};

export default BlogPage;
