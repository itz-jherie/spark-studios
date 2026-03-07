
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "A creative studio built on the belief that extraordinary design is the most powerful competitive advantage a brand can have.",
  openGraph: {
    title: "About Us | Spark Studios",
    description: "A creative studio built on the belief that extraordinary design is the most powerful competitive advantage a brand can have.",
    url: "https://sparkstudios.qzz.io/about",
  },
};

const AboutPage = () => {
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
            <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
            <span className="text-border-2">—</span>
            <span className="text-primary">About</span>
          </div>

          <h1
            className="font-display font-black text-ink uppercase tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
          >
            Who We{" "}
            <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
              are
            </span>
          </h1>

          <p className="mt-8 text-[16px] leading-[1.8] text-ink-3 max-w-[520px]">
            A creative studio built on the belief that extraordinary design is the
            most powerful competitive advantage a brand can have.
          </p>
        </div>

        <div className="border-t border-border" />
      </section>

      {/* About Content */}
      <AboutSectionOne />

      {/* Values Section */}
      <section className="relative bg-surface-2">
        <div className="border-t border-border" />
        <div className="container py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
                Our Values
              </span>
              <h2
                className="font-display font-black text-ink uppercase tracking-tighter"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: "0.9" }}
              >
                How We{" "}
                <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                  work
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border">
                {[
                  { label: "Clarity", desc: "We strip away the noise and deliver work that communicates with precision." },
                  { label: "Craft", desc: "Every pixel, word, and interaction is considered with care and intention." },
                  { label: "Speed", desc: "We move fast without compromising quality — because your time is valuable." },
                ].map((v) => (
                  <div key={v.label} className="p-8 hover:bg-surface transition-colors duration-300">
                    <h3 className="font-display font-black text-[18px] uppercase tracking-tight text-ink mb-3">{v.label}</h3>
                    <p className="text-[14px] leading-[1.7] text-ink-3">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative bg-ink text-white">
        <div className="container py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2
            className="font-display font-black text-white uppercase tracking-tighter"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: "0.95" }}
          >
            Ready to work{" "}
            <span className="font-accent italic lowercase tracking-normal font-normal text-primary-light">together?</span>
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

export default AboutPage;
