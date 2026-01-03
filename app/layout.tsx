import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Setup Font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
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

      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HPFENST1PB"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HPFENST1PB');
            `,
          }}
        />
      </head>

      {/* HANYA SATU BODY */}
      <body
        className={`${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <SmoothScroll />
 bd125be (add Google analytic)
        {children}
      </body>
    </html>
  );
}
