"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const contactItems = [
  {
    label: "WhatsApp ejecutivo",
    value: "+52 33 0000 0000",
    href: "https://wa.me/523300000000",
    note: "Atención directa para productores y destilerías",
  },
  {
    label: "Correo comercial",
    value: "contacto@grupoagavaceas.com",
    href: "mailto:contacto@grupoagavaceas.com",
    note: "Propuestas, documentación y seguimiento",
  },
  {
    label: "Base operativa",
    value: "Jalisco, México",
    href: "#",
    note: "Cobertura para la cadena tequilera regional",
  },
];

const proofPoints = [
  "Diagnóstico por predio",
  "Documentación para auditoría",
  "Abastecimiento trazable",
];

export default function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#F8F7F4] py-24 sm:py-32">
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-[#7E9B83]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#C8A75B]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-[#1E3A2D] p-6 text-white shadow-[0_34px_100px_rgba(30,58,45,0.25)] sm:p-9"
        >
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C8A75B]/20"
            aria-hidden
          />
          <div
            className="absolute -right-10 top-24 h-36 w-36 rounded-full bg-[#C8A75B]/10 blur-2xl"
            aria-hidden
          />

          <div className="relative">
            <span className="inline-flex rounded-full border border-[#C8A75B]/25 bg-[#C8A75B]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#F2DFA8]">
              Contacto ejecutivo
            </span>

            <h2 className="mt-7 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Diseñemos una operación agrícola trazable.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
              Comparta su zona, volumen, calendario de jima o necesidad de certificación. El objetivo es convertir la conversación inicial en un alcance claro, medible y presentable para su equipo.
            </p>

            <div className="mt-9 grid gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block text-base font-black text-white">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-xs font-medium leading-5 text-white/45">
                        {item.note}
                      </span>
                    </span>

                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-[#C8A75B] transition duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-9 rounded-[28px] border border-[#C8A75B]/20 bg-[#C8A75B]/10 p-5">
              <p className="text-sm font-black text-[#F2DFA8]">
                Preparado para conversaciones con productores, destilerías, integradores y marcas premium.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {proofPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/70"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}