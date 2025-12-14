"use client";

import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(ids: string[], offsetPx = 120) {
  const sectionIds = useMemo(() => ids.filter(Boolean), [ids]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const scrollLine = window.scrollY + offsetPx;

      // Edge case: if we are at the bottom of the page, set the last section as active
      const viewportBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (viewportBottom >= docHeight - 2) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      // Range based: find the section where scrollLine is inside [top, nextTop)
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop;
        const nextTop = i < sections.length - 1 ? sections[i + 1].offsetTop : Infinity;

        if (scrollLine >= top && scrollLine < nextTop) {
          setActiveId(sections[i].id);
          return;
        }
      }

      // Fallback
      setActiveId(sections[0].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offsetPx]);

  return activeId;
}