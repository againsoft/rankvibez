import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical documentation and guides from RankVibez.",
};

export default function DocumentationPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      title="Documentation"
      description="Technical documentation for RankVibez clients and partners — coming soon."
    />
  );
}
