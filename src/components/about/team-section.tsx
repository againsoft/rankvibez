import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AvatarPhoto } from "@/components/shared/avatar-photo";
import { leadership, teamDepartments } from "@/data/team";

export function TeamSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The people building RankVibez."
          description="A multidisciplinary team spanning leadership, engineering, design and growth — working as one technology partner."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.06}>
              <div className="card-surface flex h-full flex-col items-center gap-4 rounded-2xl p-7 text-center">
                <AvatarPhoto src={person.image} name={person.name} size={72} />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-10">
          {teamDepartments.map((dept, di) => (
            <Reveal key={dept.name} delay={di * 0.05}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">{dept.name}</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dept.members.map((person) => (
                  <div
                    key={person.name}
                    className="flex items-center gap-3.5 rounded-xl border border-border-subtle bg-white/[0.02] p-4"
                  >
                    <AvatarPhoto src={person.image} name={person.name} size={44} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{person.name}</p>
                      <p className="text-xs text-muted-2">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
