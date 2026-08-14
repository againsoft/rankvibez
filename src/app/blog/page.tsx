import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from the RankVibez team on software, AI, infrastructure and digital growth.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      title="Blog"
      description="Articles and updates from the RankVibez team — coming soon."
    />
  );
}
