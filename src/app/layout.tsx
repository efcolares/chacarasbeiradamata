import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  title: `${site.name} | Natureza e momentos para lembrar`,
  description: "Conheça as Chácaras Beira da Mata: um espaço para desacelerar e se aproximar da natureza. Consulte informações e disponibilidade.",
  openGraph: { title: site.name, description: site.tagline, type: "website", locale: "pt_BR" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
