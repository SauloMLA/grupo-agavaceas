import Link from "next/link";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#certificacion", label: "Certificación" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

// Placeholder para cuando tengan URLs reales de redes
const socialLinks = [
  { href: "#", label: "Facebook", aria: "Facebook" },
  { href: "#", label: "Instagram", aria: "Instagram" },
  { href: "#", label: "LinkedIn", aria: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1f19] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Marca */}
          <div>
            <p className="font-serif text-lg font-bold text-[#e0ddd6]">
              Grupo Agaváceas
            </p>
            <p className="mt-2 text-sm text-[#b0aea6]">
              Servicios agrícolas para la industria tequilera.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8a8882]">
              Navegación
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#b0aea6] hover:text-[#e0ddd6]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales (placeholders para el futuro) */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8a8882]">
              Redes sociales
            </p>
            <ul className="mt-3 flex flex-wrap gap-4">
              {socialLinks.map(({ href, label, aria }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href === "#" ? undefined : "_blank"}
                    rel={href === "#" ? undefined : "noopener noreferrer"}
                    className="text-sm text-[#b0aea6] hover:text-[#e0ddd6]"
                    aria-label={aria}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2d332b] pt-8">
          <p className="text-sm text-[#8a8882]">
            &copy; {year} Grupo Agaváceas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
