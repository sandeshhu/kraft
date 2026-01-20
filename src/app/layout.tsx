import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "./(home)/components/Navbar";
import ButtonShowcase from "./(home)/components/ButtonShowcase";
import Navigation, { MobileMenuProvider } from "./components/Navigation";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Agency Kraftx",
  description: "we create website for your buissness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
     >
       <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gradient-to-b from-gray-900 to-gray-900 text-white min-h-screen`}

      >
        <MobileMenuProvider>
          <FuturisticBackground/>
          <Navigation />
          {children}
        </MobileMenuProvider>
      </body>
     </ThemeProvider>
    </html>
  );
}
