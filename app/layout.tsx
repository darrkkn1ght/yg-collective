import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "YG Collective — Young And Gifted | Premium Streetwear",
  description:
    "YG Collective is a Lagos-born premium streetwear brand for the young and gifted. Shop graphic tees, crop tees, tanks, caps, and beanies. Est. 2026.",
  keywords: [
    "YG Collective",
    "Young And Gifted",
    "streetwear",
    "Lagos fashion",
    "graphic tees",
    "premium streetwear",
  ],
  openGraph: {
    title: "YG Collective — Young And Gifted",
    description:
      "Premium streetwear for the young and gifted. Est. 2026.",
    url: "https://ygcollective.com",
    siteName: "YG Collective",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ink text-bone">
        <Header />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
