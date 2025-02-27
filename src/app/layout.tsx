import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ Add Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Job Match",
  description: "Find the best jobs tailored to your skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-100`}>
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
        <Footer /> {/* ✅ Include Footer */}
      </body>
    </html>
  );
}
