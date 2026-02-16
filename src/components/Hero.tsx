import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#2c3e2b]">
      {/* Imagen de fondo: b — campo de agave */}
      <div className="absolute inset-0">
        <Image
          src="/hero-b.jpg"
          alt="Campo de agave azul en la denominación de origen del tequila"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[#2c3e2b]/75"
          aria-hidden
        />
      </div>
      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-[42rem]">
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#f0efe8] drop-shadow-sm sm:text-4xl md:text-5xl">
            Servicios agrícolas para la industria tequilera
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#e0ddd6] drop-shadow-sm sm:text-xl">
            Grupo Agaváceas ofrece servicios agrícolas especializados para la industria tequilera: desde el cultivo y abastecimiento de agave azul hasta la supervisión de jima y el control de calidad en campo.
          </p>
          <Link
            href="#contacto"
            className="mt-10 inline-block rounded bg-[#f0efe8] px-8 py-4 text-base font-semibold text-[#2c3e2b] shadow-lg transition-colors hover:bg-white"
          >
            Solicitar información
          </Link>
        </div>
      </div>
    </section>
  );
}
