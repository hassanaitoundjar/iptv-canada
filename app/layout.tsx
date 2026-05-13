import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    template: "%s | IPTV Canada"
  },
  description: "Experience the best IPTV Canada service with 25,000+ live channels, 4K sports (NHL/NFL), and 120,000+ VODs. Start your 24-hour free trial now!",
  metadataBase: new URL("https://iptvv.ca"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: siteConfig.verification.google,
  },
  openGraph: {
    title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    url: "https://iptvv.ca",
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IPTV Canada",
              "url": "https://iptvv.ca",
              "logo": "https://iptvv.ca/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": siteConfig.whatsapp,
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": ["English", "French"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IPTV Canada",
              "url": "https://iptvv.ca",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://iptvv.ca/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Navbar />
        <main className="pt-[116px]">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
