import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { Toaster } from "@/components/ui/sonner";
import { createMetadata, siteConfig } from "@/lib/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${spaceGrotesk.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster richColors position="top-right" />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
