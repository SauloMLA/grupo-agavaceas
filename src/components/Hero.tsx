"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const metrics = [
  "+10,000 hectareas monitoreadas",
  "Certificacion APA",
  "Cobertura Jalisco",
  "Reportes digitales",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 140]);
  const cardY = useTransform(scrollY, [0, 700], [0, -70]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#102018] text-white">
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src="/hero-b.jpg"
          alt="Campos de agave azul al amanecer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(200,167,91,0.22),transparent_28%),linear-gradient(90deg,rgba(10,20,15,0.96)_0%,rgba(10,20,15,0.78)_42%,rgba(10,20,15,0.3)_100%)]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F8F7F4] via-[#F8F7F4]/20 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#E8D49B] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A75B] shadow-[0_0_18px_rgba(200,167,91,0.9)]" />
            Servicios agricolas especializados
          </span>
          <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-[6.6rem]">
            El socio estrategico para la industria tequilera
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Trazabilidad, cultivo y abastecimiento de agave azul con estandares certificados para productores, destilerias y marcas premium.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#contacto" className="group inline-flex items-center justify-center rounded-full bg-[#C8A75B] px-7 py-4 text-sm font-bold text-[#1E3A2D] shadow-[0_18px_55px_rgba(200,167,91,0.32)] transition hover:-translate-y-1 hover:bg-[#d8b968] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Solicitar propuesta
              <span className="ml-2 transition group-hover:translate-x-1" aria-hidden>--&gt;</span>
            </Link>
            <Link href="#servicios" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A75B]">
              Conocer servicios
            </Link>
          </div>
        </motion.div>

        <motion.aside
          style={{ y: cardY }}
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
          aria-label="Metricas operativas"
        >
          <div className="absolute -inset-6 rounded-[36px] bg-[#C8A75B]/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.09] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="rounded-[24px] border border-white/10 bg-[#0F2018]/70 p-6">
              <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/40">Operacion premium</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">Cadena agricola certificable</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#C8A75B]/15 text-[#E8D49B]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 3v18M5 10c4 0 7-3 7-7 0 4 3 7 7 7M4 15c5 0 8-3 8-7 0 4 3 7 8 7" />
                  </svg>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.08 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white/100">{metric}</span>
                    <span className="h-2 w-2 rounded-full bg-[#C8A75B]" aria-hidden />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
