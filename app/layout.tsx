import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cholim List - Modern Mi Sheberach Management for Jewish Communities",
  description: "Streamline your cholim names collection with dedicated software built for synagogues and Jewish organizations. Eliminate duplicates, save hours every week, and manage Mi Sheberach lists with dignity.",
  keywords: ["mi sheberach", "cholim list", "jewish software", "synagogue management", "prayer list", "hebrew names"],
  authors: [{ name: "Cholim List" }],
  openGraph: {
    title: "Cholim List - Modern Mi Sheberach Management",
    description: "From paper lists to digital excellence. Modern Mi Sheberach management for Jewish communities.",
    type: "website",
    url: "https://cholimlist.com",
    siteName: "Cholim List",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cholim List - Modern Mi Sheberach Management",
    description: "Streamline your cholim names collection with dedicated software built for Jewish communities.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
