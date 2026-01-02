import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: {
    default: "Tafaseel Interior Design & Architecture",
    template: "%s | Tafaseel",
  },
  description:
    "Luxury interior design, architecture, and construction services in Dubai — crafted with precision, creativity, and modern elegance.",
  keywords: [
    "Interior Design Dubai",
    "Luxury Interiors UAE",
    "Architecture Dubai",
    "Fit-Out Dubai",
    "Construction Consultancy Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tafaseel — Luxury Interior Design & Architecture",
    description:
      "Premium interior design, construction supervision, and architectural services in the UAE.",
    url: "https://tafaseelarch.com",
    siteName: "Tafaseel",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-offwhite text-charcoal font-poppins antialiased">
        
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="relative min-h-screen overflow-hidden">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
        <ToastProvider />

      </body>
    </html>
  );
}
