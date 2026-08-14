import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AvatarPhoto } from "@/components/shared/avatar-photo";
import { AvatarInitials } from "@/components/shared/avatar-initials";
import { leadership, teamDepartments, type TeamMember } from "@/data/team";
import { services } from "@/data/services";

function findDept(name: string) {
  return teamDepartments.find((d) => d.name === name)?.members ?? [];
}

function findServices(slugs: string[]) {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
}

const [chairman, ceo, cto, cfo] = leadership;

type Line = "ceo" | "cto" | "cfo";

const LINE_STYLES: Record<Line, { label: string; dot: string; text: string; stem: string; borderTop: string }> = {
  ceo: {
    label: "Reports to CEO",
    dot: "bg-primary",
    text: "text-primary",
    stem: "bg-primary/50",
    borderTop: "border-t-primary/50",
  },
  cto: {
    label: "Reports to CTO",
    dot: "bg-secondary",
    text: "text-secondary",
    stem: "bg-secondary/50",
    borderTop: "border-t-secondary/50",
  },
  cfo: {
    label: "Reports to CFO",
    dot: "bg-amber-400",
    text: "text-amber-400",
    stem: "bg-amber-400/50",
    borderTop: "border-t-amber-400/50",
  },
};

const branches: { name: string; line: Line; services: ReturnType<typeof findServices>; members: TeamMember[] }[] = [
  {
    name: "Enterprise Software",
    line: "cto",
    services: findServices(["erp", "ai-erp", "ecommerce", "web-development"]),
    members: findDept("Development"),
  },
  {
    name: "Cloud & Infrastructure",
    line: "cto",
    services: findServices(["server-maintenance", "cloud-infrastructure", "business-email"]),
    members: findDept("Cloud & Infrastructure"),
  },
  {
    name: "Cyber Security",
    line: "cto",
    services: findServices(["cyber-security"]),
    members: findDept("Cyber Security"),
  },
  {
    name: "AI & Business Transformation",
    line: "cto",
    services: findServices(["ai-transformation", "virtual-assistance"]),
    members: findDept("AI & Automation"),
  },
  {
    name: "Digital Growth",
    line: "cfo",
    services: findServices(["digital-marketing", "seo", "ads-campaign", "conversion-optimization"]),
    members: [...findDept("SEO & Digital Marketing"), ...findDept("Marketing")],
  },
  {
    name: "Creative & Brand",
    line: "ceo",
    services: [],
    members: findDept("Graphics & Design"),
  },
  {
    name: "Project & Client Operations",
    line: "ceo",
    services: [],
    members: findDept("Management"),
  },
];

function LeaderNode({ person, size = 64 }: { person: TeamMember; size?: number }) {
  return (
    <div className="card-surface flex w-full max-w-[220px] flex-col items-center gap-3 rounded-2xl p-5 text-center">
      {person.image ? (
        <AvatarPhoto src={person.image} name={person.name} size={size} />
      ) : (
        <AvatarInitials name={person.name} size={size} />
      )}
      <div>
        <p className="text-sm font-semibold text-foreground">{person.name}</p>
        <p className="mt-0.5 text-xs text-muted-2">{person.role}</p>
      </div>
    </div>
  );
}

function MemberCard({ person }: { person: TeamMember }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border-subtle bg-white/[0.02] p-3">
      {person.image ? (
        <AvatarPhoto src={person.image} name={person.name} size={36} />
      ) : (
        <AvatarInitials name={person.name} size={36} />
      )}
      <div>
        <p className="text-xs font-medium text-foreground">{person.name}</p>
        <p className="text-[11px] text-muted-2">{person.role}</p>
      </div>
    </div>
  );
}

export function OrganogramSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="How RankVibez is organized."
          description="Structured around every service we deliver — from ERP and AI to cloud, security and growth."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {(Object.keys(LINE_STYLES) as Line[]).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`h-[3px] w-6 rounded-full ${LINE_STYLES[key].dot}`} />
              <span className="text-xs text-muted">{LINE_STYLES[key].label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <LeaderNode person={chairman} size={72} />
          <div className="h-8 w-px bg-border-strong" />
          <div className="w-full max-w-3xl border-t border-border-strong" />
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
            <Reveal key={branch.name} delay={bi * 0.05} className="flex flex-col items-center">
              <div className={`h-6 w-px ${LINE_STYLES[branch.line].stem}`} />
              <div className="mb-4 text-center">
                <h3 className="text-sm font-semibold text-foreground">{branch.name}</h3>
                <p className={`mt-0.5 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.1em] ${LINE_STYLES[branch.line].text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${LINE_STYLES[branch.line].dot}`} />
                  {LINE_STYLES[branch.line].label}
                </p>
              </div>

              {branch.services.length > 0 && (
                <div className="mb-5 flex flex-wrap justify-center gap-1.5">
                  {branch.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="focus-ring rounded-full border border-border-subtle px-2.5 py-1 text-[10px] text-muted transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {service.name}
                    </Link>
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
