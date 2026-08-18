import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  const t = useTranslations("announcementBar");

  return (
    <div className="relative z-50 border-b border-border-subtle bg-surface">
      <Container className="flex h-10 items-center justify-center">
        <Link
          href="/ai"
          className="focus-ring flex items-center gap-2 rounded-full text-[13px] font-medium text-muted transition-colors hover:text-foreground"
        >
          <span className="hidden sm:inline">{t("headline")}</span>
          <span className="text-foreground">{t("cta")}</span>
          <ArrowRight size={13} />
        </Link>
      </Container>
    </div>
  );
}
