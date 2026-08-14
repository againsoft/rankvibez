import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Insights",
  description: "RankVibez insights on AI, software engineering, cloud infrastructure and digital growth.",
};

export default function InsightsPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      title="Insights"
      description="Articles and perspectives on AI, software engineering, infrastructure and digital growth — coming soon."
    />
  );
}
