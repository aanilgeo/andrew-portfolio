import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import MobileNav from "@/components/MobileNav";
import { about, contact, experience, projects, skills } from "@/content/siteContent";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <Reveal>
        <h2
          className="text-lg font-medium tracking-wide"
          style={{ color: "var(--muted)" }}
        >
          {title}
        </h2>
        <div
          className="mt-5 space-y-4 text-[15px] leading-7"
          style={{ color: "var(--muted2)" }}
        >
          {children}
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <MobileNav />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="lg:flex lg:gap-14">
          <Sidebar />

          <div className="lg:flex-1 lg:py-16">
            <div className="lg:max-w-2xl">
              <Section id="about" title="about">
                {about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Section>

              <Section id="experience" title="experience">
                <div className="space-y-10">
                  {experience.map((role) => (
                    <div key={`${role.org}-${role.title}`} className="space-y-2">
                      <p style={{ color: "var(--text)" }}>
                        <span className="font-medium">{role.title}</span>{" "}
                        <span style={{ color: "var(--muted2)" }}>
                          at {role.org}
                        </span>
                      </p>
                      <p className="text-sm" style={{ color: "var(--muted2)" }}>
                        {role.dates}
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        {role.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="projects" title="projects">
                <div className="space-y-10">
                  {projects.map((p) => (
                    <div key={p.name} className="space-y-2">
                      <p style={{ color: "var(--text)" }}>
                        <span className="font-medium">{p.name}</span>{" "}
                        <span style={{ color: "var(--muted2)" }}>
                          ({p.dates})
                        </span>
                      </p>
                      <p>{p.blurb}</p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--muted2)" }}
                      >
                        {p.stack.join(" • ")}
                      </p>

                      <div className="flex gap-4 pt-1 text-sm">
                        {p.links.repo ? (
                          <a
                            className="underline"
                            style={{ color: "var(--text)" }}
                            href={p.links.repo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            repo
                          </a>
                        ) : null}
                        {p.links.live ? (
                          <a
                            className="underline"
                            style={{ color: "var(--text)" }}
                            href={p.links.live}
                            target="_blank"
                            rel="noreferrer"
                          >
                            live
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="skills" title="skills">
                <p>
                  frontend:{" "}
                  <span style={{ color: "var(--text)" }}>
                    {skills.frontend.join(", ")}
                  </span>
                </p>
                <p>
                  backend:{" "}
                  <span style={{ color: "var(--text)" }}>
                    {skills.backend.join(", ")}
                  </span>
                </p>
                <p>
                  tools:{" "}
                  <span style={{ color: "var(--text)" }}>
                    {skills.tools.join(", ")}
                  </span>
                </p>
                <p>
                  data:{" "}
                  <span style={{ color: "var(--text)" }}>
                    {skills.data.join(", ")}
                  </span>
                </p>
              </Section>

              <Section id="contact" title="contact">
                <p style={{ color: "var(--text)" }}>
                  <a className="underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
                <p style={{ color: "var(--muted2)" }}>{contact.note}</p>
              </Section>

              <footer
                className="pb-16 text-sm"
                style={{ color: "var(--muted2)" }}
              >
                built with next.js, typescript, tailwind, and framer motion.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}