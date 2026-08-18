import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing, localeMetadata, type AppLocale } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.rankvibez.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${siteUrl}/${l}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}`;

  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | RankVibez`,
    },
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "RankVibez",
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const dir = localeMetadata[locale as AppLocale].dir;

  return (
    <html lang={locale} dir={dir} className={`${manrope.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
