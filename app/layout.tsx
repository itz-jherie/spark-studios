
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import "../styles/index.css";

export const metadata = {
  title: {
    template: "%s | Spark Studios",
    default: "Spark Studios | Design That Makes Brands Impossible to Ignore",
  },
  description:
    "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, WordPress, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
  keywords: [
    // Core Services
    "creative agency", "web design", "web development", "WordPress development", "WordPress agency", "Framer design", "brand strategy", "digital experiences",
    "Spark Studios", "UI/UX design", "product design agency", "SaaS web design", "startup web design", "B2B web design",
    "branding agency", "logo design", "identity design", "pitch deck design", "presentation design",
    // Location Based keywords
    "Toronto web design", "Toronto creative agency", "Toronto branding agency", "Toronto UI/UX agency",
    "Abuja web design", "Abuja creative agency", "Abuja branding agency", "Abuja UI/UX agency", "Nigeria web design",
    "Canadian design agency", "global creative studio", "remote design agency",
    // Tech/Niche Keywords
    "Framer expert", "Framer developer", "WordPress WooCommerce developer", "Custom WordPress Themes", "Next.js web development", "React development agency",
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
      "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, WordPress, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
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
      "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, WordPress, Framer websites, and memorable digital experiences. Offices in Toronto and Abuja.",
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
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
            ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('D6P0A0JC77U8I655QRU0');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
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
              "description": "Spark Studios is an elite creative agency specializing in stunning visuals, high-performance web development, WordPress, Framer websites, and memorable digital experiences.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressCountry": "Canada"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Abuja",
                  "addressRegion": "FCT",
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
