import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influcourse - Best Influencer Training Platform",
  description: "Learn from the greatests, and grow as a content creator and influencer. Best influencer training program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0C1416] text-slate-50`}>
        <Navbar />
        {children}
        <Toaster/>
        <Analytics/>
      </body>
    </html>
  );
}
