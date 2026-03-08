import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M3 20c0-4.97 4.03-9 9-9s9 4.03 9 9" />
        <path d="M12 11V4" />
      </svg>
    ),
    title: "Graphics Design",
    paragraph:
      "Logos, marketing assets, posters, brand visuals — crafted to communicate clearly and beautifully.",
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Framer Development",
    paragraph:
      "Modern, interactive, high-performance websites using Framer. Pixel-perfect builds with custom code and overrides.",
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Web Design",
    paragraph:
      "Conversion-focused, user-friendly layouts made to tell your story and impress your audience.",
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: "Web Development",
    paragraph:
      "Custom-coded websites built with clean, modern, scalable code. Fast, secure, and optimized.",
  },
  {
    id: 5,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M2 7h20" />
        <path d="M9 17v4" />
        <path d="M15 17v4" />
        <path d="M6 21h12" />
      </svg>
    ),
    title: "Slides & Presentation Design",
    paragraph:
      "Engaging pitch decks and brand slides that communicate your message with clarity and style.",
  },
  {
    id: 6,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M7 11.5L9 8h6l2 3.5M12 21A9 9 0 0 0 21 12H3a9 9 0 0 0 9 9z M12 12L9 20M12 12l3 8" />
      </svg>
    ),
    title: "WordPress Development",
    paragraph:
      "Flexible websites powered by WordPress. We build custom themes, eCommerce stores, and high-converting landing pages.",
  },
];

export default featuresData;
