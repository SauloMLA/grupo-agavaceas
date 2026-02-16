"use client";

const container = "mx-auto max-w-[1100px] px-4 sm:px-6";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className={container}>
        {/* Título alineado al resto del sitio */}
        <header className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            Contacto
          </h2>
          <p className="mt-3 max-w-[32rem] text-lg text-[#5c5c5c] leading-relaxed">
            Solicite información, cotización o agende una conversación sobre nuestros servicios.
          </p>
          <div className="mt-4 h-1 w-16 bg-[#3d5c3a]" aria-hidden />
        </header>

        <div className="overflow-hidden rounded-2xl shadow-lg md:flex">
          {/* Panel izquierdo: fondo verde corporativo (mismo tono que hero) */}
          <div className="bg-[#2c3e2b] p-8 md:w-[380px] md:shrink-0 md:p-10">
            <h3 className="font-serif text-xl font-semibold text-[#f0efe8]">
              Datos de contacto
            </h3>
            <ul className="mt-8 space-y-7">
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-[#9caa98]">
                  Correo
                </span>
                <a
                  href="mailto:contacto@grupoagavaceas.com"
                  className="mt-1.5 block text-[#e8e6df] hover:text-white"
                >
                  contacto@grupoagavaceas.com
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-[#9caa98]">
                  Teléfono
                </span>
                <a
                  href="tel:+523300000000"
                  className="mt-1.5 block text-[#e8e6df] hover:text-white"
                >
                  +52 33 0000 0000
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-[#9caa98]">
                  Horario
                </span>
                <p className="mt-1.5 text-[#e8e6df]">
                  Lunes a viernes, 9:00 – 18:00 h
                </p>
              </li>
            </ul>
            <p className="mt-10 border-t border-[#3d4a3a] pt-6 text-sm text-[#b0aea6]">
              Respuesta en 24 a 48 horas hábiles.
            </p>
          </div>

          {/* Panel derecho: formulario limpio */}
          <div className="flex-1 bg-[#faf9f7] p-8 md:p-12">
            <h3 className="font-serif text-lg font-semibold text-[#2d2d2d]">
              Envíe su mensaje
            </h3>
            <form
              action="#"
              method="post"
              className="mt-7 space-y-6"
              aria-label="Formulario de contacto"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#2d2d2d]">
                    Nombre *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="nombre"
                    required
                    autoComplete="name"
                    className="input-contact"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#2d2d2d]">
                    Correo electrónico *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="input-contact"
                    placeholder="correo@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-[#2d2d2d]">
                  Teléfono
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="telefono"
                  autoComplete="tel"
                  className="input-contact"
                  placeholder="Opcional"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#2d2d2d]">
                  Mensaje *
                </label>
                <textarea
                  id="contact-message"
                  name="mensaje"
                  required
                  rows={5}
                  className="input-contact min-h-[120px] resize-y py-3"
                  placeholder="Indique servicio de interés, zona de operación o volumen si aplica."
                />
              </div>
              <div className="pt-1">
                <button type="submit" className="btn-contact">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
