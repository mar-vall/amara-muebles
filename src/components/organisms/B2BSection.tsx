import { Reveal } from '../atoms/Reveal';
import { b2bWhatsappUrl } from '../../lib/whatsapp';

const benefits = [
  {
    title: 'Diseño a medida',
    description:
      'Adaptamos cada pieza a las dimensiones y requerimientos específicos de tu proyecto. Materiales, acabados y dimensiones según tu plano.',
  },
  {
    title: 'Precios por volumen',
    description:
      'Cotizaciones especiales para pedidos comerciales. Cuanto mayor el proyecto, mejores condiciones. Consúltanos sin compromiso.',
  },
  {
    title: 'Tiempos coordinados',
    description:
      'Planificamos producción y entrega según el cronograma de tu obra. Sin sorpresas, sin retrasos que frenen tu proyecto.',
  },
];

export function B2BSection() {
  const waUrl = b2bWhatsappUrl();

  return (
    <section className="py-24 bg-foreground text-primary-foreground">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">

          {/* Left — 3 cols: headline + benefits list */}
          <div className="md:col-span-3">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-6 block">
                Para Empresas
              </span>
              <h2 className="text-[36px] leading-[46px] font-semibold mb-6">
                Muebles para Proyectos Comerciales
              </h2>
              <p className="text-base leading-relaxed text-primary-foreground/70 mb-12 max-w-lg">
                Trabajamos con diseñadores de interiores, constructoras, hoteles boutique y oficinas
                que necesitan piezas de calidad artesanal a escala. Desde una sala de juntas hasta
                un proyecto hotelero completo.
              </p>
            </Reveal>

            <div className="divide-y divide-primary-foreground/10">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 100} className="py-6">
                  <p className="text-sm font-semibold mb-1.5">{b.title}</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/55">
                    {b.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — 2 cols: CTA panel */}
          <Reveal className="md:col-span-2" delay={150} direction="none">
            <div className="bg-cx-walnut p-10 md:p-12 flex flex-col justify-between h-full min-h-[420px]">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-8 block">
                  Inicia tu proyecto
                </span>
                <h3 className="text-2xl font-semibold text-primary-foreground leading-snug mb-4">
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70 mb-10">
                  Cuéntanos el espacio, la cantidad de piezas y tus plazos. Te respondemos con una
                  cotización en menos de 24 horas.
                </p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-6">
                  Te respondemos en menos de 24 horas.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-primary-foreground text-cx-walnut text-xs uppercase tracking-widest text-center font-semibold hover:opacity-90 active:scale-95 transition-[opacity,transform] duration-300"
                >
                  Consultar mi proyecto
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
