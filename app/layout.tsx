import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { meta } from "@/content/copy";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ogImage = photos.vatikaExt;

export const metadata: Metadata = {
  title: {
    default: meta.homeTitle,
    template: meta.titleTemplate,
  },
  description: meta.homeDescription,
  applicationName: site.businessName,
  openGraph: {
    type: "website",
    siteName: site.businessName,
    locale: "en_IN",
    title: meta.homeTitle,
    description: meta.homeDescription,
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-svh flex-col">
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
