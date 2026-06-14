"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10";
const eyebrow = "text-xs font-bold uppercase tracking-[0.28em] text-[#7E9B83]";
const title = "font-display text-4xl font-semibold tracking-[-0.045em] text-[#1A1A1A] sm:text-5xl lg:text-6xl";
const intro = "max-w-2xl text-base leading-8 text-[#1A1A1A]/60 sm:text-lg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

function Icon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    leaf: <path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14Zm0 0c4-4 8-7 14-14" />,
    supply: <path d="M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8M12 12v8" />,
    field: <path d="M4 18c4-4 12-4 16 0M5 14c4-3 10-3 14 0M7 10c3-2 7-2 10 0M12 4v16" />,
    cert: <path d="m8 12 2.5 2.5L16 9M12 3l2.4 2 3.1-.2.9 3 2.4 2-1.2 2.8.4 3.1-2.9 1.3-1.8 2.6-3.3-.7-3.3.7-1.8-2.6L4 15.7l.4-3.1L3.2 9.8l2.4-2 .9-3 3.1.2L12 3Z" />,
    data: <path d="M5 17V7m7 10V4m7 13v-6M4 20h16" />,
    harvest: <path d="M6 19c0-7 4-12 12-14-1 8-6 13-12 14Zm0 0c3-2 6-5 9-9M4 8c4 0 7 2 8 6" />,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[type]}
    </svg>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 28, stiffness: 90 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest).toLocaleString("es-MX")}${suffix}`;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const services = [
  { icon: "leaf", title: "Cultivo de agave", text: "Planeacion agronomica, seguimiento de desarrollo y buenas practicas para agave azul Tequilana Weber." },
  { icon: "supply", title: "Abastecimiento", text: "Suministro documentado para destilerias, productores e integradores con criterios de calidad definidos." },
  { icon: "field", title: "Supervision de campo", text: "Control operativo en predios, bitacoras de avance y evidencia para decisiones de cosecha." },
  { icon: "cert", title: "Certificacion APA", text: "Procesos alineados a requisitos documentales y trazabilidad necesaria para cadenas certificables." },
  { icon: "data", title: "Trazabilidad digital", text: "Registro por parcela, lote, estatus de cosecha, documentacion y reportes ejecutivos." },
  { icon: "harvest", title: "Gestion de cosecha", text: "Coordinacion de jima, seleccion, carga, entrega y seguimiento de materia prima." },
];

const stats = [
  { number: 15, suffix: "+", label: "años de experiencia" },
  { number: 100, suffix: "%", label: "trazabilidad documental" },
  { number: 5, suffix: "+", label: "zonas regionales cubiertas" },
  { number: 24, suffix: "/7", label: "visibilidad operativa" },
];

const timeline = [
  { step: "01", title: "Diagnostico", text: "Levantamiento de predios, volumen, calendario agricola y requisitos de cumplimiento." },
  { step: "02", title: "Planeacion", text: "Definicion de alcance, responsables, evidencia requerida y ruta operativa." },
  { step: "03", title: "Operacion", text: "Ejecucion en campo con supervision, bitacoras y control de calidad." },
  { step: "04", title: "Seguimiento", text: "Reportes digitales, indicadores de avance y trazabilidad por parcela." },
  { step: "05", title: "Entrega", text: "Cierre documental, soporte para auditoria y entrega de materia prima." },
];

const testimonials = [
  { role: "Productor", logo: "Agave Norte", quote: "La diferencia fue la visibilidad. Cada visita, parcela y corte quedo documentado sin perder velocidad operativa." },
  { role: "Destileria", logo: "Casa Altos", quote: "Nos ayudaron a convertir una cadena fragmentada en un proceso claro, verificable y listo para decision ejecutiva." },
  { role: "Empresa tequilera", logo: "Origen Azul", quote: "El nivel de reporte y control en campo se siente como trabajar con un socio institucional, no solo con un proveedor." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="servicios" className="relative overflow-hidden bg-[#F8F7F4] py-24 sm:py-32">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#7E9B83]/10 blur-3xl" aria-hidden />
          <div className={container}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-90px" }} variants={stagger} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <motion.div variants={fadeUp}>
                <span className={eyebrow}>Servicios integrales</span>
                <h2 className={`${title} mt-4 max-w-4xl`}>Una operacion agricola premium, diseñada para escalar.</h2>
              </motion.div>
              <motion.p variants={fadeUp} className={intro}>
                Sustituimos el servicio agricola generico por una metodologia de campo, datos y cumplimiento para marcas tequileras que necesitan confianza verificable.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-14 grid auto-rows-[minmax(260px,auto)] gap-5 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-[28px] border border-[#1E3A2D]/10 bg-white p-7 shadow-[0_18px_60px_rgba(30,58,45,0.08)] ${index === 0 || index === 4 ? "lg:col-span-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(200,167,91,0.18),transparent_34%),linear-gradient(135deg,rgba(126,155,131,0.15),transparent_52%)] opacity-80 transition group-hover:opacity-100" aria-hidden />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1E3A2D] text-[#C8A75B] shadow-[0_14px_35px_rgba(30,58,45,0.18)]">
                      <Icon type={service.icon} />
                    </div>
                    <div className="mt-12">
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#1A1A1A]">{service.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-[#1A1A1A]/60">{service.text}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className={container}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="rounded-[36px] border border-[#1E3A2D]/10 bg-[#F8F7F4] p-6 shadow-[0_24px_80px_rgba(30,58,45,0.08)] sm:p-10 lg:p-12">
              <motion.div variants={fadeUp} className="max-w-3xl">
                <span className={eyebrow}>Por que trabajan con nosotros</span>
                <h2 className={`${title} mt-4`}>Confianza operativa para cadenas de suministro exigentes.</h2>
              </motion.div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={fadeUp} className="rounded-[26px] border border-[#1E3A2D]/10 bg-white p-6">
                    <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-[#1E3A2D]"><Counter value={stat.number} suffix={stat.suffix} /></p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/45">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="proceso" className="relative overflow-hidden bg-[#F8F7F4] py-24 sm:py-32">
          <div className={container}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.span variants={fadeUp} className={eyebrow}>Proceso documentado</motion.span>
              <motion.h2 variants={fadeUp} className={`${title} mt-4 max-w-4xl`}>Del diagnostico a la entrega, cada etapa queda trazada.</motion.h2>
            </motion.div>

            <div className="mt-16 overflow-x-auto pb-6">
              <motion.ol initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="relative grid min-w-[980px] grid-cols-5 gap-4">
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="absolute left-[9%] right-[9%] top-9 h-px origin-left bg-gradient-to-r from-[#C8A75B]/20 via-[#C8A75B] to-[#C8A75B]/20" aria-hidden />
                {timeline.map((item) => (
                  <motion.li key={item.step} variants={fadeUp} className="relative rounded-[28px] border border-[#1E3A2D]/10 bg-white p-6 shadow-[0_18px_55px_rgba(30,58,45,0.07)]">
                    <div className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl border border-[#C8A75B]/25 bg-[#1E3A2D] text-xl font-semibold text-[#C8A75B] shadow-[0_16px_40px_rgba(30,58,45,0.2)]">{item.step}</div>
                    <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.03em] text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#1A1A1A]/60">{item.text}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </div>
        </section>

        <section id="trazabilidad" className="relative overflow-hidden bg-[#0F2018] py-24 text-white sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,167,91,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(126,155,131,0.18),transparent_34%)]" aria-hidden />
          <div className={`relative ${container} grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center`}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-90px" }} variants={stagger}>
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#C8A75B]">Trazabilidad digital</motion.span>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Control total del proceso agricola</motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-white/65">
                Visualice parcelas, avance de cosecha, certificaciones y reportes de campo en una experiencia tipo plataforma SaaS para decisiones ejecutivas.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 35, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="rounded-[32px] border border-white/10 bg-white/[0.07] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="rounded-[24px] border border-white/10 bg-[#111B16] p-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/35">Agave OS</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Dashboard de operacion</h3>
                  </div>
                  <span className="rounded-full bg-[#C8A75B]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D49B]">En seguimiento</span>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white/70">Parcel tracking</p>
                      <p className="text-sm text-[#C8A75B]">84%</p>
                    </div>
                    <div className="mt-5 h-56 rounded-2xl border border-[#7E9B83]/20 bg-[linear-gradient(135deg,rgba(126,155,131,0.24),rgba(30,58,45,0.08)),radial-gradient(circle_at_30%_30%,rgba(200,167,91,0.18),transparent_24%)] p-4">
                      <div className="grid h-full grid-cols-4 gap-2 opacity-80">
                        {Array.from({ length: 16 }).map((_, index) => (
                          <div key={index} className={`rounded-xl border border-white/10 ${index % 3 === 0 ? "bg-[#C8A75B]/20" : "bg-white/[0.06]"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ["Harvest status", "62% listo"],
                      ["Certifications", "APA aligned"],
                      ["Field reports", "128 registros"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">{label}</p>
                        <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-2/3 rounded-full bg-[#C8A75B]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certificacion" className="bg-white py-24 sm:py-32">
          <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[34px] shadow-[0_28px_90px_rgba(30,58,45,0.16)]">
              <Image src="/agave-campo-e.jpg" alt="Cultivo de agave azul con criterios de trazabilidad" width={900} height={720} className="h-[520px] w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.span variants={fadeUp} className={eyebrow}>Certificacion y cumplimiento</motion.span>
              <motion.h2 variants={fadeUp} className={`${title} mt-4`}>Procesos alineados con APA, CRT y cadenas premium.</motion.h2>
              <motion.div variants={fadeUp} className="mt-7 space-y-5 text-lg leading-8 text-[#1A1A1A]/65">
                <p>Grupo Agavaceas no emite certificaciones; acompaña la operacion agricola con registros, evidencia documental y disciplina de campo para facilitar procesos de validacion.</p>
                <p>El objetivo es reducir friccion entre productor, destileria y comprador final mediante informacion clara: origen, predio, estatus, calidad y soporte documental.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="nosotros" className="bg-[#F8F7F4] py-24 sm:py-32">
          <div className={`${container} grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center`}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.span variants={fadeUp} className={eyebrow}>Sobre Grupo Agavaceas</motion.span>
              <motion.h2 variants={fadeUp} className={`${title} mt-4`}>Agricultura mexicana con estandar empresarial.</motion.h2>
              <motion.p variants={fadeUp} className="mt-7 text-lg leading-8 text-[#1A1A1A]/65">
                Somos un socio operativo para quienes necesitan agave azul con calidad, trazabilidad y una cadena de suministro seria. Integramos experiencia de campo, documentacion y supervision para dar confianza desde la parcela hasta la entrega.
              </motion.p>
              <motion.blockquote variants={fadeUp} className="mt-8 rounded-[28px] border border-[#1E3A2D]/10 bg-white p-6 shadow-[0_18px_50px_rgba(30,58,45,0.07)]">
                <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#1E3A2D]">“El futuro del agave premium se construye con campo, datos y confianza verificable.”</p>
                <footer className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40">Direccion operativa</footer>
              </motion.blockquote>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-[#C8A75B]/15 blur-2xl" aria-hidden />
              <Image src="/agave-campo-f.jpg" alt="Paisaje de campo de agave azul en Jalisco" width={820} height={960} className="relative h-[560px] w-full rounded-[34px] object-cover shadow-[0_30px_90px_rgba(30,58,45,0.18)]" sizes="(max-width: 1024px) 100vw, 45vw" />
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className={container}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center">
              <motion.span variants={fadeUp} className={eyebrow}>Voces del ecosistema</motion.span>
              <motion.h2 variants={fadeUp} className={`${title} mx-auto mt-4 max-w-4xl`}>Confianza para productores, destilerias y empresas tequileras.</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <motion.article key={item.logo} variants={fadeUp} whileHover={{ y: -8 }} className="rounded-[30px] border border-[#1E3A2D]/10 bg-[#F8F7F4] p-7 shadow-[0_18px_55px_rgba(30,58,45,0.07)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1E3A2D] text-sm font-bold text-[#C8A75B]">{item.logo.slice(0, 2)}</div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/45">{item.role}</span>
                  </div>
                  <p className="mt-8 text-xl font-medium leading-8 tracking-[-0.02em] text-[#1A1A1A]">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-bold text-[#1E3A2D]">{item.logo}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
