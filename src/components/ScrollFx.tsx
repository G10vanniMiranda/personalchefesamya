"use client";

import { useEffect } from "react";

/**
 * Revela elementos com [data-reveal] uma única vez ao entrarem na viewport.
 * Sem efeito com prefers-reduced-motion: o conteúdo fica visível desde o início.
 */
export function ScrollFx() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Elementos já rolados para cima (scroll antes da hidratação, âncora, scroll restaurado) aparecem direto.
          if (!e.isIntersecting && e.boundingClientRect.top > 0) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    // Cards trocados pelas abas do cardápio entram no DOM depois do carregamento.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove("motion");
    };
  }, []);

  return null;
}
