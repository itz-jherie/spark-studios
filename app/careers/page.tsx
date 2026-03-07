
import Link from "next/link";

export const metadata = {
    title: "Careers",
    description: "Join the studio. We're always looking for exceptional people who care deeply about craft, quality, and creative problem-solving.",
    openGraph: {
        title: "Careers | Spark Studios",
        description: "Join the studio. We're always looking for exceptional people who care deeply about craft, quality, and creative problem-solving.",
        url: "https://sparkstudios.qzz.io/careers",
    },
};

const CareersPage = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="relative bg-surface pt-32 pb-0">
                {/* Background structural grid lines */}
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
                        <span className="text-primary">Careers</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-7">
                            <h1
                                className="font-display font-black text-ink uppercase tracking-tighter"
                                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
                            >
                                Join the{" "}
                                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                    studio
                                </span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                            <p className="text-[16px] leading-[1.8] text-ink-3">
                                We&apos;re always looking for exceptional people who care deeply
                                about craft, quality, and creative problem-solving.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border" />
            </section>

            {/* Open Roles */}
            <section className="relative bg-surface">
                <div className="container py-20 md:py-28 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left label */}
                        <div className="lg:col-span-3">
                            <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 block sticky top-32">
                                Open Roles
                            </span>
                        </div>

                        {/* Right — empty state */}
                        <div className="lg:col-span-8 lg:col-start-5">
                            <div className="border border-border p-16 md:p-20 flex flex-col items-center justify-center text-center">
                                {/* Icon */}
                                <div className="text-primary mb-8 opacity-40">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" />
                                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <line x1="12" y1="12" x2="12" y2="16" />
                                        <line x1="10" y1="14" x2="14" y2="14" />
                                    </svg>
                                </div>

                                <h2
                                    className="font-display font-black text-ink uppercase tracking-tighter mb-4"
                                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: "1" }}
                                >
                                    No open roles{" "}
                                    <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                        right now
                                    </span>
                                </h2>
                                <p className="text-[15px] leading-[1.8] text-ink-3 max-w-[420px] mb-10">
                                    We don&apos;t have any open positions at the moment, but we&apos;re
                                    always growing. Send us your portfolio anyway — we&apos;d love to
                                    hear from you.
                                </p>
                                <a
                                    href="mailto:hello@sparkstudios.qzz.io?subject=Speculative Application — Spark Studios"
                                    className="btn-primary"
                                >
                                    Send Your Portfolio
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture / Why Work Here */}
            <section className="relative bg-surface-2">
                <div className="border-t border-border" />
                <div className="container py-20 md:py-28 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
                                Life at Spark
                            </span>
                            <h2
                                className="font-display font-black text-ink uppercase tracking-tighter"
                                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: "0.9" }}
                            >
                                What it&apos;s like to{" "}
                                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                    work here
                                </span>
                            </h2>
                            <p className="mt-6 text-[15px] leading-[1.8] text-ink-3">
                                We build a studio where great work is the standard, not the
                                exception. Small team, high trust, real ownership.
                            </p>
                        </div>

                        <div className="lg:col-span-7 lg:col-start-6">
                            <div className="border border-border divide-y divide-border">
                                {[
                                    {
                                        title: "Remote-first",
                                        desc: "Work from wherever you do your best thinking. We care about output, not your timezone.",
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Craft-first culture",
                                        desc: "Every project goes through rigorous design review. We don't ship work we're not proud of.",
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Ownership & autonomy",
                                        desc: "You own your work end-to-end. No micromanagement — just clear goals and full creative freedom.",
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Real impact",
                                        desc: "Small team means your work ships to real clients immediately. No committees, no bottlenecks.",
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                            </svg>
                                        ),
                                    },
                                ].map((perk) => (
                                    <div
                                        key={perk.title}
                                        className="flex items-start gap-6 p-8 hover:bg-surface transition-colors duration-300"
                                    >
                                        <div className="text-primary flex-shrink-0 mt-0.5">{perk.icon}</div>
                                        <div>
                                            <h3 className="font-display font-extrabold text-[15px] uppercase tracking-tight text-ink mb-2">
                                                {perk.title}
                                            </h3>
                                            <p className="text-[14px] leading-[1.7] text-ink-3">{perk.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA strip */}
            <section className="relative bg-ink text-white">
                <div className="border-t border-white/10" />
                <div className="container py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-2">
                            Stay in the loop
                        </p>
                        <h2
                            className="font-display font-black text-white uppercase tracking-tighter"
                            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: "0.95" }}
                        >
                            We&apos;ll post here when{" "}
                            <span className="font-accent italic lowercase tracking-normal font-normal text-primary-light">
                                roles open up.
                            </span>
                        </h2>
                    </div>
                    <a
                        href="mailto:hello@sparkstudios.qzz.io?subject=Keep me posted — Spark Studios Careers"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-display text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10 flex-shrink-0"
                    >
                        Notify Me
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
};

export default CareersPage;
