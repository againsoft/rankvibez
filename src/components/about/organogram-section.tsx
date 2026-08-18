import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AvatarPhoto } from "@/components/shared/avatar-photo";
import { AvatarInitials } from "@/components/shared/avatar-initials";
import { leadership, teamDepartments, type TeamMember } from "@/data/team";
import { services } from "@/data/services";

function findDept(id: string) {
  return teamDepartments.find((d) => d.id === id)?.members ?? [];
}

function findServices(slugs: string[]) {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
}

const [chairman, ceo, cto, cfo] = leadership;

type Line = "ceo" | "cto" | "cfo";

const LINE_STYLES: Record<Line, { dot: string; text: string; stem: string; borderTop: string }> = {
  ceo: { dot: "bg-primary", text: "text-primary", stem: "bg-primary/50", borderTop: "border-t-primary/50" },
  cto: { dot: "bg-secondary", text: "text-secondary", stem: "bg-secondary/50", borderTop: "border-t-secondary/50" },
  cfo: { dot: "bg-amber-400", text: "text-amber-400", stem: "bg-amber-400/50", borderTop: "border-t-amber-400/50" },
};

const branches: { id: string; line: Line; services: ReturnType<typeof findServices>; members: TeamMember[] }[] = [
  {
    id: "enterprise-software",
    line: "cto",
    services: findServices(["erp", "ai-erp", "ecommerce", "web-development"]),
    members: findDept("development"),
  },
  {
    id: "cloud-infrastructure",
    line: "cto",
    services: findServices(["server-maintenance", "cloud-infrastructure", "business-email"]),
    members: findDept("cloud-infrastructure"),
  },
  {
    id: "cyber-security",
    line: "cto",
    services: findServices(["cyber-security"]),
    members: findDept("cyber-security"),
  },
  {
    id: "ai-business-transformation",
    line: "cto",
    services: findServices(["ai-transformation", "virtual-assistance"]),
    members: findDept("ai-automation"),
  },
  {
    id: "digital-growth",
    line: "cfo",
    services: findServices(["digital-marketing", "seo", "ads-campaign", "conversion-optimization"]),
    members: [...findDept("seo-marketing"), ...findDept("marketing")],
  },
  {
    id: "creative-brand",
    line: "ceo",
    services: [],
    members: findDept("graphics-design"),
  },
  {
    id: "project-client-operations",
    line: "ceo",
    services: [],
    members: findDept("management"),
  },
];

function LeaderNode({ person, size = 64 }: { person: TeamMember; size?: number }) {
  const tRoles = useTranslations("teamData.roles");
  return (
    <div className="card-surface flex w-full max-w-[220px] flex-col items-center gap-3 rounded-2xl p-5 text-center">
      {person.image ? (
        <AvatarPhoto src={person.image} name={person.name} size={size} />
      ) : (
        <AvatarInitials name={person.name} size={size} />
      )}
      <div>
        <p className="text-sm font-semibold text-foreground">{person.name}</p>
        <p className="mt-0.5 text-xs text-muted-2">{tRoles(person.roleId)}</p>
      </div>
    </div>
  );
}

function MemberCard({ person }: { person: TeamMember }) {
  const tRoles = useTranslations("teamData.roles");
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border-subtle bg-white/[0.02] p-3">
      {person.image ? (
        <AvatarPhoto src={person.image} name={person.name} size={36} />
      ) : (
        <AvatarInitials name={person.name} size={36} />
      )}
      <div>
        <p className="text-xs font-medium text-foreground">{person.name}</p>
        <p className="text-[11px] text-muted-2">{tRoles(person.roleId)}</p>
      </div>
    </div>
  );
}

export function OrganogramSection() {
  const t = useTranslations("orgChart");

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {(Object.keys(LINE_STYLES) as Line[]).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`h-[3px] w-6 rounded-full ${LINE_STYLES[key].dot}`} />
              <span className="text-xs text-muted">{t(`reportsTo.${key}`)}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <LeaderNode person={chairman} size={72} />
          <div className="h-8 w-px bg-border-strong" />
          <div className="hidden w-full max-w-3xl border-t border-border-strong sm:block" />
          <div className="grid w-full max-w-3xl grid-cols-1 gap-8 pt-0 sm:grid-cols-3">
            {([
              [ceo, "ceo"],
              [cto, "cto"],
              [cfo, "cfo"],
            ] as [TeamMember, Line][]).map(([person, line]) => (
              <div key={person.name} className="flex flex-col items-center">
                <div className={`h-8 w-px ${LINE_STYLES[line].stem}`} />
                <LeaderNode person={person} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch, bi) => (
            <Reveal key={branch.id} delay={bi * 0.05} className="flex flex-col items-center">
              <div className={`h-6 w-px ${LINE_STYLES[branch.line].stem}`} />
              <div className="mb-4 text-center">
                <h3 className="text-sm font-semibold text-foreground">{t(`branches.${branch.id}`)}</h3>
                <p className={`mt-0.5 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.1em] ${LINE_STYLES[branch.line].text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${LINE_STYLES[branch.line].dot}`} />
                  {t(`reportsTo.${branch.line}`)}
                </p>
              </div>

              {branch.services.length > 0 && (
                <div className="mb-5 flex flex-wrap justify-center gap-1.5">
                  {branch.services.map((service) => (
                    <ServiceChip key={service.slug} slug={service.slug} />
                  ))}
                </div>
              )}

              <div
                className={`flex w-full flex-col gap-2.5 rounded-2xl border border-border-subtle border-t-2 bg-white/[0.015] p-3 ${LINE_STYLES[branch.line].borderTop}`}
              >
                {branch.members.map((person) => (
                  <MemberCard key={person.name} person={person} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceChip({ slug }: { slug: string }) {
  const tService = useTranslations(`servicesData.${slug}`);
  return (
    <Link
      href={`/services/${slug}`}
      className="focus-ring rounded-full border border-border-subtle px-2.5 py-1 text-[10px] text-muted transition-colors hover:border-primary/50 hover:text-foreground"
    >
      {tService("name")}
    </Link>
  );
}
