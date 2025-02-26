import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // ✅ Added variable name

export const metadata: Metadata = {
  title: "Job AI",
  description: "Get Applied",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> {/* ✅ Removed geistSans & geistMono */}
        {children}
      </body>
    </html>
  );
}
