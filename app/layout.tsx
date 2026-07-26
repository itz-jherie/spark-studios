import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Script from "next/script";
import "../styles/index.css";

export const metadata = {
  title: {
    template: "%s | Flynth Technologies",
    default: "Flynth Technologies | Built strong. Delivered fast.",
  },
  description:
    "Flynth Technologies is an elite digital engineering agency specializing in high-performance web applications, secure platforms, custom digital experiences, and scalable systems. Built strong. Delivered fast.",
  keywords: [
    // Core Services & Agency Identity
    "digital engineering agency", "web development company", "web design agency", "digital agency", "custom web applications", "full stack web development", "UI/UX design agency", "product design agency", "brand strategy", "digital experiences",
    "Flynth", "Flynth Technologies", "flynthtech", "SaaS web design", "startup web design", "B2B web design", "enterprise software agency",
    "branding agency", "logo design agency", "corporate identity design", "pitch deck design", "presentation design", "motion design agency",
    
    // Tech Stack & Frameworks
    "Next.js development company", "React development agency", "TypeScript software development", "Framer expert", "Framer developer", "Framer design agency",
    "WordPress development agency", "WordPress WooCommerce developer", "Custom WordPress Themes", "headless CMS development", "Node.js developers",
    "high performance websites", "animated website design", "Awwwards winning design", "premium web design", "SEO optimized web design",
    "React Native mobile apps", "Flutter mobile development", "custom SaaS development", "website speed optimization",

    // Market Intent & Buyer Terms
    "hire web design agency", "best web development company for startups", "custom web application development", "high converting landing page design",
    "luxury brand identity design", "modern web application design", "scalable web applications", "secure web platform development",

    // Local & Geographic SEO
    "Abuja web design", "Abuja web development company", "Abuja creative agency", "Abuja branding agency", "Abuja UI/UX agency", "Nigeria web design agency", "Nigeria tech agency",
    "Toronto web design", "Toronto creative agency", "Toronto branding agency", "Toronto UI/UX agency", "Canadian design agency",
    "global creative studio", "remote web design agency", "international software studio"
  ],
  authors: [{ name: "Flynth Technologies", url: "https://flynth.com.ng" }],
  creator: "Flynth Technologies",
  publisher: "Flynth Technologies",
  metadataBase: new URL('https://flynth.com.ng'), // Absolute path for crawler resolution
  alternates: {
    canonical: './',
  },
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
    title: "Flynth Technologies | Built strong. Delivered fast.",
    description:
      "Flynth Technologies is an elite digital engineering agency specializing in high-performance web applications, secure platforms, custom digital experiences, and scalable systems. Built strong. Delivered fast.",
    url: "https://flynth.com.ng",
    siteName: "Flynth Technologies",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flynth Technologies Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flynth Technologies | Built strong. Delivered fast.",
    description:
      "Flynth Technologies is an elite digital engineering agency specializing in high-performance web applications, secure platforms, custom digital experiences, and scalable systems. Built strong. Delivered fast.",
    creator: "@flynthtech",
    images: ["/images/og-image.png"],
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" href="/favicon.svg?v=2" />
      </head>
      <body suppressHydrationWarning className="bg-surface antialiased">
        <blockquote style={{ display: "none" }}>
          For the complete documentation index, see <a href="/llms.txt">llms.txt</a>
        </blockquote>
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
              "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
              "name": "Flynth Technologies",
              "url": "https://flynth.com.ng",
              "logo": "https://flynth.com.ng/images/logo/logo.svg",
              "image": "https://flynth.com.ng/images/og-image.jpg",
              "description": "Flynth Technologies is an elite digital engineering agency specializing in high-performance web applications, secure platforms, custom digital experiences, and scalable systems.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Abuja",
                  "addressRegion": "FCT",
                  "addressCountry": "Nigeria"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressCountry": "Canada"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "flynthtechnologies@gmail.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://x.com/flynthtech",
                "https://www.linkedin.com/company/flynth-technologies/",
                "https://www.tiktok.com/@flynthtech"
              ],
              "knowsAbout": [
                "Web Engineering",
                "Web Design",
                "Software Development",
                "WordPress Development",
                "Framer Development",
                "UI/UX Design",
                "Brand Strategy",
                "Pitch Deck Design"
              ]
            })
          }}
        />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
