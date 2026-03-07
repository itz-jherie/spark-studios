import Link from "next/link";
import Image from "next/image";

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
              <Image
                src="/images/logo/logospark3.png"
                alt="Spark Studios Icon"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-black text-[20px] uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-200">
                Spark Studios
              </span>
            </Link>
            <p className="text-[14px] leading-[1.8] text-ink-4 mb-8 max-w-[300px]">
              We Design. Develop. Deliver. Powerful digital experiences for brands that want to stand out.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { label: "X", href: "https://x.com/sparkstudiosHQ" },
                { label: "Li", href: "https://www.linkedin.com/company/spark-studiosllc/" },
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
                "Graphics Design",
                "Framer Development",
                "Web Design",
                "Web Development",
                "Slides Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
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
                { label: "About", href: "/#about" },
                { label: "Work", href: "/projects" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "#" },
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
                  href="mailto:hello@sparkstudios.qzz.io"
                  className="text-[14px] text-ink-4 transition-colors duration-200 hover:text-white"
                >
                  hello@sparkstudios.qzz.io
                </a>
              </li>
              <li className="text-[14px] text-ink-4">
                <p>Toronto, Canada</p>
                <p>Abuja, Nigeria</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-ink-4 uppercase tracking-widest">
            © 2025 Spark Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "X (Twitter)", href: "https://x.com/sparkstudiosHQ" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/spark-studiosllc/" },
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
