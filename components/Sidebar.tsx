"use client";

import { nav } from "@/content/nav";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function Sidebar() {
  const activeId = useScrollSpy(nav.map((n) => n.id), 120);

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[340px] lg:flex-col lg:justify-between lg:py-16">
      <div className="space-y-10">
        <div>
          <h1
            className="text-4xl font-medium tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Andrew Anil George
          </h1>

          <p
            className="mt-2 text-base"
            style={{ color: "var(--muted)" }}
          >
            CS @ New Jersey Institute of Technology
          </p>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--muted2)" }}
          >
            building clean, reliable software
          </p>
        </div>

        <nav className="space-y-3">
          {nav.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a key={item.id} className="block w-fit" href={`#${item.id}`}>
                <div
                  className="rounded-full px-5 py-2 text-sm transition-colors duration-200"
                  style={{
                    background: isActive ? "var(--card)" : "transparent",
                    color: isActive ? "var(--text)" : "var(--muted)",
                  }}
                >
                  {item.label}
                </div>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <a
          className="rounded-full bg-[var(--card)] px-5 py-2 text-sm"
          style={{ color: "var(--text)" }}
          href="https://www.linkedin.com/in/aanilgeo"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>

        <a
          className="rounded-full bg-[var(--card)] px-5 py-2 text-sm"
          style={{ color: "var(--text)" }}
          href="https://github.com/aanilgeo"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>

        <a
          className="rounded-full bg-[var(--card)] px-5 py-2 text-sm"
          style={{ color: "var(--text)" }}
          href="/Andrew_Anil_George_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>

        <ThemeToggle />
      </div>
    </aside>
  );
}