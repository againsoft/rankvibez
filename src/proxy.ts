import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// Next.js 16 renamed `middleware.ts` to `proxy.ts`; the handler shape is
// unchanged, so next-intl's middleware factory is used as-is here.
export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Skip API routes, Next internals and any request for a file (has a dot).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
