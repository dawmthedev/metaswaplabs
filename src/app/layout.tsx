import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import fontSans from "./fonts";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MetaSwap Labs",
  description: "Web and App Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
