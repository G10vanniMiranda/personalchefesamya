"use client";

import Image from "next/image";
import { useState } from "react";
import { christmasMenu, formatBRL, menu, type MenuItem, whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppLink";

const tabs = [...menu.map((c) => ({ id: c.id, label: c.label })), { id: "natal", label: "Menu de Natal" }];

function itemMessage(item: MenuItem, qty: number) {
  const base = "Olá, Samya! Conheci seu cardápio pelo site e tenho interesse em:";
  if (!item.quantity) return `${base} ${item.name}.`;
  const total = item.price ? ` Valor de referência no site: ${formatBRL(item.price * qty)} (${item.priceNote}).` : "";
  return `${base} ${item.name}, quantidade: ${qty}.${total}`;
}

const MAX_TILT = 3; // graus

// Tilt seguindo o mouse: escreve variáveis CSS direto no elemento (sem re-render), no máximo 1x por frame.
function tiltHandlers() {
  let frame = 0;
  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  return {
    onPointerMove(e: React.PointerEvent<HTMLElement>) {
      if (e.pointerType !== "mouse" || frame || reduce()) return;
      const el = e.currentTarget;
      const { clientX, clientY } = e;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const clamp = (v: number) => Math.max(-0.5, Math.min(0.5, v));
        const x = clamp((clientX - r.left) / r.width - 0.5);
        const y = clamp((clientY - r.top) / r.height - 0.5);
        el.style.setProperty("--rx", `${(-y * 2 * MAX_TILT).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * 2 * MAX_TILT).toFixed(2)}deg`);
      });
    },
    onPointerLeave(e: React.PointerEvent<HTMLElement>) {
      cancelAnimationFrame(frame);
      frame = 0;
      e.currentTarget.style.removeProperty("--rx");
      e.currentTarget.style.removeProperty("--ry");
    },
  };
}

function Card({ item }: { item: MenuItem }) {
  const [qty, setQty] = useState(1);
  const [tilt] = useState(tiltHandlers);

  return (
    <article {...tilt} className="tilt flex h-full flex-col overflow-hidden rounded-[22px] bg-white ring-1 ring-ink/8">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="tilt-img object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-2xl leading-tight text-forest">{item.name}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{item.description}</p>

        <div className="mt-auto pt-3">
          {item.price ? (
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-serif text-3xl text-forest">{formatBRL(item.price)}</span>
              <span className="text-sm text-muted">{item.priceNote}</span>
            </p>
          ) : (
            <p className="text-sm text-muted">Valor sob consulta</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {item.quantity && (
              <div className="inline-flex items-center rounded-full ring-1 ring-ink/15" role="group" aria-label={`Quantidade de ${item.name}`}>
                <button
                  type="button"
                  className="size-11 rounded-full text-lg text-forest disabled:opacity-30"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <output className="w-6 text-center font-medium tabular-nums" aria-live="polite">
                  {qty}
                </output>
                <button
                  type="button"
                  className="size-11 rounded-full text-lg text-forest disabled:opacity-30"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  disabled={qty >= 10}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>
            )}
            <a
              href={whatsappUrl(itemMessage(item, qty))}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex min-h-11 min-w-[13rem] flex-1 items-center justify-center gap-2 rounded-full bg-forest px-5 text-[15px] font-medium text-cream hover:bg-olive"
            >
              <WhatsAppIcon className="size-4" />
              {item.cta}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChristmasPanel() {
  return (
    <div className="on-dark grid gap-10 rounded-[22px] bg-forest px-6 py-10 text-cream sm:px-10 md:grid-cols-[1fr_1.4fr] md:py-14">
      <div>
        <h3 className="font-serif text-4xl leading-tight sm:text-5xl">
          <span className="italic">Menu</span> de Natal
        </h3>
        <p className="mt-4 max-w-sm leading-relaxed text-cream/80">
          Pratos principais e acompanhamentos para a sua ceia. Disponibilidade, quantidades e valores sob consulta.
        </p>
        <a
          href={whatsappUrl("Olá, Samya! Vi o Menu de Natal no site e gostaria de fazer uma encomenda.")}
          target="_blank"
          rel="noopener noreferrer"
          className="press mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-6 font-medium text-forest hover:bg-sand"
        >
          <WhatsAppIcon className="size-4" />
          Encomendar o Menu de Natal
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {[
          { title: "Prato principal", list: christmasMenu.main },
          { title: "Acompanhamentos", list: christmasMenu.sides },
        ].map((g) => (
          <div key={g.title}>
            <h4 className="border-b border-cream/20 pb-3 font-serif text-xl italic text-leaf">{g.title}</h4>
            <ul className="mt-3 space-y-2 text-cream/90">
              {g.list.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(tabs[0].id);
  const category = menu.find((c) => c.id === active);

  return (
    <div>
      <div role="tablist" aria-label="Categorias do cardápio" className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`painel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`press min-h-11 rounded-full px-5 text-[15px] ${
                selected ? "bg-forest text-cream" : "bg-sand text-ink hover:bg-ink/10"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`painel-${active}`} aria-labelledby={`tab-${active}`} className="mt-8">
        {category ? (
          <div key="grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, i) => (
              <div key={item.id} data-reveal style={{ "--d": i } as React.CSSProperties}>
                <Card item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div key="natal" data-reveal>
            <ChristmasPanel />
          </div>
        )}
      </div>
    </div>
  );
}
