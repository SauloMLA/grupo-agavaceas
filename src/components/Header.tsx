"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e0ddd6] bg-white">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#"
          className="shrink-0 font-serif text-lg font-bold text-[#3d5c3a] hover:text-[#2d452a]"
          aria-label="Grupo Agaváceas - Inicio"
        >
          Grupo Agaváceas
        </Link>

        {/* Desktop nav: siempre visible en md+, dentro del header */}
        <nav
          className="hidden md:flex md:items-center md:gap-8"
          aria-label="Navegación principal"
        >
          <Link href="#servicios" className="text-[15px] font-medium text-[#2d2d2d] hover:text-[#3d5c3a]">
            Servicios
          </Link>
          <Link href="#proceso" className="text-[15px] font-medium text-[#2d2d2d] hover:text-[#3d5c3a]">
            Proceso
          </Link>
          <Link href="#certificacion" className="text-[15px] font-medium text-[#2d2d2d] hover:text-[#3d5c3a]">
            Certificación
          </Link>
          <Link href="#nosotros" className="text-[15px] font-medium text-[#2d2d2d] hover:text-[#3d5c3a]">
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="rounded px-4 py-2 text-[15px] font-medium text-white bg-[#3d5c3a] hover:bg-[#2d452a]"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile: botón hamburguesa */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-5 bg-[#2d2d2d] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#2d2d2d] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#2d2d2d] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown: solo en móvil, debajo del header, ancho completo */}
      {menuOpen && (
        <div className="border-t border-[#e0ddd6] bg-white px-4 py-4 md:hidden">
          <nav className="mx-auto max-w-[1100px]" aria-label="Navegación móvil">
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="#servicios" className="block rounded py-3 px-2 text-[15px] font-medium text-[#2d2d2d] hover:bg-[#f8f6f2] hover:text-[#3d5c3a]" onClick={() => setMenuOpen(false)}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="block rounded py-3 px-2 text-[15px] font-medium text-[#2d2d2d] hover:bg-[#f8f6f2] hover:text-[#3d5c3a]" onClick={() => setMenuOpen(false)}>
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#certificacion" className="block rounded py-3 px-2 text-[15px] font-medium text-[#2d2d2d] hover:bg-[#f8f6f2] hover:text-[#3d5c3a]" onClick={() => setMenuOpen(false)}>
                  Certificación
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="block rounded py-3 px-2 text-[15px] font-medium text-[#2d2d2d] hover:bg-[#f8f6f2] hover:text-[#3d5c3a]" onClick={() => setMenuOpen(false)}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="mt-2 block rounded bg-[#3d5c3a] py-3 px-4 text-center text-[15px] font-medium text-white hover:bg-[#2d452a]" onClick={() => setMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
