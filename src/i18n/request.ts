import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Messages = Record<string, unknown>;

function isPlainObject(value: unknown): value is Messages {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Locale files only need to contain overrides for what's been translated
// so far; anything missing falls back to English rather than crashing or
// silently rendering blank.
function deepMerge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const key of Object.keys(override)) {
    const baseValue = result[key];
    const overrideValue = override[key];
    result[key] =
      isPlainObject(baseValue) && isPlainObject(overrideValue) ? deepMerge(baseValue, overrideValue) : overrideValue;
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const defaultMessages = (await import(`../../messages/${routing.defaultLocale}.json`)).default as Messages;
  const messages =
    locale === routing.defaultLocale
      ? defaultMessages
      : deepMerge(defaultMessages, ((await import(`../../messages/${locale}.json`)).default as Messages) ?? {});

  return { locale, messages };
});
