import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });

const description =
  "Marmitas saudáveis sob encomenda em Porto Velho, montadas de acordo com o seu plano alimentar. Kits, pacotes semanais, quinzenais e mensais, e eventos.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Marmitas saudáveis em Porto Velho`,
  description,
  openGraph: {
    title: site.name,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#263d30" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
