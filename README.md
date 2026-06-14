# Grupo Agaváceas — Premium Agrotech Website

Sitio web premium para una empresa de servicios agrícolas especializada en la cadena de valor del tequila: cultivo de agave azul, abastecimiento, supervisión de campo, trazabilidad documental, certificación APA y gestión de cosecha.

Este proyecto fue rediseñado desde cero con una dirección visual de alto nivel: una mezcla entre estética enterprise SaaS, branding agrícola de lujo y tecnología aplicada al campo mexicano.

---

## Vista general

El objetivo del rediseño fue transformar una presencia web agrícola tradicional en una landing moderna, confiable y comercialmente sólida, capaz de comunicar escala, operación profesional y trazabilidad a productores, destilerías, integradores y marcas premium de tequila.

La experiencia está pensada para sentirse más cercana a productos digitales enterprise como Stripe, Linear, Vercel o Ramp, pero con una narrativa visual ligada al agave, Jalisco, la sustentabilidad y la profesionalización del sector tequilero.

---

## Propuesta de valor del sitio

Grupo Agaváceas se presenta como un socio estratégico para la industria tequilera, no como un proveedor agrícola genérico. El sitio comunica:

•⁠  ⁠Confianza institucional.
•⁠  ⁠Operación agrícola a escala.
•⁠  ⁠Trazabilidad documental y digital.
•⁠  ⁠Abastecimiento certificado.
•⁠  ⁠Procesos alineados con APA.
•⁠  ⁠Supervisión profesional en campo.
•⁠  ⁠Sustentabilidad y control de origen.
•⁠  ⁠Modernización del campo mediante tecnología.

---

## Stack técnico

•⁠  ⁠*Framework:* Next.js App Router
•⁠  ⁠*Lenguaje:* TypeScript
•⁠  ⁠*UI:* React
•⁠  ⁠*Styling:* Tailwind CSS
•⁠  ⁠*Animaciones:* Framer Motion
•⁠  ⁠*Optimización de imágenes:* next/image
•⁠  ⁠*SEO:* Metadata API de Next.js
•⁠  ⁠*Arquitectura:* Componentes modulares por sección

---

## Dependencias principales

⁠ bash
npm install framer-motion
 ⁠

El proyecto asume que Next.js, React, TypeScript y Tailwind CSS ya están configurados.

---

## Instalación local

⁠ bash
npm install
npm run dev
 ⁠

Después abre:

⁠ bash
http://localhost:3000
 ⁠

---

## Estructura recomendada

⁠ bash
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Header.tsx
    Hero.tsx
    ContactSection.tsx
    ContactForm.tsx
    Footer.tsx
public/
  hero-b.jpg
  agave-detail.jpg
  agave-campo-c.jpg
  agave-campo-e.jpg
  agave-campo-f.jpg
 ⁠

	⁠Nota: las imágenes deben existir dentro de ⁠ public/ ⁠. Si no están disponibles, Next.js marcará error al renderizar los componentes que usan ⁠ next/image ⁠.

---

## Secciones del sitio

### 1. Header premium

El header fue rediseñado como una barra de navegación moderna, sticky y con efecto glassmorphism sutil. Está pensado para mantener claridad sin competir visualmente con el hero.

Características:

•⁠  ⁠Navegación responsive.
•⁠  ⁠Menú mobile animado.
•⁠  ⁠CTA destacado.
•⁠  ⁠Estética enterprise.
•⁠  ⁠Bordes suaves y transparencia controlada.

### 2. Hero cinematográfico

El hero funciona como la pieza principal de posicionamiento. Usa una imagen de campos de agave con tratamiento editorial, overlay oscuro y composición tipo landing premium.

Contenido principal:

•⁠  ⁠Label: “Servicios agrícolas especializados”.
•⁠  ⁠Headline: “El socio estratégico para la industria tequilera”.
•⁠  ⁠Copy orientado a trazabilidad, cultivo y abastecimiento certificado.
•⁠  ⁠CTA primario y secundario.
•⁠  ⁠Tarjeta flotante de métricas.

La intención es que el primer impacto se sienta como una empresa agrícola de alto valor, no como una página informativa básica.

### 3. Bento grid de servicios

Los servicios se presentan en una retícula tipo bento, inspirada en productos SaaS modernos. Esto ayuda a comunicar amplitud operativa sin saturar al usuario con párrafos largos.

Servicios incluidos:

•⁠  ⁠Cultivo de agave.
•⁠  ⁠Abastecimiento.
•⁠  ⁠Supervisión de campo.
•⁠  ⁠Certificación APA.
•⁠  ⁠Trazabilidad digital.
•⁠  ⁠Gestión de cosecha.

Cada card tiene:

•⁠  ⁠Iconografía personalizada.
•⁠  ⁠Fondo con gradientes suaves.
•⁠  ⁠Jerarquía visual clara.
•⁠  ⁠Microinteracciones hover.
•⁠  ⁠Copy corto y comercial.

### 4. Sección de confianza

La sección “Por qué trabajan con nosotros” comunica credibilidad mediante bloques estadísticos premium.

Métricas incluidas:

•⁠  ⁠15+ años de experiencia.
•⁠  ⁠100% trazabilidad documental.
•⁠  ⁠Cobertura regional.
•⁠  ⁠Procesos alineados con APA.

Estas métricas están diseñadas para reforzar confianza y reducir fricción comercial.

### 5. Timeline de proceso

El proceso se transformó en una línea horizontal de cinco etapas:

1.⁠ ⁠Diagnóstico.
2.⁠ ⁠Planeación.
3.⁠ ⁠Operación.
4.⁠ ⁠Seguimiento.
5.⁠ ⁠Entrega.

La estructura reemplaza explicaciones largas con una narrativa operacional clara y fácil de escanear.

### 6. Dashboard de trazabilidad

Una sección oscura presenta un mockup tipo SaaS dashboard para comunicar control operativo y trazabilidad.

Elementos visuales:

•⁠  ⁠Seguimiento por parcela.
•⁠  ⁠Estado de cosecha.
•⁠  ⁠Certificaciones.
•⁠  ⁠Reportes de campo.
•⁠  ⁠Interfaz tipo plataforma digital.

Esta sección es clave para diferenciar a la empresa de proveedores agrícolas tradicionales.

### 7. About editorial

La sección “Nosotros” reemplaza párrafos largos por una composición editorial dividida:

•⁠  ⁠Imagen grande del campo/agave.
•⁠  ⁠Narrativa institucional.
•⁠  ⁠Quote estilo fundador.

El objetivo es agregar humanidad sin perder tono ejecutivo.

### 8. Testimonios

Se agregó una sección de testimonios con tarjetas premium orientadas a tres perfiles:

•⁠  ⁠Productores.
•⁠  ⁠Destilerías.
•⁠  ⁠Empresas tequileras.

Los testimonios ayudan a simular prueba social y a reforzar la narrativa de confianza, trazabilidad y profesionalismo.

### 9. Contacto ejecutivo

El formulario fue rediseñado para sentirse como una solicitud comercial premium, no como un formulario básico.

Incluye:

•⁠  ⁠Panel lateral oscuro con información ejecutiva.
•⁠  ⁠WhatsApp CTA.
•⁠  ⁠Email comercial.
•⁠  ⁠Ubicación operativa.
•⁠  ⁠Formulario con labels flotantes.
•⁠  ⁠Selección de tipo de necesidad.
•⁠  ⁠Campo de escala de operación.
•⁠  ⁠Campo de zona.
•⁠  ⁠Mensaje contextual.
•⁠  ⁠Microcopy de privacidad y tiempo de respuesta.

### 10. Footer enterprise

El footer usa una estructura más institucional:

•⁠  ⁠Logo / marca.
•⁠  ⁠Navegación.
•⁠  ⁠Certificaciones.
•⁠  ⁠Links sociales.
•⁠  ⁠Legal.
•⁠  ⁠Mensaje de posicionamiento.

---

## Decisiones de diseño

### Paleta de color

La paleta evita verdes planos o tonos corporativos genéricos. Se eligió una combinación sobria y premium:

| Rol | Color | Uso |
| --- | --- | --- |
| Primary | ⁠ #1E3A2D ⁠ | Marca, CTAs, fondos oscuros |
| Secondary | ⁠ #7E9B83 ⁠ | Apoyos visuales, fondos suaves |
| Accent | ⁠ #C8A75B ⁠ | Detalles premium, badges, enfoque |
| Neutral | ⁠ #F8F7F4 ⁠ | Fondos cálidos |
| Text | ⁠ #1A1A1A ⁠ | Texto principal |

### Tipografía

Se usa una combinación moderna con ⁠ Outfit ⁠ para display y ⁠ Inter ⁠ para lectura. Esto da un balance entre carácter editorial y precisión de producto digital.

### Layout

El layout utiliza:

•⁠  ⁠Espaciados amplios.
•⁠  ⁠Contenedores grandes.
•⁠  ⁠Grids modernos.
•⁠  ⁠Cards con radios entre 16px y 34px.
•⁠  ⁠Jerarquía editorial.
•⁠  ⁠Contraste entre secciones claras y oscuras.

### Animación

Framer Motion se usa para:

•⁠  ⁠Fade-up reveals.
•⁠  ⁠Staggered cards.
•⁠  ⁠Hover microinteractions.
•⁠  ⁠Parallax sutil.
•⁠  ⁠Transiciones suaves.

Las animaciones son intencionales: elevan la experiencia sin convertir el sitio en algo pesado o distractor.

---

## Accesibilidad

El proyecto incluye buenas prácticas de accesibilidad:

•⁠  ⁠Estructura semántica con ⁠ header ⁠, ⁠ main ⁠, ⁠ section ⁠, ⁠ footer ⁠.
•⁠  ⁠Labels asociados a inputs.
•⁠  ⁠Estados ⁠ focus-visible ⁠.
•⁠  ⁠Contraste cuidado en CTAs y secciones oscuras.
•⁠  ⁠Textos alternativos en imágenes.
•⁠  ⁠Navegación responsive.
•⁠  ⁠Botones con estados claros.

---

## SEO

El archivo ⁠ layout.tsx ⁠ incluye metadata base para mejorar posicionamiento:

•⁠  ⁠Title optimizado.
•⁠  ⁠Description comercial.
•⁠  ⁠Open Graph title.
•⁠  ⁠Open Graph description.
•⁠  ⁠Idioma ⁠ es ⁠ en HTML.

Ejemplo de intención SEO:

	⁠Servicios agrícolas premium para la industria tequilera, trazabilidad digital, cultivo sustentable y abastecimiento certificado de agave azul.

---

## Performance

El sitio está preparado para buen rendimiento mediante:

•⁠  ⁠⁠ next/image ⁠ para imágenes optimizadas.
•⁠  ⁠Componentes modulares.
•⁠  ⁠Tailwind CSS para estilos utilitarios.
•⁠  ⁠Animaciones ligeras y controladas.
•⁠  ⁠⁠ priority ⁠ en imagen principal del hero.
•⁠  ⁠Diseño responsive sin dependencias visuales pesadas.

---

## Retos resueltos

### 1. Convertir una web agrícola tradicional en una experiencia premium

El mayor reto fue evitar una estética genérica de proveedor agrícola. La solución fue construir un lenguaje visual híbrido entre agrotech, SaaS enterprise y editorial luxury branding.

### 2. Comunicar trazabilidad sin sobreexplicar

En lugar de usar párrafos largos, el sitio convierte trazabilidad en una experiencia visual: métricas, dashboard, tarjetas y proceso operativo.

### 3. Diseñar confianza para compradores B2B

La landing prioriza señales comerciales: certificaciones, cobertura, años de experiencia, documentación, procesos y claridad de contacto.

### 4. Mantener el sitio responsive

Cada sección fue pensada para funcionar en desktop y mobile, con grids que se colapsan naturalmente y mantienen legibilidad.

---

## Qué demuestra este proyecto en mi portafolio

Este proyecto demuestra capacidad para:

•⁠  ⁠Rediseñar una marca desde estrategia visual hasta implementación frontend.
•⁠  ⁠Construir interfaces premium con Next.js, TypeScript y Tailwind CSS.
•⁠  ⁠Traducir requerimientos de negocio en narrativa digital.
•⁠  ⁠Crear landing pages B2B orientadas a conversión.
•⁠  ⁠Usar Framer Motion de forma sutil y profesional.
•⁠  ⁠Diseñar sistemas visuales consistentes.
•⁠  ⁠Escribir componentes React reutilizables y mantenibles.
•⁠  ⁠Balancear estética, performance, accesibilidad y SEO.

---

## Posibles mejoras futuras

•⁠  ⁠Integrar formulario con Resend, SendGrid, HubSpot o CRM interno.
•⁠  ⁠Agregar CMS para editar servicios y testimonios.
•⁠  ⁠Implementar analytics de conversión.
•⁠  ⁠Agregar video real de dron en el hero.
•⁠  ⁠Crear páginas internas para cada servicio.
•⁠  ⁠Agregar casos de éxito verificables.
•⁠  ⁠Conectar dashboard mockup con datos reales.
•⁠  ⁠Implementar validación de formulario con Zod y React Hook Form.
•⁠  ⁠Agregar modo multiidioma español/inglés.
•⁠  ⁠Crear sitemap y robots.txt.

---

## Scripts útiles

⁠ bash
npm run dev
npm run build
npm run start
npm run lint
 ⁠

---

## Créditos

Proyecto desarrollado como rediseño premium para Grupo Agaváceas, con enfoque en servicios agrícolas especializados para la industria tequilera.

Dirección creativa: modern Mexican agrotech, enterprise SaaS aesthetics y luxury agriculture branding.

---

## Nota para reclutadores

Este proyecto no solo es una landing visual. Es un ejercicio completo de criterio frontend: estructura, narrativa, componentes, diseño responsive, microinteracciones, SEO base, accesibilidad y posicionamiento comercial B2B.