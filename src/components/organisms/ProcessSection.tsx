import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';

const steps = [
  {
    title: 'Materiales',
    description:
      'Seleccionamos maderas certificadas de bosques sostenibles, priorizando el Roble, Nogal y Teca.',
  },
  {
    title: 'Diseño',
    description:
      'Nuestros diseñadores fusionan la ergonomía moderna con la calidez de lo orgánico.',
  },
  {
    title: 'Entrega',
    description:
      'Cada pieza viaja protegida y con garantía de origen hasta la puerta de tu hogar.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cx-rolling-stone mb-3 block">
            Proceso
          </span>
          <h2 className="font-semibold text-foreground" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Nuestra Forma de Trabajar
          </h2>
        </Reveal>

        {/* Horizontal timeline */}
        <div className="flex flex-col md:flex-row">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 140} className="flex-1">
              {/* Number row with connector */}
              <div className="flex items-center mb-8 md:mb-10">
                <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center shrink-0 bg-background relative z-10">
                  <span className="text-[10px] font-semibold tracking-wider text-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block h-px bg-border flex-1 ml-4" aria-hidden="true" />
                )}
              </div>

              {/* Step content */}
              <div className="md:pr-12 mb-10 md:mb-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-[260px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={200}>
          <Button
            variant="dark"
            className="px-12 py-4"
            onClick={() => document.getElementById('nuestra-historia')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conoce más sobre nosotros
          </Button>
        </Reveal>

      </div>
    </section>
  );
}
