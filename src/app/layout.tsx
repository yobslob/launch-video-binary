import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { StatsDashboard } from "@/components/StatsDashboard";
import { PolicyModal } from "@/components/PolicyModal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brand Launch Videos | Binary Growth",
  description:
    "Explore our high-stakes cinematic brand launch videos, promotional assets, and post-production case studies.",
  keywords:
    "brand launch videos, video production, motion graphics, VFX, promotional videos, corporate video, creator economy",
  openGraph: {
    title: "Brand Launch Videos | Binary Growth",
    description:
      "Explore our high-stakes cinematic brand launch videos, promotional assets, and post-production case studies.",
    type: "website",
    url: "https://binarygrowth.org/launch-videos",
    siteName: "Binary Growth",
    locale: "en_US",
    images: [
      {
        url: "https://binarygrowth.org/white_logo.png",
        width: 800,
        height: 800,
        alt: "Binary Growth Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Launch Videos | Binary Growth",
    description:
      "Explore our high-stakes cinematic brand launch videos, promotional assets, and post-production case studies.",
    images: ["https://binarygrowth.org/white_logo.png"],
  },
  icons: {
    icon: "/white_logo.png",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Brand Launch Videos",
  "provider": {
    "@type": "Organization",
    "name": "Binary Growth",
    "url": "https://binarygrowth.org"
  },
  "description": "Cinema-grade launch films, brand promotional assets, and high-impact motion VFX to introduce products and platforms.",
  "areaServed": "Worldwide"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <AnalyticsTracker />
        <StatsDashboard />
        <PolicyModal />
        {children}
      </body>
    </html>
  );
}
