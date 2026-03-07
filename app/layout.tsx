
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export const metadata = {
  title: {
    template: "%s | Spark Studios",
    default: "Spark Studios | Design That Makes Brands Impossible to Ignore",
  },
  description:
    "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
  keywords: [
    // Core Services
    "creative agency", "web design", "web development", "Framer design", "brand strategy", "digital experiences",
    "Spark Studios", "UI/UX design", "product design agency", "SaaS web design", "startup web design", "B2B web design",
    "branding agency", "logo design", "identity design", "pitch deck design", "presentation design",
    // Location Based keywords
    "Toronto web design", "Toronto creative agency", "Toronto branding agency", "Toronto UI/UX agency",
    "Abuja web design", "Abuja creative agency", "Abuja branding agency", "Abuja UI/UX agency", "Nigeria web design",
    "Canadian design agency", "global creative studio", "remote design agency",
    // Tech/Niche Keywords
    "Framer expert", "Framer developer", "Next.js web development", "React development agency",
    "high performance websites", "animated websites", "Awwwards winning design", "premium web design",
    "luxury brand identity", "modern web design"
  ],
  authors: [{ name: "Spark Studios", url: "https://sparkstudios.qzz.io" }],
  creator: "Spark Studios",
  publisher: "Spark Studios",
  metadataBase: new URL('https://sparkstudios.qzz.io'), // Absolute path for crawler resolution
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Spark Studios | Design That Makes Brands Impossible to Ignore",
    description:
      "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
    url: "https://sparkstudios.qzz.io",
    siteName: "Spark Studios",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spark Studios Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Studios | Design That Makes Brands Impossible to Ignore",
    description:
      "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
    creator: "@sparkstudiosHQ",
    images: ["/images/og-image.jpg"],
  },
  category: "design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-surface antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Spark Studios",
              "url": "https://sparkstudios.qzz.io",
              "logo": "https://sparkstudios.qzz.io/images/logospark3.png",
              "image": "https://sparkstudios.qzz.io/images/og-image.jpg",
              "description": "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, Framer websites, and memorable digital experiences.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressCountry": "Canada"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Abuja",
                  "addressCountry": "Nigeria"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@sparkstudios.qzz.io",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://x.com/sparkstudiosHQ",
                "https://linkedin.com/company/spark-studios"
              ]
            })
          }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
