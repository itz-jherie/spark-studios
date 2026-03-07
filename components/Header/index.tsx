"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Handles anchor-scroll links like /#services — works whether on home or another page
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    setNavbarOpen(false);

    // Only intercept hash links (e.g. /#services)
    if (!path.startsWith("/#")) return;

    const hash = path.replace("/", "");  // → #services
    const id = hash.replace("#", "");    // → services

    if (pathname === "/") {
      // Already on homepage — scroll directly
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On another page — navigate home, then scroll after landing
      e.preventDefault();
      router.push("/");
      // Wait for page to render then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  return (
    <header
      className={`top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${sticky
        ? "fixed z-[9999] bg-surface border-b border-border shadow-sm transform-none"
        : "absolute bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container relative">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block transition-all">
              <Image
                src="/images/logo/logospark1.png"
                alt="Spark Studios"
                width={250}
                height={80}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <nav>
              <ul className="flex space-x-12">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id} className="group relative">
                    <a
                      href={menuItem.path || "/"}
                      onClick={(e) => handleNavClick(e, menuItem.path || "/")}
                      className="text-[13px] uppercase tracking-[0.1em] font-semibold text-ink-3 transition-colors duration-200 hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full cursor-pointer"
                    >
                      {menuItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-6">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="btn-primary hidden md:inline-flex !py-3 !px-6 text-xs uppercase tracking-widest cursor-pointer"
            >
              Start a Project
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="flex flex-col justify-center items-center w-8 h-8 lg:hidden focus:outline-none"
            >
              <span
                className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-y-[6px] rotate-45" : "-translate-y-1"
                  }`}
              />
              <span
                className={`block h-[2px] w-6 bg-ink transition-opacity duration-300 ease-in-out ${navbarOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-in-out ${navbarOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-1"
                  }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-surface border-b border-border shadow-lg transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${navbarOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="container px-4 py-6">
          <ul className="flex flex-col space-y-4">
            {menuData.map((menuItem) => (
              <li key={menuItem.id}>
                <a
                  href={menuItem.path || "/"}
                  onClick={(e) => handleNavClick(e, menuItem.path || "/")}
                  className="block text-sm uppercase tracking-widest font-semibold text-ink hover:text-primary transition-colors duration-200 py-2 cursor-pointer"
                >
                  {menuItem.title}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-4 border-t border-border">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="btn-primary w-full text-xs uppercase tracking-widest justify-center cursor-pointer"
              >
                Start a Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
