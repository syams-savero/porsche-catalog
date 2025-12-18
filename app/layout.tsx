import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Setup Font Keren
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"], // Ambil variasi ketebalan
});

export const metadata: Metadata = {
  title: "Porsche Catalog",
  description: "Immersive Automotive Showcase",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'></text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* HANYA BOLEH ADA SATU BODY DI SINI */}
      <body className={`${spaceGrotesk.variable} antialiased bg-black text-white`}>
        <SmoothScroll /> {}
        {children}
      </body>
    </html>
  );
}
