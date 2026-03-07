
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Our Work",
    description: "Explore our selection of premium projects across branding, web design, development, and presentation design.",
    openGraph: {
        title: "Our Work | Spark Studios",
        description: "Explore our selection of premium projects across branding, web design, development, and presentation design.",
        url: "https://sparkstudios.qzz.io/projects",
    },
};

const allProjects = [
    {
        id: 1,
        category: "Web Development",
        title: "Masterform Architects Website",
        description:
            "A high-performance interactive portfolio and marketing site crafted for a premium architecture and construction firm.",
        image: "/images/projects/masterform.png",
        href: "https://www.masterform.com.ng/",
    },
    {
        id: 2,
        category: "Framer Development",
        title: "Blackcoast Estates Listings",
        description:
            "A seamless, high-performance real estate listings platform built natively in Framer with custom property CMS architecture.",
        image: "/images/projects/blackcoast.png",
        href: "https://blackcoastestates.com/",
    },
    {
        id: 3,
        category: "Web Development",
        title: "Entosk Network Limited",
        description:
            "A modern corporate platform designed and developed to establish a commanding digital presence for a B2B network.",
        image: "/images/projects/entosk.png",
        href: "https://www.entosk.com.ng/",
    },
    {
        id: 4,
        category: "Framer Development",
        title: "Fettle Fit BMI",
        description:
            "A seamless health and wellness platform built intuitively in Framer to calculate metrics and deliver personalized fitness pathways.",
        image: "/images/projects/fettlefit.png",
        href: "https://www.fettle.fit/",
    },
    {
        id: 5,
        category: "Framer Development",
        title: "Milrea",
        description:
            "A high-converting landing page and corporate identity site developed from the ground up in Framer with custom layout adjustments.",
        image: "/images/projects/milrea.png",
        href: "https://www.milrea.com/",
    },
    {
        id: 6,
        category: "Framer Development",
        title: "Loup Garou Films",
        description:
            "A visually striking and immersive portfolio website built in Framer for a creative film production company.",
        image: "/images/projects/loupgarou.png",
        href: "https://www.loupgaroufilms.com/",
    },
    {
        id: 7,
        category: "Framer Development",
        title: "Hive Music",
        description:
            "A dynamic, high-performance web experience crafted in Framer for an innovative music and audio brand.",
        image: "/images/projects/hivemusic.png",
        href: "https://www.hivemusic.com/",
    },
    {
        id: 8,
        category: "Framer Development",
        title: "Routley FC",
        description:
            "A modern, robust club website engineered in Framer to showcase team identity, fixtures, and community engagement.",
        image: "/images/projects/routleyfc.png",
        href: "https://routleyfc.com/",
    },
];

const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

const ProjectsPage = () => {
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
                        <span className="text-primary">Projects</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-7">
                            <h1
                                className="font-display font-black text-ink uppercase tracking-tighter"
                                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
                            >
                                Our{" "}
                                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                    work
                                </span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                            <p className="text-[16px] leading-[1.8] text-ink-3">
                                A selection of projects across branding, web design, development,
                                and presentation design.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border" />
            </section>

            {/* Projects Grid */}
            <section className="relative bg-surface">
                <div className="container py-20 md:py-28 lg:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                        {allProjects.map((project) => (
                            <a
                                key={project.id}
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative bg-surface overflow-hidden cursor-pointer block"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-surface-2">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />

                                    {/* Hover arrow */}
                                    <div className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center bg-primary text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-8 border-t border-border">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink-4 block mb-2">
                                        {project.category}
                                    </span>
                                    <h2 className="font-display font-extrabold text-[18px] uppercase tracking-tight text-ink mb-3 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-[14px] leading-[1.7] text-ink-3 max-w-[420px]">
                                        {project.description}
                                    </p>

                                    {/* View link */}
                                    <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Project
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="relative bg-ink text-white">
                <div className="border-t border-white/10" />
                <div className="container py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2
                        className="font-display font-black text-white uppercase tracking-tighter"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: "0.95" }}
                    >
                        Like what you{" "}
                        <span className="font-accent italic lowercase tracking-normal font-normal text-primary-light">
                            see?
                        </span>
                    </h2>
                    <Link href="/#contact" className="btn-primary flex-shrink-0">
                        Start a Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
