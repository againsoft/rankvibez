import { defineRouting } from "next-intl/routing";

/**
 * Per-locale display metadata. Adding a new locale (e.g. a future RTL
 * language like Arabic) means adding one entry here and to `locales`
 * below — no other file needs to change.
 */
export const localeMetadata = {
  en: { label: "English", nativeLabel: "English", flag: "🇬🇧", dir: "ltr" },
  pt: { label: "Portuguese", nativeLabel: "Português", flag: "🇵🇹", dir: "ltr" },
  zh: { label: "Chinese (Simplified)", nativeLabel: "中文", flag: "🇨🇳", dir: "ltr" },
  ja: { label: "Japanese", nativeLabel: "日本語", flag: "🇯🇵", dir: "ltr" },
  fr: { label: "French", nativeLabel: "Français", flag: "🇫🇷", dir: "ltr" },
} as const satisfies Record<string, { label: string; nativeLabel: string; flag: string; dir: "ltr" | "rtl" }>;

export const routing = defineRouting({
  locales: Object.keys(localeMetadata) as Array<keyof typeof localeMetadata>,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});

export type AppLocale = (typeof routing.locales)[number];
