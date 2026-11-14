import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "All Black Limo | Seattle Luxury Chauffeur & Black Car Service",
  description:
    "Premium private chauffeur service in Seattle, Bellevue, Tacoma, and Gig Harbor. SeaTac Airport transfers, Pier 66 & Pier 91 cruise transportation, corporate black car, and luxury SUVs.",
  keywords: [
    "All Black Limo Seattle",
    "Seattle chauffeur service",
    "SeaTac airport town car",
    "Pier 66 Pier 91 limo service",
    "Bellevue executive black car",
    "Seattle Mercedes Sprinter charter",
  ],
  openGraph: {
    title: "All Black Limo | Luxury Chauffeur Service in Seattle",
    description:
      "Luxury transportation without compromise. Private sedans, SUVs, and Mercedes Sprinters serving SeaTac Airport, Pier 66, Pier 91, and Puget Sound.",
    url: "https://allblacklimoseattle.com",
    siteName: "All Black Limo LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "All Black Limo Seattle Executive Fleet",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LimousineService"],
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.officialUrl,
    telephone: "+1-206-672-8281",
    email: BUSINESS_INFO.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: BUSINESS_INFO.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description:
      "Seattle's premier private chauffeur service specializing in SeaTac Airport transfers, Pier 66 & Pier 91 cruise terminal transportation, corporate roadshows, and hourly charters.",
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-obsidian text-zinc-100 antialiased selection:bg-champagne selection:text-obsidian">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}