import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How RankVibez uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="2026"
      sections={[
        {
          heading: "What Are Cookies",
          body: [
            "Cookies are small text files stored on your device that help websites function correctly and, where used, understand how visitors interact with the site.",
          ],
        },
        {
          heading: "How We Use Cookies",
          body: [
            "RankVibez uses essential cookies required for the website to function. If analytics or marketing cookies are added in the future, this policy will be updated accordingly.",
          ],
        },
        {
          heading: "Managing Cookies",
          body: [
            "You can control or disable cookies through your browser settings. Disabling essential cookies may affect website functionality.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about this policy can be directed to admin@rankvibez.com."],
        },
      ]}
    />
  );
}
