import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isLang, locales } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = ui[isLang(lang) ? lang : "es"];
  return {
    title: { default: t.metaTitulo, template: "%s · Victor Figueroa" },
    description: t.metaDescripcion,
    icons: { icon: "/icon.svg" },
    alternates: { languages: { es: "/es", en: "/en" } },
    openGraph: {
      title: t.metaTitulo,
      description: t.metaDescripcion,
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={`${dmSans.variable} ${manrope.variable}`}>
      <body id="top" className="font-sans antialiased">
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
