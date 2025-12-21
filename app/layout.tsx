import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const oswald = localFont({
  src: [
    { path: "../fonts/OswaldBold.ttf", weight: "100", style: "normal" },
    ],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const helvetica = localFont({
  src: [
    { path: "../fonts/HelveticaNeueThin.otf", weight: "100", style: "normal" },
    { path: "../fonts/HelveticaNeueThinItalic.otf", weight: "100", style: "italic" },
    { path: "../fonts/HelveticaNeueUltraLight.otf", weight: "200", style: "normal" },
    { path: "../fonts/HelveticaNeueUltraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "../fonts/HelveticaNeueLightItalic.otf", weight: "300", style: "italic" },
    { path: "../fonts/HelveticaNeueRoman.otf", weight: "400", style: "normal" },
    { path: "../fonts/HelveticaNeueItalic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "../fonts/HelveticaNeueMediumItalic.otf", weight: "500", style: "italic" },
    { path: "../fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "../fonts/HelveticaNeueBoldItalic.otf", weight: "700", style: "italic" },
    { path: "../fonts/HelveticaNeueHeavy.otf", weight: "800", style: "normal" },
    { path: "../fonts/HelveticaNeueHeavyItalic.otf", weight: "800", style: "italic" },
    { path: "../fonts/HelveticaNeueBlack.otf", weight: "900", style: "normal" },
    { path: "../fonts/HelveticaNeueBlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Raj Tejaswee",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${oswald.variable} ${playfair.variable} ${helvetica.variable} antialiased bg-[#F0F0F0] text-black overflow-x-hidden`}
          >
        {children}
      </body>
    </html>
  );
}
