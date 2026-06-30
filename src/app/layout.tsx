import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Habib Ahmad | Backend & AI Developer",
  description: "Portfolio of M Habib Ahmad, a Backend & AI Developer from Pakistan specializing in bots, agents, and complex backend architectures.",
  keywords: ["M Habib Ahmad", "Backend Developer", "AI Developer", "Pakistan", "Software Engineer", "Bots", "Agents"],
  openGraph: {
    title: "M Habib Ahmad | Backend & AI Developer",
    description: "Explore the portfolio of M Habib Ahmad. Backend and AI projects, bots, and modern architectures.",
    url: "https://mhabibahmad.com",
    siteName: "M Habib Ahmad Portfolio",
    images: [
      {
        url: "https://github.com/AhmadHabib24.png",
        width: 800,
        height: 600,
        alt: "M Habib Ahmad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body>
        <SplashScreen />
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 160px)', paddingTop: '80px' }}>
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
