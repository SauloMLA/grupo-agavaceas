"use client";

import { motion } from "framer-motion";

const projectTypes = [
  "Cultivo",
  "Abastecimiento",
  "Trazabilidad",
  "Certificación APA",
];

const inputBase =
  "peer h-14 w-full rounded-2xl border border-[#1E3A2D]/10 bg-white px-4 pt-5 text-sm font-semibold text-[#1A1A1A] outline-none transition duration-300 placeholder:text-transparent hover:border-[#1E3A2D]/20 focus:border-[#C8A75B] focus:bg-white focus:ring-4 focus:ring-[#C8A75B]/15";

const labelBase =
  "pointer-events-none absolute left-4 top-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1E3A2D]/45 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-semibold peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#1E3A2D]";

const fields = [
  {
    id: "contact-name",
    name: "nombre",
    label: "Nombre completo",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    id: "contact-email",
    name: "email",
    label: "Correo corporativo",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    id: "contact-phone",
    name: "telefono",
    label: "WhatsApp o teléfono",
    type: "tel",
    autoComplete: "tel",
    required: false,
  },
  {
    id: "contact-company",
    name: "empresa",
    label: "Empresa o destilería",
    type: "text",
    autoComplete: "organization",
    required: false,
  },
];

export default function ContactForm() {
  return (
    <motion.form
      action="#"
      method="post"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[34px] border border-[#1E3A2D]/10 bg-white/80 p-4 shadow-[0_32px_100px_rgba(30,58,45,0.14)] backdrop-blur-2xl sm:p-6 lg:p-8"
      aria-label="Formulario de contacto"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#C8A75B]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#7E9B83]/18 blur-3xl"
        aria-hidden
      />

      <div className="relative rounded-[28px] border border-[#1E3A2D]/8 bg-[#F8F7F4]/80 p-5 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-[#1E3A2D]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C8A75B]">
              Solicitud comercial
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#1E3A2D] sm:text-3xl">
              Definamos el alcance de su operación.
            </h3>
          </div>

          <div className="rounded-2xl border border-[#1E3A2D]/10 bg-white px-4 py-3 text-left shadow-sm sm:text-right">
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1E3A2D]/40">
              Tiempo de respuesta
            </span>
            <span className="mt-1 block text-sm font-black text-[#1E3A2D]">
              24-48 h hábiles
            </span>
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-black text-[#1E3A2D]">
            ¿Qué necesita resolver?
          </legend>

          <div className="mt-3 grid gap-2 sm:grid-cols-4">
            {projectTypes.map((type) => (
              <label key={type} className="group cursor-pointer">
                <input
                  type="checkbox"
                  name="interes"
                  value={type}
                  className="peer sr-only"
                />
                <span className="flex min-h-12 items-center justify-center rounded-2xl border border-[#1E3A2D]/10 bg-white px-3 text-center text-xs font-black text-[#1E3A2D]/65 transition duration-300 hover:-translate-y-0.5 hover:border-[#C8A75B]/50 hover:text-[#1E3A2D] peer-checked:border-[#C8A75B] peer-checked:bg-[#1E3A2D] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-[#C8A75B]/20">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.id} className="relative">
              <input
                id={field.id}
                type={field.type}
                name={field.name}
                required={field.required}
                autoComplete={field.autoComplete}
                placeholder=" "
                className={inputBase}
              />
              <label htmlFor={field.id} className={labelBase}>
                {field.label}
                {field.required ? " *" : ""}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="relative">
            <select
              id="contact-scale"
              name="escala"
              defaultValue=""
              className="h-14 w-full appearance-none rounded-2xl border border-[#1E3A2D]/10 bg-white px-4 text-sm font-semibold text-[#1A1A1A] outline-none transition duration-300 hover:border-[#1E3A2D]/20 focus:border-[#C8A75B] focus:ring-4 focus:ring-[#C8A75B]/15"
            >
              <option value="" disabled>
                Escala de operación
              </option>
              <option>Menos de 100 hectáreas</option>
              <option>100 a 500 hectáreas</option>
              <option>500 a 2,000 hectáreas</option>
              <option>Más de 2,000 hectáreas</option>
              <option>Por definir</option>
            </select>
            <span
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1E3A2D]/45"
              aria-hidden
            >
              ↓
            </span>
          </div>

          <div className="relative">
            <input
              id="contact-zone"
              type="text"
              name="zona"
              placeholder=" "
              className={inputBase}
            />
            <label htmlFor="contact-zone" className={labelBase}>
              Zona de operación
            </label>
          </div>
        </div>

        <div className="relative mt-4">
          <textarea
            id="contact-message"
            name="mensaje"
            required
            rows={5}
            placeholder=" "
            className="peer min-h-[158px] w-full resize-y rounded-2xl border border-[#1E3A2D]/10 bg-white px-4 pt-7 text-sm font-semibold leading-6 text-[#1A1A1A] outline-none transition duration-300 placeholder:text-transparent hover:border-[#1E3A2D]/20 focus:border-[#C8A75B] focus:ring-4 focus:ring-[#C8A75B]/15"
          />
          <label htmlFor="contact-message" className={labelBase}>
            Cuéntenos el contexto: volumen, calendario, certificación o trazabilidad *
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-[24px] border border-[#1E3A2D]/10 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="px-2 text-xs font-semibold leading-5 text-[#1A1A1A]/55 sm:max-w-[330px]">
            La información se usa únicamente para preparar una propuesta inicial y priorizar el contacto ejecutivo.
          </p>

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1E3A2D] px-7 py-4 text-sm font-black text-white shadow-[0_20px_50px_rgba(30,58,45,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#162C22] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C8A75B]/30"
          >
            Solicitar propuesta
            <span className="transition duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </button>
        </div>
      </div>
    </motion.form>
  );
}