import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoagavaceas.com"),
  title: {
    default: "Grupo Agavaceas | Socio estrategico para la industria tequilera",
    template: "%s | Grupo Agavaceas",
  },
  description:
    "Trazabilidad, cultivo y abastecimiento de agave azul con estandares certificados para productores, destilerias y marcas premium.",
  keywords: [
    "agave azul",
    "industria tequilera",
    "trazabilidad agricola",
    "certificacion APA",
    "abastecimiento de agave",
    "Jalisco",
  ],
  openGraph: {
    title: "Grupo Agavaceas | Servicios agricolas premium para tequila",
    description:
      "Cultivo, trazabilidad, cosecha y abastecimiento certificado de agave azul para cadenas premium.",
    type: "website",
    locale: "es_MX",
    siteName: "Grupo Agavaceas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-agave-white font-sans text-agave-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
