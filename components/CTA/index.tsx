"use client";

import Link from "next/link";

const CTA = () => {
    return (
        <section className="relative bg-ink text-white overflow-hidden">
            {/* Background structural grid lines */}
            <div className="pointer-events-none absolute inset-0 flex justify-between container opacity-10 z-0">
                <div className="w-px h-full bg-white" />
                <div className="w-px h-full bg-white" />
                <div className="w-px h-full bg-white" />
                <div className="w-px h-full bg-white" />
            </div>

            <div className="container relative z-10 py-24 md:py-32 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left - Headline */}
                    <div className="lg:col-span-7">
                        <h2
                            className="font-display font-black uppercase tracking-tighter text-white"
                            style={{
                                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                                lineHeight: "0.9",
                            }}
                        >
                            Let&apos;s Build
                            <br />
                            Something{" "}
                            <span className="font-accent italic lowercase tracking-normal font-normal text-primary-light">
                                great
                            </span>
                            <br />
                            Together.
                        </h2>
                    </div>

                    {/* Right - Text + CTAs */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="w-12 h-1 bg-primary mb-6" />
                        <p className="text-[15px] leading-[1.8] text-ink-4 mb-8">
                            Whether you need a brand identity, a new website, or presentation
                            materials — Spark Studios delivers with clarity, creativity, and
                            speed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-display text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-light"
                                onClick={(e) => {
                                    if (window.location.pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                Start Project
                            </Link>
                            <Link
                                href="https://calendly.com/sparkstudioscreatives/30min"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-display text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10"
                            >
                                Schedule Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
