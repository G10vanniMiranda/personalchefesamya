"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/img/logo-horizontal.png";
import { site, whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppLink";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#planos", label: "Kits e planos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="shrink-0" onClick={() => setOpen(false)}>
          <Image src={logo} alt={site.name} priority className="h-7 w-auto sm:h-8" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] text-ink/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-u transition-colors duration-200 hover:text-olive">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream press hover:bg-olive sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Falar com a Samya
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="border-t border-ink/10 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-3 text-lg font-serif" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-2 sm:hidden">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 font-medium text-cream"
              >
                <WhatsAppIcon />
                Falar com a Samya
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
