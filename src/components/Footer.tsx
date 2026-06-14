import Link from "next/link";

const columns = [
  {
    title: "Empresa",
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#trazabilidad", label: "Trazabilidad" },
      { href: "#proceso", label: "Proceso" },
      { href: "#nosotros", label: "Nosotros" },
    ],
  },
  {
    title: "Operacion",
    links: [
      { href: "#certificacion", label: "Certificacion APA" },
      { href: "#servicios", label: "Abastecimiento" },
      { href: "#servicios", label: "Supervision de campo" },
      { href: "#contacto", label: "Solicitar propuesta" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "Instagram" },
      { href: "#", label: "Facebook" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0F2018] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#C8A75B]/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="#" className="inline-flex items-center gap-3" aria-label="Grupo Agavaceas - Inicio">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10">
                <span className="h-5 w-5 rounded-full border border-[#C8A75B] bg-[#C8A75B]/20" />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold tracking-tight">Grupo Agavaceas</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.28em] text-white/40">Modern Mexican agrotech</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md text-base leading-7 text-white/60">
              Servicios agricolas premium para cultivo, trazabilidad, cosecha y abastecimiento certificado de agave azul en la industria tequilera.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['APA aligned', 'Trazabilidad documental', 'Cobertura Jalisco'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A75B]">{column.title}</p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link href={link.href} className="text-sm font-medium text-white/60 transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Grupo Agavaceas. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">Privacidad</Link>
            <Link href="#" className="hover:text-white">Terminos</Link>
            <Link href="#contacto" className="hover:text-white">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
