import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Victor Figueroa · Diseñador UX/UI y gráfico",
    template: "%s · Victor Figueroa",
  },
  description:
    "Portafolio de Victor Figueroa (Vican), diseñador UX/UI y gráfico. Casos de estudio de apps, web apps, software y sitios web.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Victor Figueroa · Diseñador UX/UI y gráfico",
    description: "Casos de estudio de apps, web apps, software y sitios web.",
    locale: "es_ES",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${manrope.variable}`}>
      <body id="top" className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
