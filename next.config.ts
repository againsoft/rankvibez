import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./src/i18n/routing";
import { services } from "./src/data/services";

const withNextIntl = createNextIntlPlugin();

/**
 * Services used to live at `/services/<slug>`; they are now nested under their
 * category. Keep the flat URLs alive so existing links and indexed pages land
 * on the canonical path instead of a 404.
 *
 * No service slug equals a category slug, so these sources can never shadow a
 * category page.
 */
function legacyServiceRedirects() {
  return services.flatMap((service) => {
    const destination = `/services/${service.category}/${service.slug}`;
    return [
      {
        source: `/services/${service.slug}`,
        destination: `/${routing.defaultLocale}${destination}`,
        permanent: true,
      },
      {
        source: `/:locale(${routing.locales.join("|")})/services/${service.slug}`,
        destination: `/:locale${destination}`,
        permanent: true,
      },
    ];
  });
}

const nextConfig: NextConfig = {
  async redirects() {
    return legacyServiceRedirects();
  },
};

export default withNextIntl(nextConfig);
