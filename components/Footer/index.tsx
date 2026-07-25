"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-ink text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80 group"
            >
              <img
                src="/images/logo/flynth-horizontal-everyday-monochrome-white.svg"
                alt="Flynth Technologies"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] leading-[1.8] text-ink-4 mb-8 max-w-[300px]">
              We Design. Develop. Deliver. Powerful digital experiences for brands that want to stand out.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { label: "X", href: "https://x.com/flynthtech" },
                { label: "Li", href: "https://www.linkedin.com/company/flynth-technologies" },
                { label: "Tt", href: "https://www.tiktok.com/@flynthtech" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 flex items-center justify-center border border-white/15 text-[12px] font-bold uppercase tracking-widest text-ink-4 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-4 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Web & Mobile App Development",
                "WordPress Development",
                "Framer Development",
                "Web Design",
                "Slides Design",
                "Graphics Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-[14px] text-ink-4 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-4 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Work", href: "/projects" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-ink-4 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-4 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#contact"
                  className="text-[14px] text-ink-4 transition-colors duration-200 hover:text-white"
                onClick={(e) => {
                    const pathname = window.location.pathname;
                    if (pathname === "/") {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  flynthtechnologies@gmail.com
                </a>
              </li>
              <li className="text-[14px] text-ink-4">
                <p>Abuja, Nigeria</p>
                <p>Worldwide</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-ink-4 uppercase tracking-widest">
            © 2026 Flynth Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "X (Twitter)", href: "https://x.com/flynthtech" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/flynth-technologies" },
              { label: "TikTok", href: "https://www.tiktok.com/@flynthtech" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-ink-4 uppercase tracking-widest transition-colors duration-200 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
