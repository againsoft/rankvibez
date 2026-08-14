import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the RankVibez website and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing rankvibez.com, you agree to these Terms of Service. If you do not agree, please discontinue use of the website.",
          ],
        },
        {
          heading: "Use of the Website",
          body: [
            "Content on this website is provided for general informational purposes about RankVibez and its services and should not be relied upon as a substitute for a formal proposal or contract.",
          ],
        },
        {
          heading: "Service Engagements",
          body: [
            "Specific project scope, deliverables, pricing and timelines for any engagement are governed by a separate written proposal or agreement between RankVibez and the client.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including text, graphics and branding, is the property of RankVibez unless otherwise noted, and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "RankVibez is not liable for any indirect or consequential loss arising from use of this website. Nothing in these terms limits liability arising from a signed service agreement.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about these terms can be directed to admin@rankvibez.com."],
        },
      ]}
    />
  );
}
