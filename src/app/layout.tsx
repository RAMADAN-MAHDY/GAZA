import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Children of Gaza: Stories of Resilience and Suffering",
  description: "A website dedicated to documenting the stories of Gaza's children affected by war, lack of basic necessities, and education. We aim to highlight their suffering and resilience.",
  keywords: ["Gaza children", "suffering", "Gaza war", "lack of education", "basic necessities", "resilience", "Palestine", "humanitarian aid"],
  manifest: "/manifest.json",
  themeColor: "#A31B1B",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gaza Children's Stories",
    // Add more apple-specific meta tags if needed
  },
  icons: {
    icon: "/logo/OIP.webp",
    shortcut: "/logo/OIP.webp",
    apple: "/logo/OIP.webp",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
