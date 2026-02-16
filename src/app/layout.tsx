import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Agaváceas | Servicios agrícolas para la industria tequilera",
  description:
    "Grupo Agaváceas: servicios agrícolas para la industria tequilera. Cultivo de agave azul, supervisión de jima, control de calidad y procesos alineados con certificación ARA.",
  openGraph: {
    title: "Grupo Agaváceas | Servicios agrícolas para la industria tequilera",
    description:
      "Servicios agrícolas especializados: cultivo de agave azul, supervisión de jima, control de calidad y trazabilidad ARA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-[#f8f6f2] font-sans text-[#2d2d2d] antialiased">
        {children}
      </body>
    </html>
  );
}
