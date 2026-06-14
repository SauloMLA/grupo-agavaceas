"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trazabilidad", label: "Trazabilidad" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#1E3A2D]/100 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
          : "border-b border-white/5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#" className="group flex items-center gap-3" aria-label="Grupo Agavaceas - Inicio">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-105">
            <span className="h-4 w-4 rounded-full border border-[#C8A75B] bg-[#C8A75B]/20" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-white">Grupo Agavaceas</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Agrotech supply</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.07] p-1 backdrop-blur-xl lg:flex" aria-label="Navegacion principal">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A75B]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="#contacto" className="rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A75B]">
            Hablar con un asesor
          </Link>
          <Link href="#contacto" className="rounded-full bg-[#C8A75B] px-5 py-2.5 text-sm font-bold text-[#1E3A2D] shadow-[0_14px_40px_rgba(200,167,91,0.3)] transition hover:-translate-y-0.5 hover:bg-[#d8b968] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Solicitar propuesta
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl lg:hidden"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="mx-4 mb-4 overflow-hidden rounded-[24px] border border-white/10 bg-[#1E3A2D]/94 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Navegacion movil">
              <ul className="space-y-1">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/100 hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#contacto" className="mt-3 block rounded-2xl bg-[#C8A75B] px-4 py-3 text-center text-sm font-bold text-[#1E3A2D]" onClick={() => setMenuOpen(false)}>
                Solicitar propuesta
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
