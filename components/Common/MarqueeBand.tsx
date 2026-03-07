"use client";

const TAGLINE = "We Design. Develop. Deliver. Powerful digital experiences.";
const SEPARATOR = "★";
const REPEAT = 8;

const MarqueeBand = () => {
    return (
        <div className="relative bg-ink overflow-hidden border-t border-b border-white/10 py-5 select-none">
            {/* Keyframe injected as a plain global style tag */}
            <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

            {/* Left fade */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
                style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }}
            />
            {/* Right fade */}
            <div
                className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
                style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }}
            />

            <div
                className="flex whitespace-nowrap"
                style={{
                    animation: "marqueeScroll 28s linear infinite",
                    willChange: "transform",
                }}
            >
                {Array.from({ length: REPEAT }).map((_, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-6 pr-6 text-[13px] font-semibold uppercase tracking-[0.15em]"
                    >
                        <span className="text-white">{TAGLINE}</span>
                        <span className="text-primary text-[8px]">{SEPARATOR}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MarqueeBand;
