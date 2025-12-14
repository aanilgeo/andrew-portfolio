"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/nav";
import { useScrollSpy } from "@/lib/useScrollSpy";
import ThemeToggle from "@/components/ThemeToggle";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(nav.map((n) => n.id), 120);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{
          background: "color-mix(in srgb, var(--bg) 80%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div
            className="text-sm font-medium tracking-wide"
            style={{ color: "var(--text)" }}
          >
            andrew anil george
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full px-4 py-2 text-sm shadow-sm transition-colors"
              style={{ background: "var(--card)", color: "var(--text)" }}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? "close" : "menu"}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0"
            style={{ background: "rgba(15, 23, 42, 0.25)" }}
            onClick={() => setOpen(false)}
            aria-label="close menu"
          />

          <div
            id="mobile-menu"
            className="absolute left-4 right-4 top-20 rounded-2xl p-4 shadow-lg backdrop-blur"
            style={{
              background: "color-mix(in srgb, var(--card) 85%, transparent)",
            }}
          >
            <nav className="space-y-2">
              {nav.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm transition-colors"
                    style={{
                      background: isActive ? "var(--bg)" : "transparent",
                      color: isActive ? "var(--text)" : "var(--muted)",
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 flex gap-3">
              <a
                className="flex-1 rounded-xl px-4 py-3 text-center text-sm transition-colors"
                style={{ background: "var(--bg)", color: "var(--text)" }}
                href="https://www.linkedin.com/in/aanilgeo"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <a
                className="flex-1 rounded-xl px-4 py-3 text-center text-sm transition-colors"
                style={{ background: "var(--bg)", color: "var(--text)" }}
                href="https://github.com/aanilgeo"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <a
                className="flex-1 rounded-xl px-4 py-3 text-center text-sm transition-colors"
                style={{ background: "var(--bg)", color: "var(--text)" }}
                href="/andrew_anil_george_resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}