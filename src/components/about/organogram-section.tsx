import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AvatarPhoto } from "@/components/shared/avatar-photo";
import { leadership, teamDepartments, openRoles, type TeamMember, type OpenRole } from "@/data/team";

function findDept(name: string) {
  return teamDepartments.find((d) => d.name === name)?.members ?? [];
}

function findRoles(titles: string[]) {
  return titles
    .map((t) => openRoles.find((r) => r.title === t))
    .filter((r): r is OpenRole => Boolean(r));
}

const [chairman, ceo, cto, cfo] = leadership;

const branches = [
  {
    name: "Engineering & AI",
    lead: "Reports to CTO",
    members: findDept("Development"),
    openRoles: findRoles([
      "AI Engineer",
      "AI Automation Engineer",
      "Cloud & DevOps Engineer",
      "Cybersecurity Analyst",
      "QA Engineer",
      "Backend Developer — ERP Systems",
    ]),
  },
  {
    name: "Project & Operations",
    lead: "Reports to CEO",
    members: findDept("Management"),
    openRoles: findRoles(["Business Analyst — ERP & Automation", "Client Support Specialist"]),
  },
  {
    name: "Growth & Marketing",
    lead: "Reports to CFO",
    members: [...findDept("SEO & Digital Marketing"), ...findDept("Marketing")],
    openRoles: findRoles(["Content Writer & Strategist", "PPC & Ads Specialist"]),
  },
  {
    name: "Creative",
    lead: "Reports to CEO",
    members: findDept("Graphics & Design"),
    openRoles: [],
  },
];

function LeaderNode({ person, size = 64 }: { person: TeamMember; size?: number }) {
  return (
    <div className="card-surface flex w-full max-w-[220px] flex-col items-center gap-3 rounded-2xl p-5 text-center">
      <AvatarPhoto src={person.image} name={person.name} size={size} />
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
      <AvatarPhoto src={person.image} name={person.name} size={36} />
      <div>
        <p className="text-xs font-medium text-foreground">{person.name}</p>
        <p className="text-[11px] text-muted-2">{person.role}</p>
      </div>
    </div>
  );
}

function OpenRoleCard({ role }: { role: OpenRole }) {
  const Icon = (Icons[role.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-dashed border-border-strong bg-transparent p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Icon size={15} />
      </div>
      <div>
        <p className="text-xs font-medium text-foreground">{role.title}</p>
        <p className="text-[11px] text-muted-2">Open role</p>
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
          description="Our real leadership and team, plus the specialist roles we're actively growing into across engineering, operations and growth — shown as open positions, not filled seats."
        />

        <div className="mt-16 flex flex-col items-center">
          <LeaderNode person={chairman} size={72} />
          <div className="h-8 w-px bg-border-strong" />
          <div className="w-full max-w-3xl border-t border-border-strong" />
          <div className="grid w-full max-w-3xl grid-cols-1 gap-8 pt-0 sm:grid-cols-3">
            {[ceo, cto, cfo].map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <div className="h-8 w-px bg-border-strong" />
                <LeaderNode person={person} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch, bi) => (
            <Reveal key={branch.name} delay={bi * 0.06} className="flex flex-col items-center">
              <div className="h-6 w-px bg-border-strong" />
              <div className="mb-5 text-center">
                <h3 className="text-sm font-semibold text-foreground">{branch.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-2">{branch.lead}</p>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                {branch.members.map((person) => (
                  <MemberCard key={person.name} person={person} />
                ))}
                {branch.openRoles.map((role) => (
                  <OpenRoleCard key={role.title} role={role} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs text-muted-2">
          Solid cards with a photo are current RankVibez team members. Dashed cards mark specialist roles we&rsquo;re
          actively building the team toward — not yet filled by a named person.
        </p>
      </Container>
    </section>
  );
}
