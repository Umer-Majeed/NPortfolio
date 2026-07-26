import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import MeshGradient from "./components/MeshGradient";
import ParticleBackground from "./components/ParticleBackground";
import CursorSpotlight from "./components/CursorSpotlight";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Umer Majeed | Graphic Designer & AI Developer",
  description:
    "Portfolio of Umer Majeed — Graphic Designer, UI/UX Designer, and AI Student showcasing design and development work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
         <LoadingScreen />
        <MeshGradient />
        <ParticleBackground />
        <CursorSpotlight />
        <CustomCursor />
     <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}