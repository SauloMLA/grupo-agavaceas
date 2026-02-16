"use client";

export default function ContactForm() {
  return (
    <form
      action="#"
      method="post"
      className="max-w-[32rem] space-y-5 rounded-lg border border-[#e0ddd6] bg-[#f8f6f2] p-8"
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-[#2d2d2d]">
          Nombre *
        </label>
        <input
          id="contact-name"
          type="text"
          name="nombre"
          required
          className="w-full rounded border border-[#e0ddd6] bg-white px-4 py-3 text-[#2d2d2d] placeholder:text-[#8a8882] focus:border-[#3d5c3a] focus:outline-none focus:ring-1 focus:ring-[#3d5c3a]"
          placeholder="Su nombre"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-[#2d2d2d]">
          Correo electrónico *
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="w-full rounded border border-[#e0ddd6] bg-white px-4 py-3 text-[#2d2d2d] placeholder:text-[#8a8882] focus:border-[#3d5c3a] focus:outline-none focus:ring-1 focus:ring-[#3d5c3a]"
          placeholder="correo@ejemplo.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-[#2d2d2d]">
          Teléfono
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="telefono"
          className="w-full rounded border border-[#e0ddd6] bg-white px-4 py-3 text-[#2d2d2d] placeholder:text-[#8a8882] focus:border-[#3d5c3a] focus:outline-none focus:ring-1 focus:ring-[#3d5c3a]"
          placeholder="Opcional"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-[#2d2d2d]">
          Mensaje *
        </label>
        <textarea
          id="contact-message"
          name="mensaje"
          required
          rows={5}
          className="w-full resize-y rounded border border-[#e0ddd6] bg-white px-4 py-3 text-[#2d2d2d] placeholder:text-[#8a8882] focus:border-[#3d5c3a] focus:outline-none focus:ring-1 focus:ring-[#3d5c3a]"
          placeholder="Indique su interés: servicio, zona, volumen si aplica..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-[#3d5c3a] px-6 py-4 font-semibold text-white hover:bg-[#2d452a] focus:outline-none focus:ring-2 focus:ring-[#3d5c3a] focus:ring-offset-2"
      >
        Enviar mensaje
      </button>
      <p className="text-sm text-[#5c5c5c]">
        Atendemos solicitudes de lunes a viernes. A futuro este formulario enviará un correo a la empresa.
      </p>
    </form>
  );
}
