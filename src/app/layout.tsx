import type { Metadata } from "next";
import { Outfit, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from "@/config";

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

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M2P Ventures | Building Brands. Creating Future.",
  description: "M2P Ventures is a premium enterprise group driving forward strategic divisions including M2P Cocos (premium organic coconut sales) and M2P Nexus (technology consulting and digital solutions partner).",
  keywords: ["M2P Ventures", "M2P Cocos", "M2P Nexus", "Venture Capital", "Enterprise Group", "Strategic Divisions", "Coconut Sales", "Technology Consulting", "Software Engineering", "AI Automations"],
  authors: [{ name: "M2P Ventures" }],
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
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
      className={`${outfit.variable} ${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:;"
        />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-obsidian text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
