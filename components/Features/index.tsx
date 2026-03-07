import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="services" className="relative bg-surface">
      {/* Top border */}
      <div className="border-t border-border" />

      <div className="container py-20 md:py-28 lg:py-32">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
              What We Do
            </span>
            <h2 className="font-display font-black text-ink uppercase tracking-tighter" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: "0.9" }}>
              Our{" "}
              <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                services
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] leading-[1.7] text-ink-3">
              Creative and technical solutions built to elevate your brand&apos;s
              identity and online presence.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid — full-width border grid */}
      <div className="border-t border-border">
        <div className="container p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, i) => (
              <SingleFeature key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
