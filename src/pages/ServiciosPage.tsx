import React from 'react';
import { MessageCircle, Ruler, Lightbulb, Hammer, CheckCircle } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { Breadcrumbs } from '../components/atoms/Breadcrumbs';
import { Reveal } from '../components/atoms/Reveal';
import { WHATSAPP_NUMBER } from '../config';

// ── Mosaic images — all Sofá photos as mood-board ──────────────────────────

const mosaicImages = [
  { src: '/Products/Sofas/Sofa1/foto1.webp', alt: 'Sala amoblada por Amara' },
  { src: '/Products/Sofas/Sofa2/foto0.webp', alt: 'Sofá Amara en ambiente' },
  { src: '/Products/Sofas/Sofa3/foto0.webp', alt: 'Sala de estar Amara' },
  { src: '/Products/Sofas/Sofa1/foto2.webp', alt: 'Detalle de tapizado' },
  { src: '/Products/Sofas/Sofa2/foto1.webp', alt: 'Ambiente con sofá esquinero' },
  { src: '/Products/Sofas/Sofa3/foto1.webp', alt: 'Sofá compacto Amara' },
  { src: '/Products/Sofas/Sofa1/foto3.webp', alt: 'Living amoblado' },
  { src: '/Products/Sofas/Sofa2/foto2.webp', alt: 'Detalle de estructura' },
  { src: '/Products/Sofas/Sofa3/foto2.webp', alt: 'Sala con sofá moderno' },
  { src: '/Products/Sofas/Sofa1/foto0.webp', alt: 'Sofá Amara principal' },
  { src: '/Products/Sofas/Sofa2/foto3.webp', alt: 'Sofá en sala amplia' },
  { src: '/Products/Sofas/Sofa3/foto3.webp', alt: 'Ambiente completo Amara' },
];

// ── Process steps ──────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Consulta Inicial',
    description:
      'Nos reunimos contigo para entender tu espacio, tu estilo de vida y tu visión. Medidas, paleta de colores, usos del ambiente y presupuesto.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Render Profesional',
    description:
      'Un diseñador de interiores certificado crea un render 3D fotorrealista de tu espacio, con cada mueble ubicado y los materiales definidos.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Fabricación a Medida',
    description:
      'Fabricamos cada pieza exactamente como aparece en el render — mismas dimensiones, materiales y acabados. Sin sorpresas.',
  },
];

// ── Stats ──────────────────────────────────────────────────────────────────

const stats = [
  { value: 'Diseñador', label: 'certificado incluido' },
  { value: 'Render 3D', label: 'fotorrealista de tu espacio' },
  { value: '100%', label: 'fabricación artesanal boliviana' },
];

// ── FAQ ────────────────────────────────────────────────────────────────────

const faqRows = [
  {
    question: 'Tiempo estimado',
    answer:
      'La consulta y el render toman entre 5 y 7 días hábiles. La fabricación, según la complejidad del proyecto, entre 3 y 6 semanas.',
  },
  {
    question: '¿Qué incluye el servicio?',
    answer:
      'Visita de medición, sesión de consultoría con el diseñador, render 3D completo, fabricación de todos los muebles y coordinación de entrega e instalación.',
  },
  {
    question: '¿Cómo se cotiza?',
    answer:
      'El servicio de diseño tiene un costo fijo que se descuenta del valor total del proyecto si avanzas con la fabricación. Contáctanos para más detalles.',
  },
  {
    question: 'Entrega e instalación',
    answer:
      'Nos encargamos de la entrega en Cochabamba y la instalación en sitio. Cada pieza llega ensamblada y lista para usar.',
  },
];

// ── WhatsApp URL ───────────────────────────────────────────────────────────

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, me interesa el servicio de amoblamiento. Quisiera obtener más información.',
)}`;

const breadcrumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios' },
];

// ── Page ───────────────────────────────────────────────────────────────────

export function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="pt-32">

        {/* ── Breadcrumbs ─────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 mb-10">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-24">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 block">
              Servicios de Amoblamiento
            </span>
            <h1
              className="font-bold text-foreground leading-[1.1] mb-8 max-w-3xl"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Tu hogar,<br />diseñado por expertos.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Un diseñador de interiores certificado crea el render de tu espacio — nosotros
              fabricamos cada mueble exactamente como fue diseñado. El resultado: un hogar que
              se ve exactamente como lo soñaste.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--cx-color-walnut)] text-white uppercase tracking-widest text-xs font-semibold hover:opacity-85 active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar mi proyecto
            </a>
          </Reveal>
        </section>

        {/* ── Process steps ────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 100} className="border-b md:border-b-0 md:border-r border-border last:border-r-0 pt-10 pb-10 md:pr-10 md:pl-0 first:pl-0 [&:not(:first-child)]:md:pl-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-6 block">
                    {step.number}
                  </span>
                  <Icon className="w-6 h-6 text-[var(--cx-color-walnut)] mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Photo mosaic ─────────────────────────────────────────────── */}
        <section className="mb-28 bg-muted py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <Reveal className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                Nuestra Obra
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Ambientes que hablan por sí solos
              </h2>
            </Reveal>

            {/* Dynamic mosaic — CSS columns for natural aspect ratios */}
            <div className="columns-2 md:columns-3 gap-3 [column-gap:12px]">
              {mosaicImages.map((img, i) => (
                <Reveal key={i} delay={i * 40} direction="none">
                  <div className="mb-3 break-inside-avoid overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats strip ──────────────────────────────────────────────── */}
        <Reveal direction="none">
          <section className="bg-foreground text-primary-foreground py-16 mb-28">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center py-8 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0">
                  <CheckCircle className="w-5 h-5 text-[var(--cx-color-walnut)] mb-4" />
                  <span className="text-xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left */}
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 block">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Cómo funciona el servicio?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Desde la primera reunión hasta la instalación final, acompañamos cada etapa del
                proceso. Trabajamos con un número limitado de proyectos al mes para garantizar
                atención personalizada y calidad artesanal en cada pieza.
              </p>
            </Reveal>

            {/* Right — FAQ rows */}
            <div className="divide-y divide-border">
              {faqRows.map((row, i) => (
                <Reveal key={i} delay={i * 80} className="py-6">
                  <p className="text-xs uppercase tracking-widest text-foreground font-semibold mb-2">
                    {row.question}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {row.answer}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────── */}
        <Reveal direction="none">
          <section className="bg-[var(--cx-color-walnut)] py-24 mb-0">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4 block">
                  Comienza hoy
                </span>
                <h2
                  className="font-bold text-white leading-tight"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                >
                  ¿Listo para transformar<br className="hidden md:block" /> tu espacio?
                </h2>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--cx-color-walnut)] uppercase tracking-widest text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </section>
        </Reveal>

      </main>

      <Footer />
    </div>
  );
}
