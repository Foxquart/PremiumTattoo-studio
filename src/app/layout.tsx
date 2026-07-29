import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Good Luck Tattoo Studio | Premium Ink Art in Miramar Beach",
  description:
    "Award-winning tattoo studio specializing in fine-line, realism, and custom bespoke ink. 15,000+ tattoos completed by master artisans. Book your session today at Good Luck Tattoo Studio, Miramar Beach.",
  keywords: "tattoo studio, tattoo artist, fine line tattoo, realism tattoo, miramar beach tattoo, piercing, custom tattoo",
  icons: [
    {
      url: "/icons/favicon-dark.svg",
      media: "(prefers-color-scheme: light)",
      rel: "icon",
      type: "image/svg",
    },
    {
      url: "/icons/favicon-light.svg",
      media: "(prefers-color-scheme: dark)",
      rel: "icon",
      type: "image/svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
