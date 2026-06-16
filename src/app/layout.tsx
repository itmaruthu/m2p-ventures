import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M2P Ventures | Building Brands. Creating Future.",
  description: "M2P Ventures is a premium enterprise group driving forward strategic divisions including M2P Cocos (premium organic coconut sales) and M2P Nexus (technology consulting and digital solutions partner).",
  keywords: ["M2P Ventures", "M2P Cocos", "M2P Nexus", "Venture Capital", "Enterprise Group", "Strategic Divisions", "Coconut Sales", "Technology Consulting", "Software Engineering", "AI Automations"],
  authors: [{ name: "M2P Ventures" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "M2P Ventures | Building Brands. Creating Future.",
    description: "Discover M2P Ventures, powering M2P Cocos and M2P Nexus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
