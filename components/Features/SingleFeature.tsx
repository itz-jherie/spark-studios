import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, index }: { feature: Feature; index: number }) => {
  const { icon, title, paragraph } = feature;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <div className="p-8 md:p-10 h-full transition-colors duration-300 hover:bg-surface-2">
        {/* Number */}
        <span className="text-[12px] font-bold text-ink-4 tracking-widest uppercase mb-6 block">
          {num}
        </span>

        {/* Icon */}
        <div className="text-primary mb-5">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-[18px] uppercase tracking-tight text-ink mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] leading-[1.7] text-ink-3">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
