import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cholim List — The organized cholim list system for shuls",
  description: "Keep your shul's cholim list organized, updated, and printable every week — without chasing messages.",
  keywords: ["cholim list", "organized", "shul", "mi sheberach", "jewish", "prayer list", "automated"],
  authors: [{ name: "Cholim List" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icon-192.png',
  },
  openGraph: {
    title: "Cholim List — The organized cholim list system for shuls",
    description: "Keep your shul's cholim list organized, updated, and printable every week — without chasing messages.",
    type: "website",
    url: "https://cholimlist.com",
    siteName: "Cholim List",
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cholim List - The organized cholim list system for shuls',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cholim List — The organized cholim list system for shuls",
    description: "Keep your shul's cholim list organized, updated, and printable every week — without chasing messages.",
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cholim List - The organized cholim list system for shuls',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
