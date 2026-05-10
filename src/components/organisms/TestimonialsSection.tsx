import { Reveal } from '../atoms/Reveal';
import { StarRating } from '../atoms/StarRating';

const testimonials = [
  {
    quote:
      'La mesa de nogal superó mis expectativas. Se siente la calidad en cada detalle, es el corazón de mi casa.',
    author: 'Elena Martínez',
  },
  {
    quote:
      'Un servicio impecable y una pieza de diseño que se siente atemporal. Volveré a comprar sin duda.',
    author: 'Carlos Ruiz',
  },
  {
    quote:
      'Buscaba algo único y artesanal. Amara Muebles captó exactamente lo que necesitaba para mi estudio.',
    author: 'Sofía Delgado',
  },
];

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Featured testimonial — full width, editorial weight */}
        <Reveal>
          <div className="border-t border-border pt-12 pb-16 mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-cx-rolling-stone mb-10 block">
              Clientes
            </h2>
            <p
              className="font-semibold text-foreground leading-[1.2] mb-8 max-w-4xl"
              style={{ fontSize: 'clamp(22px, 3.2vw, 42px)' }}
            >
              "{featured.quote}"
            </p>
            <div className="flex items-center gap-5">
              <StarRating />
              <span className="text-xs uppercase tracking-[0.2em] text-cx-rolling-stone">
                {featured.author}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Supporting testimonials — compact, 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {rest.map((t, i) => (
            <Reveal key={t.author} delay={(i + 1) * 110}>
              <div className="border-t border-border pt-6">
                <StarRating className="mb-4" />
                <p className="text-sm italic leading-relaxed text-foreground/75 mb-5">
                  "{t.quote}"
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-cx-rolling-stone">
                  {t.author}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
