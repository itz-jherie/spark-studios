"use client";

import Link from "next/link";

const AboutSectionOne = () => {
  return (
    <section id="about" className="relative bg-surface">
      <div className="border-t border-border" />

      <div className="container py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Content */}
          <div className="lg:col-span-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
              About Us
            </span>
            <h2
              className="font-display font-black text-ink uppercase tracking-tighter mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: "0.9",
              }}
            >
              Your Vision,{" "}
              <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                our expertise
              </span>
            </h2>

            <p className="text-[15px] leading-[1.8] text-ink-3 mb-10 max-w-[480px]">
              At Spark Studios, we transform your ideas into stunning realities.
              Our expert team collaborates closely with you to bring your
              brand&apos;s vision to life, delivering innovative designs and
              impactful digital strategies.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Premium Quality",
                "Custom Branding",
                "Pixel-Perfect Design",
                "Fast Delivery",
                "Scalable Solutions",
                "Client-Centric",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14px] font-medium text-ink-2"
                >
                  <div className="h-1.5 w-1.5 bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link href="/#contact" className="btn-primary">
              Work With Us
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Right - Stats Grid */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border border-border">
              <div className="grid grid-cols-2 divide-x divide-y divide-border">
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "45+", label: "Projects Done" },
                  { number: "20+", label: "Happy Clients" },
                  { number: "5+", label: "Team Members" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-8 md:p-10 hover:bg-surface-2 transition-colors duration-300"
                  >
                    <div className="font-display font-black text-3xl md:text-4xl text-ink mb-2 tracking-tight">
                      {stat.number.replace("+", "")}
                      <span className="text-primary">+</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink-4">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Award badges */}
              <div className="border-t border-border p-6 flex flex-wrap gap-3">
                {["Top Rated", "5-Star Reviews", "Global Reach"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="text-[11px] font-bold uppercase tracking-widest text-ink-4 border border-border px-3 py-1.5"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
