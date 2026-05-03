import { Reveal } from '../atoms/Reveal';

const materials = [
  { wood: 'Nogal', origin: 'Valle de Cochabamba' },
  { wood: 'Roble', origin: 'Santa Cruz' },
  { wood: 'Teca', origin: 'Tierras del Beni' },
];

export function BrandStory() {
  return (
    <section className="flex flex-col md:flex-row items-stretch" style={{ minHeight: '680px' }}>

      {/* Left: teak placeholder with identity layer */}
      <Reveal className="w-full md:w-[42%] min-h-[300px] md:min-h-0" direction="none">
        <div className="bg-cx-teak w-full h-full min-h-[300px] relative overflow-hidden flex items-center justify-center">
          {/* Brand watermark */}
          <span
            className="text-primary-foreground font-black select-none pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{ fontSize: 'clamp(80px, 17vw, 160px)', opacity: 0.07, letterSpacing: '-0.04em' }}
            aria-hidden="true"
          >
            AMARA
          </span>
          {/* Provenance tag */}
          <div className="absolute bottom-8 left-8">
            <p className="text-primary-foreground/40 text-[10px] uppercase tracking-[0.3em]">
              Hecho en Bolivia
            </p>
          </div>
        </div>
      </Reveal>

      {/* Right: story content */}
      <div className="w-full md:w-[58%] bg-cx-walnut text-primary-foreground flex flex-col justify-center px-12 py-16 md:px-16 lg:px-20">

        <Reveal className="mb-8" delay={80}>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6 block">
            Nuestra Historia
          </span>
          <h2
            className="font-black leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
          >
            Cada veta cuenta una historia.
          </h2>
        </Reveal>

        <Reveal className="mb-8" delay={160}>
          <div className="w-10 h-px bg-primary-foreground/25" />
        </Reveal>

        <Reveal className="mb-10" delay={240}>
          <p className="text-base leading-relaxed opacity-80">
            En Amara Muebles trabajamos exclusivamente con maderas seleccionadas en los bosques
            certificados del Beni y los valles de Cochabamba. Cada pieza tarda entre tres y seis
            semanas en completarse, respetando los tiempos de la madera, no los de una fábrica.
          </p>
        </Reveal>

        {/* Craftsman profile */}
        <Reveal className="mb-10" delay={320}>
          <div className="border-t border-primary-foreground/15 pt-6">
            <p className="text-sm font-semibold mb-1">Julio Mamani</p>
            <p className="text-xs opacity-55 leading-relaxed">
              Maestro tallador · 22 años trabajando el nogal en Santa Cruz de la Sierra
            </p>
          </div>
        </Reveal>

        {/* Material origins */}
        <Reveal delay={400}>
          <div className="border-t border-primary-foreground/15 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">
              Maderas de origen
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {materials.map((m) => (
                <div key={m.wood} className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold">{m.wood}</span>
                  <span className="text-xs opacity-55">{m.origin}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
