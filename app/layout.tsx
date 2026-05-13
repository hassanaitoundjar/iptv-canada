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
  metadataBase: new URL("https://yourdomain.ca"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: siteConfig.verification.google,
  },
  openGraph: {
    title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2025",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    url: "https://yourdomain.ca",
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
        <Navbar />
        <main className="pt-[116px]">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
