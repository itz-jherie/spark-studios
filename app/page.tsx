import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import MarqueeBand from "@/components/Common/MarqueeBand";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <MarqueeBand />
      <Features />
      <Projects />
      <MarqueeBand />
      <AboutSectionOne />
      <CTA />
      <Contact />
    </>
  );
}
