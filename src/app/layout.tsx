import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StarCanvas from "@/components/StarCanvas";
import Cursor from "@/components/Cursor";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingRunes from "@/components/FloatingRunes";

export const metadata: Metadata = {
  title: "Annisa Baizan — Portfolio",
  description: "Annisa Baizan — System Thinker & Analytical Developer. Health Informatics, Institutional Systems, Full-Stack Development.",
  keywords: ["Annisa Baizan", "portfolio", "developer", "health informatics", "full-stack"],
  authors: [{ name: "Annisa Baizan" }],
  openGraph: {
    title: "Annisa Baizan — Portfolio",
    description: "System Thinker & Analytical Developer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <StarCanvas />
        <Cursor />
        <FloatingRunes />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
