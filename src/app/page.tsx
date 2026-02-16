import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

const container = "mx-auto max-w-[1100px] px-4 sm:px-6";
const sectionTitle = "font-serif text-3xl font-bold text-[#2d2d2d] md:text-4xl";
const sectionIntro = "max-w-[42rem] text-lg text-[#5c5c5c] leading-relaxed";
const sectionPadding = "py-20 md:py-28";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Servicios */}
        <section id="servicios" className={`bg-white ${sectionPadding}`}>
          <div className={container}>
            <h2 className={sectionTitle}>
              Servicios de cultivo y abastecimiento de agave azul
            </h2>
            <p className={`mt-4 ${sectionIntro} mb-10`}>
              Trabajamos con productores y tequileros dentro de la denominación de origen del tequila, con enfoque en trazabilidad y estándares de calidad. Nuestros servicios cubren todo el ciclo, desde el campo hasta el apoyo en el cumplimiento de normativa y certificaciones.
            </p>
            <div className="mb-16 overflow-hidden rounded-xl">
              <Image
                src="/agave-detail.jpg"
                alt="Detalle de agave azul Tequilana Weber — cultivo para la industria tequilera"
                width={1100}
                height={600}
                className="h-64 w-full object-cover object-center md:h-80"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cultivo de agave azul Tequilana Weber",
                  text: "Manejo agronómico y acompañamiento en zonas de la denominación de origen del tequila. Incluye planificación de siembra, seguimiento de desarrollo y buenas prácticas agrícolas.",
                },
                {
                  title: "Abastecimiento de agave",
                  text: "Abastecimiento de materia prima con trazabilidad y criterios de calidad definidos. Conexión entre productores de agave y destiladoras con documentación y estándares claros.",
                },
                {
                  title: "Supervisión de jima en campo",
                  text: "Supervisión de jima y apoyo en el cumplimiento de buenas prácticas en campo. Acompañamiento técnico en el corte y selección del agave para garantizar materia prima óptima.",
                },
                {
                  title: "Control de calidad de agave",
                  text: "Control de calidad y criterios técnicos para materia prima destinada a la industria tequilera. Evaluación de madurez, sanidad y parámetros requeridos por el CRT.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-[#e0ddd6] bg-[#f8f6f2] p-8"
                >
                  <span className="mb-3 block text-[#3d5c3a]" aria-hidden>◆</span>
                  <h3 className="font-serif text-xl font-semibold text-[#2d2d2d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#5c5c5c]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-[38rem] text-base text-[#5c5c5c] leading-relaxed">
              Todos nuestros servicios se adaptan a la escala y necesidades de cada cliente, ya sea un productor agrícola, una destiladora o un integrador. La trazabilidad y el registro de actividades forman parte de nuestra metodología para facilitar el cumplimiento de requisitos del Consejo Regulador del Tequila (CRT) y de la certificación ARA cuando aplique.
            </p>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className={`bg-[#f8f6f2] ${sectionPadding}`}>
          <div className={container}>
            <h2 className={sectionTitle}>Cómo trabajamos</h2>
            <p className={`mt-4 ${sectionIntro} mb-10`}>
              Metodología clara y trazable, orientada a las necesidades de productores y destiladoras. Cada etapa se documenta para garantizar transparencia y cumplimiento normativo.
            </p>
            <div className="mb-16 overflow-hidden rounded-xl">
              <Image
                src="/agave-campo-c.jpg"
                alt="Campo de agave azul — operación y supervisión en la denominación de origen"
                width={1100}
                height={500}
                className="h-56 w-full object-cover object-center md:h-72"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
            <ol className="grid gap-10 md:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Evaluación y alcance",
                  text: "Definición de necesidades y alcance del servicio según su operación. Revisión de predios, volúmenes y requisitos específicos (CRT, ARA, contratos). Propuesta y plan de trabajo.",
                },
                {
                  num: "2",
                  title: "Operación en campo",
                  text: "Ejecución de servicios con supervisión y registro de actividades. Trabajo en campo con criterios técnicos definidos y documentación para trazabilidad desde predio.",
                },
                {
                  num: "3",
                  title: "Trazabilidad y entrega",
                  text: "Documentación y entrega conforme a estándares acordados. Reportes, registros y soporte para auditorías o requisitos de certificación cuando el cliente lo requiera.",
                },
              ].map((step) => (
                <li key={step.num} className="flex flex-col">
                  <span
                    className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#3d5c3a] font-serif text-2xl font-bold text-white"
                    aria-hidden
                  >
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#2d2d2d]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#5c5c5c]">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-14 max-w-[38rem] text-base text-[#5c5c5c] leading-relaxed">
              Los plazos y la frecuencia de supervisión se acuerdan con cada cliente. Trabajamos en el territorio de la denominación de origen del tequila y nos adaptamos a sus calendarios de jima y cosecha.
            </p>
          </div>
        </section>

        {/* Certificación ARA */}
        <section id="certificacion" className={`bg-white ${sectionPadding}`}>
          <div className={container}>
            <h2 className={sectionTitle}>Trazabilidad y certificación ARA</h2>
            <div className="mt-6 grid gap-10 md:grid-cols-[1fr,400px] md:items-start">
              <div className="space-y-6 text-lg text-[#5c5c5c] leading-relaxed">
              <p>
                Trabajamos con prácticas y trazabilidad compatibles con los criterios de la{" "}
                <strong className="text-[#2d2d2d]">certificación ARA (Agave Responsable Ambiental)</strong>, administrada por el Consejo Regulador del Tequila (CRT). Nuestros procesos buscan apoyar a productores y tequileros en el cumplimiento de estándares de calidad y origen.
              </p>
              <p>
                La certificación ARA garantiza que el agave provenga de suelos con vocación agrícola y de áreas validadas, con trazabilidad desde predio hasta envasado. En Grupo Agaváceas alineamos nuestros servicios a estos requisitos para facilitar el camino hacia la certificación.
              </p>
              <p>
                No otorgamos la certificación ARA — esta es responsabilidad del CRT y del Organismo de Certificación. Nuestro papel es apoyar con procesos de campo, registro y documentación que permitan a nuestros clientes cumplir con los requisitos que exige la marca ARA cuando decidan solicitarla.
              </p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/agave-campo-e.jpg"
                  alt="Cultivo de agave azul — trazabilidad y estándares de calidad"
                  width={400}
                  height={280}
                  className="h-52 w-full object-cover object-center md:h-64"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className={`bg-[#f8f6f2] ${sectionPadding}`}>
          <div className={container}>
            <h2 className={sectionTitle}>Sobre Grupo Agaváceas</h2>
            <div className="mt-6 overflow-hidden rounded-xl md:mb-10">
              <Image
                src="/agave-campo-f.jpg"
                alt="Campo de agave y paisaje de la denominación de origen del tequila"
                width={1100}
                height={450}
                className="h-64 w-full object-cover object-center md:h-80"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
            <div className="max-w-[48rem] space-y-6 text-lg text-[#5c5c5c] leading-relaxed">
              <p>
                Nos especializamos en servicios agrícolas para la industria tequilera, con enfoque en cultivo de agave azul, supervisión de jima y control de calidad. Operamos en el ámbito de la denominación de origen del tequila, con equipo técnico orientado a la trazabilidad y a los estándares que exigen productores y destiladoras.
              </p>
              <p>
                Nuestro objetivo es ofrecer servicios profesionales, creíbles y alineados con la normativa del sector. Trabajamos con productores de agave, destiladoras e integradores que buscan calidad, trazabilidad y apoyo técnico en campo sin comprometer la seriedad ni la información que comunican a sus propios clientes.
              </p>
              <p>
                Si requiere más información sobre alcance geográfico, condiciones de servicio o referencias, puede contactarnos por los medios indicados en la sección de contacto.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
