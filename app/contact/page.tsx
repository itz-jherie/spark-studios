
import Contact from "@/components/Contact";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Let's talk. Tell us about your project. We respond within 24 hours to help bring your brand's digital presence to life.",
  openGraph: {
    title: "Contact | Spark Studios",
    description: "Let's talk. Tell us about your project. We respond within 24 hours.",
    url: "https://sparkstudios.qzz.io/contact",
  },
};

const ContactPage = () => {
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
            <span className="text-primary">Contact</span>
          </div>

          <h1
            className="font-display font-black text-ink uppercase tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "0.9" }}
          >
            Let&apos;s{" "}
            <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
              talk
            </span>
          </h1>

          <p className="mt-8 text-[16px] leading-[1.8] text-ink-3 max-w-[480px]">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>

        <div className="border-t border-border" />
      </section>

      {/* Contact Form */}
      <Contact />
    </>
  );
};

export default ContactPage;
