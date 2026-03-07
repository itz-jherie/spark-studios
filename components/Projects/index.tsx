"use client";

import Image from "next/image";
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        category: "Web Development",
        title: "Masterform Architects Website",
        image: "/images/projects/masterform.png",
        href: "https://www.masterform.com.ng/"
    },
    {
        id: 2,
        category: "Framer Development",
        title: "Blackcoast Estates Listings",
        image: "/images/projects/blackcoast.png",
        href: "https://blackcoastestates.com/"
    },
    {
        id: 3,
        category: "Web Development",
        title: "Entosk Network Limited",
        image: "/images/projects/entosk.png",
        href: "https://www.entosk.com.ng/",
    },
    {
        id: 4,
        category: "Framer Development",
        title: "Fettle Fit BMI",
        image: "/images/projects/fettlefit.png",
        href: "https://www.fettle.fit/"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative bg-surface">
            <div className="border-t border-border" />

            <div className="container py-20 md:py-28 lg:py-32">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
                    <div className="lg:col-span-5">
                        <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
                            Portfolio
                        </span>
                        <h2
                            className="font-display font-black text-ink uppercase tracking-tighter"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                lineHeight: "0.9",
                            }}
                        >
                            Featured{" "}
                            <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                                work
                            </span>
                        </h2>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9 flex items-end">
                        <Link
                            href="/projects"
                            className="btn-outline group text-[13px] !tracking-widest uppercase"
                        >
                            View All Projects
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 transition-transform group-hover:translate-x-1"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                    {projectsData.map((project, i) => (
                        <a key={project.id} href={project.href || "#"} target="_blank" rel="noreferrer" className="group relative bg-surface overflow-hidden cursor-pointer block">
                            <div className="aspect-[4/3] w-full relative overflow-hidden bg-surface-2">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />
                            </div>
                            {/* Info bar */}
                            <div className="flex items-center justify-between p-6 border-t border-border">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink-4 block mb-1">
                                        {project.category}
                                    </span>
                                    <h3 className="font-display font-extrabold text-[16px] uppercase tracking-tight text-ink">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-all duration-300">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
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
    );
};

export default Projects;
