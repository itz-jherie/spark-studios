import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata = {
    title: "Services",
    description: "Explore our premium design and development services including Framer, Next.js, Web Design, Graphics Design, and Slides Design.",
    openGraph: {
        title: "Services | Spark Studios",
        description: "Explore our premium design and development services.",
        url: "https://sparkstudios.qzz.io/services",
    },
};

const servicesList = [
    {
        title: "Framer Development",
        description: "Lightning-fast, beautifully animated websites built visually without compromising on code quality. Perfect for marketing sites, portfolios, and landing pages.",
        features: ["Custom Animations", "CMS Integration", "Custom Code", "Overrides"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Web Development",
        description: "Robust, scalable web applications built with modern frameworks like Next.js and React. We deliver clean, maintainable code for complex functional requirements.",
        features: ["Full-Stack Next.js", "API Integrations", "Database Architecture", "Performance Tuning"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        title: "WordPress Development",
        description: "Flexible, SEO-friendly websites powered by the world's most popular CMS. We build custom themes, powerful e-commerce stores, and high-converting landing pages.",
        features: ["E-commerce / WooCommerce", "High-Converting Landing Pages", "Custom Theme Design", "Plugin Integration"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M7 11.5L9 8h6l2 3.5M12 21A9 9 0 0 0 21 12H3a9 9 0 0 0 9 9z M12 12L9 20M12 12l3 8" />
            </svg>
        ),
    },
    {
        title: "Web Design",
        description: "User-centric interface design that not only looks stunning but drives conversions. We engineer experiences that your users will intuitively understand and love.",
        features: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
    },
    {
        title: "Graphics Design & Branding",
        description: "Visual identities that capture the essence of your business. We craft memorable logos, color palettes, and brand guidelines that make you impossible to ignore.",
        features: ["Logo Design", "Brand Identity", "Marketing Assets", "Social Media Kits"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
    {
        title: "Slides & Pitch Decks",
        description: "High-stakes presentation design for founders and speakers. We distill complex information into visually compelling narratives that secure funding and win clients.",
        features: ["Pitch Decks", "Sales Presentations", "Keynote/PowerPoint", "Data Visualization"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
];

const ServicesPage = () => {
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
                    <div className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-8">
                        <Link href="/" className="hover:text-primary transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-border-2">—</span>
                        <span className="text-primary">Services</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1
                                className="font-display font-black text-ink uppercase tracking-tighter"
                                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
                            >
                                What We{" "}
                                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                    do
                                </span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="text-[16px] leading-[1.8] text-ink-3">
                                Comprehensive digital solutions designed to elevate your brand,
                                engage your audience, and drive measurable business growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border" />
            </section>

            {/* Services List */}
            <section className="relative bg-surface">
                <div className="container py-20 md:py-28 lg:py-32">
                    <div className="space-y-12 md:space-y-16 lg:space-y-24">
                        {servicesList.map((service, index) => (
                            <div
                                key={service.title}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${index !== servicesList.length - 1 ? 'pb-12 md:pb-16 lg:pb-24 border-b border-border' : ''}`}
                            >
                                {/* Left side: Title & Icon */}
                                <div className="lg:col-span-5">
                                    <div className="h-16 w-16 bg-surface-2 border border-border flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h2 className="font-display font-black text-3xl md:text-4xl text-ink uppercase tracking-tighter mb-4">
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Right side: Description & Features */}
                                <div className="lg:col-span-7 lg:pt-2">
                                    <p className="text-[16px] md:text-[18px] leading-[1.8] text-ink-3 mb-10">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                        {service.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span className="text-[15px] font-medium text-ink-2">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </>
    );
};

export default ServicesPage;
