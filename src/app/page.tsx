import Image from "next/image";
import logo from "@/assets/img/logo-horizontal.png";
import aboutImage from "@/assets/img/samya.jpg";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { ScrollFx } from "@/components/ScrollFx";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { faq, formatBRL, gallery, heroImage, KIT_PRICE, site, testimonial, whatsappReady } from "@/data/site";

const btnPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-7 font-medium text-forest press hover:bg-sand";
const btnGhost =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 font-medium text-cream ring-1 ring-cream/50 press hover:bg-cream/10";
const btnDark =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 font-medium text-cream press hover:bg-olive";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  description: "Marmitas saudáveis sob encomenda e serviços para eventos.",
  url: site.url,
  servesCuisine: "Comida saudável",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "Porto Velho",
    addressRegion: "RO",
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  sameAs: [site.instagram.url],
};

/** Atraso do stagger do reveal (multiplicado por 90ms no CSS). */
const d = (i: number) => ({ "--d": i }) as React.CSSProperties;

function SectionTitle({ title, intro, light }: { title: string; intro?: string; light?: boolean }) {
  return (
    <div data-reveal className="max-w-2xl">
      <h2 className={`font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl ${light ? "text-cream" : "text-forest"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-cream/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

const benefits = [
  {
    title: "Do jeito que o seu plano pede",
    text: "O cardápio segue o protocolo do seu nutricionista, com porções pesadas de acordo com a sua dieta quando precisar.",
    icon: "M9 5h6M9 3h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1Zm0 9 2 2 4-4",
  },
  {
    title: "Comida de verdade",
    text: "Preparo caseiro, ingredientes selecionados e o equilíbrio entre saúde e sabor em cada refeição.",
    icon: "M4 11h16M5 11v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6M8 7c0-1 1-1.5 1-2.5M12 7c0-1 1-1.5 1-2.5M16 7c0-1 1-1.5 1-2.5",
  },
  {
    title: "Praticidade no dia a dia",
    text: "Refeições prontas para a semana, a quinzena ou o mês, para você comer bem sem perder tempo na cozinha.",
    icon: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
];

const steps = [
  {
    title: "Escolha o seu caminho",
    text: "Envie o plano alimentar do seu nutricionista ou conte qual é o seu objetivo.",
  },
  {
    title: "Chame a Samya no WhatsApp",
    text: "Vocês combinam cardápio, quantidade, valores, entrega ou retirada.",
  },
  {
    title: "Encomende com antecedência",
    text: "Os pedidos são feitos com no mínimo 2 dias de antecedência e preparados sob encomenda.",
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {!whatsappReady && (
        <p role="note" className="bg-leaf/25 px-4 py-2 text-center text-sm text-forest">
          Versão de demonstração: o número de WhatsApp da Samya ainda não foi configurado.
        </p>
      )}

      <Header />
      <ScrollFx />

      <main id="inicio">
        {/* Hero */}
        <section className="on-dark relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-forest">
          {/* shortcut: fotos originais têm 739px de largura; no desktop a foto ocupa só a metade direita para não perder nitidez. Trocar por foto em alta quando houver. */}
          <div className="absolute inset-0 -z-10 overflow-hidden md:left-[45%]">
            <Image
              src={heroImage}
              alt="Marmitas preparadas pela Samya: arroz com frango ao creme e macarrão com almôndegas e tomate-cereja"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 55vw, 100vw"
              className="parallax-hero object-cover object-[center_40%]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/70 to-forest/10 md:bg-gradient-to-r md:from-forest md:from-45% md:via-forest/40 md:via-60% md:to-transparent md:to-80%" />

          <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-14 sm:px-6 md:pb-24">
            <div className="max-w-2xl text-cream">
              <p className="animate-rise text-cream/80">Personal chef em Porto Velho</p>
              <h1 className="animate-rise mt-4 font-serif text-[2.75rem] leading-[1.02] tracking-tight [animation-delay:120ms] sm:text-6xl lg:text-7xl">
                Sua rotina mais leve.
                <span className="block italic text-sand">Sua alimentação mais saborosa.</span>
              </h1>
              <p className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-cream/85 [animation-delay:240ms]">
                Refeições preparadas com cuidado para quem deseja comer bem sem complicar a rotina.
              </p>
              <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
                <a href="#cardapio" className={btnPrimary}>
                  Conhecer o cardápio
                </a>
                <WhatsAppLink className={btnGhost}>
                  <WhatsAppIcon />
                  Falar com a Samya
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section aria-labelledby="beneficios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <h2 id="beneficios" className="sr-only">
            Por que escolher a Samya
          </h2>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
            {benefits.map((b, i) => (
              <li key={b.title} data-reveal style={d(i)} className="border-t border-forest/20 pt-6">
                <svg viewBox="0 0 24 24" className="size-8 text-olive" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={b.icon} />
                </svg>
                <h3 className="mt-5 font-serif text-2xl text-forest">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Cardápio */}
        <section id="cardapio" className="bg-sand/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              title="Cardápio"
              intro="Marmitas sob encomenda, serviços para eventos e o Menu de Natal. Escolha uma opção e envie o pedido pelo WhatsApp."
            />
            <div className="mt-10">
              <Menu />
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionTitle title="Direto da cozinha" intro="Algumas das marmitas preparadas pela Samya." />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <li key={i} data-reveal="zoom" style={d(i)} className={`relative overflow-hidden rounded-[18px] ${i % 2 ? "aspect-[3/4] lg:mt-10" : "aspect-[3/4]"}`}>
                <Image src={g.image} alt={g.alt} fill sizes="(min-width: 1024px) 270px, 50vw" placeholder="blur" className="object-cover" />
              </li>
            ))}
          </ul>
        </section>

        {/* Kits e planos */}
        <section id="planos" className="on-dark bg-forest py-20 text-cream md:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-reveal="lift" className="rounded-[28px] bg-cream p-8 text-forest sm:p-10">
              <p className="mb-4 font-serif text-2xl italic">Kit com</p>
              <p data-reveal="clip" style={d(2)} className="font-serif text-[8.5rem] leading-[0.85] tracking-tighter sm:text-[11rem]"><span>20</span></p>
              <p className="font-serif text-3xl">marmitas</p>
              <div className="mt-8 border-t border-forest/15 pt-6">
                <p className="font-serif text-5xl">{formatBRL(KIT_PRICE)}</p>
                <p className="mt-2 text-muted">
                  Valor da mão de obra. A Samya envia a lista de ingredientes para a compra.
                </p>
              </div>
              <WhatsAppLink
                message={`Olá, Samya! Conheci seu cardápio pelo site e tenho interesse no kit com 20 marmitas (${formatBRL(KIT_PRICE)} de mão de obra).`}
                className={`${btnDark} mt-8 w-full`}
              >
                <WhatsAppIcon />
                Quero o kit com 20 marmitas
              </WhatsAppLink>
            </div>

            <div>
              <SectionTitle title="Dois caminhos para começar" light />
              <div className="mt-10 space-y-8">
                <div data-reveal style={d(1)}>
                  <h3 className="font-serif text-2xl text-leaf">Já tem um plano alimentar do nutricionista?</h3>
                  <p className="mt-2 leading-relaxed text-cream/80">
                    É só enviar. A Samya monta o seu cardápio personalizado seguindo direitinho o seu protocolo.
                  </p>
                </div>
                <div data-reveal style={d(2)}>
                  <h3 className="font-serif text-2xl text-leaf">Ainda não tem protocolo do nutri?</h3>
                  <p className="mt-2 leading-relaxed text-cream/80">
                    A Samya ajuda a montar um cardápio de acordo com o seu objetivo.
                  </p>
                </div>
                <div data-reveal style={d(3)} className="border-t border-cream/15 pt-8">
                  <h3 className="font-serif text-2xl">Pacotes sob encomenda</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Semanal", "Quinzenal", "Mensal"].map((p) => (
                      <li key={p} className="rounded-full px-4 py-2 ring-1 ring-cream/30">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-cream/70">
                    Cardápio variado. {site.leadTime}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
          <div data-reveal="lift" className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src={aboutImage}
              alt="Samya Craveiro, personal chef, de dólmã branco e avental na cozinha, com marmitas e legumes na bancada"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              className="parallax-soft object-cover object-[center_20%]"
            />
          </div>
          <div>
            <SectionTitle title="Sobre a Samya" />
            <div data-reveal style={d(1)} className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                {site.chef} é personal chef em Porto Velho. O trabalho dela é levar até você uma alimentação saudável,
                saborosa e de acordo com o seu plano alimentar.
              </p>
              <p>
                Além das marmitas, a Samya atende jantares, almoços, confraternizações, aniversários e coffee breaks.
              </p>
            </div>
            <p data-reveal style={d(2)} className="mt-10 font-serif text-4xl italic leading-tight text-olive">Seu objetivo, nossa receita.</p>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-sand/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle title="Como funciona" />
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={d(i)} className="flex gap-5 md:block">
                  <span aria-hidden="true" className="font-serif text-6xl leading-none text-olive/50 italic">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-forest md:mt-4">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Depoimento */}
        <section aria-label="Depoimento" className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
          <figure data-reveal>
            <blockquote className="font-serif text-3xl leading-snug text-forest italic sm:text-4xl">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-muted">{testimonial.author}</figcaption>
          </figure>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 md:pb-28">
          <SectionTitle title="Perguntas frequentes" />
          <div data-reveal className="mt-10 divide-y divide-forest/15 border-y border-forest/15">
            {faq.map((f) => (
              <details key={f.q} className="faq group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-forest [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-olive transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="faq-a mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-muted">
            Ficou com outra dúvida?{" "}
            <WhatsAppLink className="font-medium text-olive underline underline-offset-4 transition-colors duration-200 hover:text-forest">
              Pergunte para a Samya
            </WhatsAppLink>
            .
          </p>
        </section>

        {/* CTA final */}
        <section className="on-dark bg-olive px-4 py-20 text-center text-cream sm:px-6 md:py-28">
          <h2 data-reveal className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl">
            Comer bem pode ser mais simples do que você imagina.
          </h2>
          <WhatsAppLink className={`${btnPrimary} mt-10`}>
            <WhatsAppIcon />
            Conversar com a Samya
          </WhatsAppLink>
        </section>
      </main>

      <footer className="on-dark bg-forest px-4 pt-16 pb-28 text-cream/80 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image src={logo} alt={site.name} className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs">{site.tagline}.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-cream">Contato</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <WhatsAppLink className="link-u hover:text-cream">WhatsApp</WhatsAppLink>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-u hover:text-cream">
                  Instagram @{site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl text-cream">Endereço e horário</h2>
            <address className="mt-3 not-italic leading-relaxed">
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-u hover:text-cream">
                {site.address.street}, {site.address.district}
                <br />
                {site.address.city}, {site.address.zip}
              </a>
            </address>
            <p className="mt-3">{site.hours}</p>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Desenvolvido por MI7ANDA LAB</p>
        </div>
      </footer>

      <WhatsAppLink className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/25 press hover:scale-105">
        <WhatsAppIcon className="size-7" />
        <span className="sr-only">Conversar com a Samya pelo WhatsApp</span>
      </WhatsAppLink>
    </>
  );
}
