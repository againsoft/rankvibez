import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RankVibez collects, uses and protects information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "This Privacy Policy explains how RankVibez (\"we\", \"us\") collects, uses and protects information when you visit rankvibez.com or engage with our services.",
          ],
        },
        {
          heading: "Information We Collect",
          body: [
            "When you submit our contact form, we collect the information you provide, such as your name, company, email address, phone number and project details.",
            "We may also collect standard technical information such as browser type and general usage data to help us improve the website.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "Information submitted through our contact form is used solely to respond to your inquiry and, where relevant, to prepare a project proposal.",
            "We do not sell or rent personal information to third parties.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain inquiry information for as long as necessary to respond to your request and maintain business records, after which it may be deleted.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can be directed to admin@rankvibez.com.",
          ],
        },
      ]}
    />
  );
}
