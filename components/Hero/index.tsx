"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative bg-surface min-h-[100svh] flex flex-col justify-between pt-20 lg:pt-28">

      {/* Background structural grid lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between container opacity-20 z-0">
        <div className="w-px h-full bg-border" />
        <div className="w-px h-full bg-border" />
        <div className="w-px h-full bg-border" />
        <div className="w-px h-full bg-border" />
      </div>

      <div className="container relative z-10 flex-grow flex flex-col justify-start pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Main Headline - Left Column */}
          <div className="lg:col-span-8 relative">
            <h1 className="font-display font-black uppercase text-ink tracking-tighter" style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", lineHeight: "0.85" }}>
              <div className="overflow-hidden pb-2">
                <div className="will-reveal animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Design That
                </div>
              </div>
              <div className="overflow-hidden pb-2">
                <div className="will-reveal animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Makes Brands
                </div>
              </div>

              {/* The Italic Accent Word */}
              <div className="overflow-hidden pb-4 mt-2">
                <div className="will-reveal animate-slide-up text-primary lowercase tracking-normal font-normal font-accent italic" style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)", animationDelay: '0.3s' }}>
                  impossible
                </div>
              </div>

              <div className="overflow-hidden pb-2">
                <div className="will-reveal animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  To Ignore.
                </div>
              </div>
            </h1>
          </div>

          {/* Subtext and CTAs - Right Column */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right lg:pt-[120px]">

            {/* Spinning decorative text ring */}
            <div className="mb-10 pointer-events-none will-reveal animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="bg-primary shadow-btn-glow rounded-full w-[140px] h-[140px] relative flex items-center justify-center">
                <svg width="140" height="140" viewBox="0 0 140 140" className="animate-spin-slow absolute inset-0 text-white">
                  <path id="circlePath" d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-current">
                    <textPath href="#circlePath" startOffset="0" textLength="314" lengthAdjust="spacing">
                      SPARK STUDIOS • CREATIVE AGENCY •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <div className="max-w-[360px] will-reveal animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-1 bg-primary mb-6 lg:ml-auto" />
              <p className="text-[16px] font-medium leading-[1.7] text-ink-3">
                Spark Studios creates stunning visuals, high-performance websites,
                and memorable digital experiences for brands that want to stand out globally.
              </p>

              <div className="mt-8 flex flex-row gap-4 lg:justify-end">
                <Link href="/#contact" className="btn-primary group" onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    requestAnimationFrame(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    });
                  }
                }}>
                  Start Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link href="/#projects" className="btn-outline" onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    requestAnimationFrame(() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    });
                  }
                }}>
                  Portfolio
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Structural Stats Footer */}
      <div className="border-t border-border mt-auto relative z-10 bg-surface will-reveal animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <div className="container p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">

            {/* Stat 1 */}
            <div className="p-8 md:p-10 flex flex-col justify-center hover:bg-surface-2 transition-colors duration-300">
              <span className="text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-2">Completed Projects</span>
              <div className="font-display font-black text-4xl text-ink">
                20<span className="text-primary">+</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-8 md:p-10 flex flex-col justify-center hover:bg-surface-2 transition-colors duration-300">
              <span className="text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-2">Satisfaction Rate</span>
              <div className="font-display font-black text-4xl text-ink">
                96<span className="text-primary">%</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-8 md:p-10 flex flex-col justify-center hover:bg-surface-2 transition-colors duration-300">
              <span className="text-[12px] uppercase tracking-widest font-bold text-ink-4 mb-2">Client Base</span>
              <div className="font-display font-black text-4xl text-ink">
                Global
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
