import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.rankvibez.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RankVibez | AI-Driven Software & Technology Solutions",
    template: "%s | RankVibez",
  },
  description:
    "RankVibez builds AI-driven ERP, e-commerce, software, cloud, cybersecurity and digital growth solutions for modern businesses.",
  openGraph: {
    title: "RankVibez | AI-Driven Software & Technology Solutions",
    description:
      "RankVibez builds AI-driven ERP, e-commerce, software, cloud, cybersecurity and digital growth solutions for modern businesses.",
    url: siteUrl,
    siteName: "RankVibez",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankVibez | AI-Driven Software & Technology Solutions",
    description:
      "RankVibez builds AI-driven ERP, e-commerce, software, cloud, cybersecurity and digital growth solutions for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
