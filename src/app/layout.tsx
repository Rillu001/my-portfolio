import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GradientOrbs } from "@/components/effects/GradientOrbs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.subtitle,
  keywords: [
    "Alimohamed Rilwan M",
    "Full Stack Developer",
    "Python",
    "Django",
    "FastAPI",
    "React",
    "Next.js",
    "Flutter",
    "Cyber Security",
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.subtitle,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.subtitle,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  url: site.url,
  sameAs: [site.github],
  description: site.subtitle,
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Christian College of Engineering & Technology",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] font-sans text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GradientOrbs />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
