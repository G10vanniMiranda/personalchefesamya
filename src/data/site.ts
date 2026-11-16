import type { StaticImageData } from "next/image";
import marmitas from "@/assets/img/marmitas.jpg";
import marmitas1 from "@/assets/img/marmitas1.jpg";
import marmitas2 from "@/assets/img/marmitas2.jpg";
import marmitas3 from "@/assets/img/marmitas3.jpg";
import marmitas4 from "@/assets/img/marmitas4.jpg";
import marmitas5 from "@/assets/img/marmitas5.jpg";
import marmitas6 from "@/assets/img/marmitas6.jpg";
import marmitas7 from "@/assets/img/marmitas7.jpg";
import marmitas8 from "@/assets/img/marmitas8.jpg";

/*
 * Dados comerciais da Personal Chef Samya.
 * Fonte: materiais em /imagens (catálogo do WhatsApp Business, flyers e posts).
 * Edite somente este arquivo para atualizar contatos, preços e cardápio.
 */

export const site = {
  name: "Personal Chef Samya",
  chef: "Samya Craveiro",
  tagline: "Sua gastronomia + saudável",
  url: "https://personalchefsamya.vercel.app", // PENDENTE: trocar pelo domínio final
  whatsapp: {
    // Formato: DDI + DDD + número, só dígitos. Vazio = botões sem destinatário e aviso de demonstração na página.
    number: "5569996011906", // (69) 99601-1906, informado pela MI7ANDA LAB
    defaultMessage:
      "Olá, Samya! Conheci seu cardápio pelo site e gostaria de saber mais sobre as refeições.",
  },
  instagram: { handle: "cheffpersonalsamya", url: "https://www.instagram.com/cheffpersonalsamya/" },
  address: {
    street: "Rua Henfil, 4987",
    district: "Agenor de Carvalho",
    city: "Porto Velho – RO",
    zip: "76820-304",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Henfil%2C+4987%2C+Agenor+de+Carvalho%2C+Porto+Velho+-+RO",
  },
  // Perfil do WhatsApp Business: 09:00–18:00 em todos os dias listados. Confirmar segunda-feira com a cliente.
  hours: "Todos os dias, das 9h às 18h",
  leadTime: "Encomendas com no mínimo 2 dias de antecedência",
} as const;

export function whatsappUrl(message: string = site.whatsapp.defaultMessage) {
  const base = site.whatsapp.number ? `https://wa.me/${site.whatsapp.number}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappReady = site.whatsapp.number.length > 0;

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  /** Preço em reais. Omitido = valor sob consulta. */
  price?: number;
  priceNote?: string;
  /** Permite escolher quantidade antes de enviar ao WhatsApp. */
  quantity?: boolean;
  cta: string;
};

export type MenuCategory = { id: string; label: string; items: MenuItem[] };

// PENDENTE: o catálogo do WhatsApp mostra R$ 120,00 e o flyer mostra R$ 150,00 para o kit de 20 marmitas.
// Confirmar o valor vigente com a cliente antes de publicar.
export const KIT_PRICE = 150;

export const menu: MenuCategory[] = [
  {
    id: "marmitas",
    label: "Marmitas",
    items: [
      {
        id: "kit-protocolo",
        name: "Kit 20 marmitas no seu protocolo",
        description:
          "Você envia o plano alimentar do seu nutricionista e a Samya monta o cardápio seguindo o protocolo. Ela passa a lista de ingredientes e cobra apenas a mão de obra.",
        image: marmitas4,
        imageAlt: "Marmitas com arroz, frango em cubos e legumes coloridos",
        price: KIT_PRICE,
        priceNote: "mão de obra, ingredientes à parte",
        quantity: true,
        cta: "Pedir pelo WhatsApp",
      },
      {
        id: "cardapio-objetivo",
        name: "Cardápio de acordo com seu objetivo",
        description:
          "Ainda não tem protocolo do nutricionista? A Samya ajuda a montar um cardápio de acordo com o seu objetivo.",
        image: marmitas2,
        imageAlt: "Marmitas com macarrão, almôndegas ao molho e legumes em cubos",
        cta: "Montar meu cardápio",
      },
      {
        id: "pacotes",
        name: "Pacote semanal, quinzenal ou mensal",
        description:
          "Cardápio variado sob encomenda, com porções pesadas de acordo com a sua dieta quando precisar.",
        image: marmitas,
        imageAlt: "Marmitas com purê e frango ao molho",
        cta: "Consultar pacotes",
      },
    ],
  },
  {
    id: "eventos",
    label: "Eventos",
    items: [
      {
        id: "almoco-jantar",
        name: "Almoços e jantares",
        description: "Refeições preparadas para o seu almoço ou jantar, sob encomenda.",
        image: marmitas7,
        imageAlt: "Salada de folhas com morangos, manga e uvas",
        cta: "Pedir orçamento",
      },
      {
        id: "festas",
        name: "Confraternizações, aniversários e coffee break",
        description: "Mesa preparada para receber bem os seus convidados.",
        image: marmitas8,
        imageAlt: "Cesta de frutas com melancia, abacaxi, uvas, morangos e kiwi",
        cta: "Pedir orçamento",
      },
    ],
  },
];

// Menu de Natal, conforme o catálogo do WhatsApp. Valores sob consulta.
export const christmasMenu = {
  main: [
    "Filé ao molho madeira",
    "Filé ao molho rosé",
    "Filé de frango ao creme",
    "Strogonoff (frango ou carne)",
    "Bobó de camarão",
  ],
  sides: [
    "Arroz branco",
    "Arroz natalino",
    "Farofa na manteiga",
    "Farofa tropical (abacaxi, uvas-passas e banana-da-terra)",
    "Maionese",
    "Salpicão",
    "Salada tropical",
  ],
};

export const gallery: { image: StaticImageData; alt: string }[] = [
  { image: marmitas5, alt: "Bancada com marmitas de arroz e frango ao creme e de macarrão com almôndegas" },
  { image: marmitas1, alt: "Marmitas com purê e carne em cubos ao molho" },
  { image: marmitas3, alt: "Marmitas gratinadas com queijo e orégano" },
  { image: marmitas6, alt: "Macarrão com almôndegas, queijo e tomate-cereja" },
];

export const heroImage = marmitas5;

// Mensagem de cliente publicada pela própria Samya (imagens/prova-social.jpeg), sem identificação.
// PENDENTE: confirmar autorização antes da publicação.
export const testimonial = {
  quote: "Acabamos de comer, que delícia! Obrigada de novo, com certeza vamos pedir mais.",
  author: "Mensagem de cliente pelo WhatsApp",
};

export const faq: { q: string; a: string }[] = [
  {
    q: "Preciso ter um plano do nutricionista?",
    a: "Não. Se você já tem, a Samya monta o cardápio seguindo o seu protocolo. Se ainda não tem, ela ajuda a montar um cardápio de acordo com o seu objetivo.",
  },
  {
    q: "O que está incluído no valor do kit?",
    a: `O kit com 20 marmitas custa ${formatBRL(KIT_PRICE)} e corresponde à mão de obra. A Samya envia a lista de ingredientes para a compra.`,
  },
  {
    q: "Com quanta antecedência preciso encomendar?",
    a: "As encomendas precisam ser feitas com no mínimo 2 dias de antecedência.",
  },
  {
    q: "Vocês pesam as porções?",
    a: "Sim, quando a sua dieta pede, as porções são pesadas de acordo com ela.",
  },
  {
    q: "Existem pacotes recorrentes?",
    a: "Sim: semanal, quinzenal e mensal. Converse com a Samya para combinar o cardápio e os valores.",
  },
  {
    q: "Como funcionam entrega, retirada e pagamento?",
    a: "Esses detalhes são combinados diretamente com a Samya pelo WhatsApp, no momento do pedido.",
  },
];
