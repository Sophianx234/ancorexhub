import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#001514" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ancorexhub.com"),
  title: {
    default: "AncoreXHub | Software Engineering & Digital Product Studio",
    template: "%s | AncoreXHub",
  },
  description:
    "AncoreXHub is an agile software engineering studio in East Legon, Accra. We build high-performance web applications, scalable iOS & Android mobile apps, and user-centric digital products for ambitious founders and enterprises.",
  keywords: [
    "AncoreXHub",
    "software engineering studio Accra",
    "web development Ghana",
    "mobile app development iOS Android",
    "Next.js agency Ghana",
    "React Native development",
    "UI UX product design",
    "MVP development startups",
    "cloud architecture consulting",
    "East Legon tech hub",
  ],
  authors: [{ name: "AncoreXHub", url: "https://ancorexhub.com" }],
  creator: "AncoreXHub",
  publisher: "AncoreXHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ancorexhub.com",
    siteName: "AncoreXHub",
    title: "AncoreXHub | Software Engineering & Digital Product Studio",
    description:
      "Transforming complex ideas into scalable, production-grade digital solutions. Custom web development, mobile apps, and cloud engineering.",
    images: [
      {
        url: "/logob.png",
        width: 1200,
        height: 630,
        alt: "AncoreXHub - Software Engineering & Digital Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AncoreXHub | Software Engineering & Digital Product Studio",
    description:
      "Engineering scalable web applications, modern mobile apps, and user-centric digital products.",
    creator: "@ancorexhub",
    images: ["/logob.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ancorexhub.com/#organization",
      "name": "AncoreXHub",
      "url": "https://ancorexhub.com",
      "logo": "https://ancorexhub.com/logo.png",
      "sameAs": [
        "https://twitter.com/ancorexhub",
        "https://linkedin.com/company/ancorexhub",
        "https://instagram.com/ancorexhub"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+233206192823",
        "contactType": "customer service",
        "email": "ancorexhub@gmail.com",
        "areaServed": ["GH", "Worldwide"],
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ancorexhub.com/#localbusiness",
      "name": "AncoreXHub",
      "url": "https://ancorexhub.com",
      "logo": "https://ancorexhub.com/logo.png",
      "image": "https://ancorexhub.com/logob.png",
      "description": "AncoreXHub is a modern software engineering studio in East Legon, Accra. We specialize in custom web development, mobile apps, and UI/UX design.",
      "telephone": "+233206192823",
      "email": "ancorexhub@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "East Legon",
        "addressLocality": "Accra",
        "addressRegion": "Greater Accra",
        "addressCountry": "GH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 5.6358,
        "longitude": -0.1601
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}