import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "BizMetricsHQ — Business Benchmarks For Entrepreneurs",
  description:
    "Interquartile ranges and medians for revenue, profit margins, owner salaries, and valuation multiples across 100+ industries. Transparent methodology published.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
