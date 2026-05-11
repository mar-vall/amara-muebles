import { featuredProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ProductCard } from '../molecules/ProductCard';
import { ProductImageSlideshow } from '../atoms/ProductImageSlideshow';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

export function FeaturedProducts() {
  const [hero, ...supporting] = featuredProducts;
  const heroWaUrl = productWhatsappUrl(hero.name);

  return (
    <section id="novedades" className="py-24 bg-background scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block">
              Lo Más Nuevo
            </span>
            <h2 className="text-[32px] leading-[42px] font-semibold text-foreground">
              Nuestras Novedades
            </h2>
          </div>
          <a
            href="#muebles"
            className="text-cx-walnut text-xs uppercase border-b border-cx-walnut pb-1 hover:opacity-70 transition-opacity tracking-widest"
          >
            Ver Todo
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Hero product — 2-col span, landscape aspect */}
          <Reveal className="md:col-span-2">
            <div className="group flex flex-col">
              <div className={cn('w-full aspect-[4/3] mb-5 overflow-hidden relative bg-cx-pampas')}>
                <ProductImageSlideshow images={hero.images} alt={hero.name} />

                {/* Hover overlay — fades in, text slides up from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 pointer-events-none">
                  <p className="text-white text-sm uppercase tracking-widest">{hero.name}</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest mt-1">Ver más →</p>
                </div>

                <div className="absolute top-6 left-6">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-background px-3 py-1.5 font-medium">
                    Destacado
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-semibold text-foreground mb-1">{hero.name}</h3>
              <p className="text-primary text-xs uppercase tracking-widest">{hero.material}</p>
              <p className="text-cx-rolling-stone text-sm mt-1 mb-5">Bs. {hero.price.toLocaleString()}</p>

              {/* CTA — always visible, primary tier */}
              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Supporting products — stacked in col 3 */}
          <div className="flex flex-col gap-8">
            {supporting.map((product, i) => (
              /* Stagger step: 110ms per item (design-system var not applicable here — delay is JS-computed) */
              <Reveal key={product.id} delay={(i + 1) * 110}>
                <ProductCard product={product} compact />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
