import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-border-subtle bg-surface">
      <Container className="flex h-10 items-center justify-center">
        <Link
          href="/ai"
          className="focus-ring flex items-center gap-2 rounded-full text-[13px] font-medium text-muted transition-colors hover:text-foreground"
        >
          <span className="hidden sm:inline">AI is now the infrastructure of modern business.</span>
          <span className="text-foreground">Explore our AI capabilities</span>
          <ArrowRight size={13} />
        </Link>
      </Container>
    </div>
  );
}
