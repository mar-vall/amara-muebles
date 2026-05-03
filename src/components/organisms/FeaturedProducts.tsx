import { featuredProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ProductCard } from '../molecules/ProductCard';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

export function FeaturedProducts() {
  const [hero, ...supporting] = featuredProducts;
  const heroWaUrl = productWhatsappUrl(hero.name);

  return (
    <section className="py-24 bg-background">
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
            href="#"
            className="text-cx-walnut text-xs uppercase border-b border-cx-walnut pb-1 hover:opacity-70 transition-opacity tracking-widest"
          >
            Ver Todo
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Hero product — 2-col span, landscape aspect */}
          <Reveal className="md:col-span-2">
            <div className="group cursor-pointer">
              <div className={cn('w-full aspect-[4/3] mb-6 overflow-hidden relative', hero.placeholderColor)}>
                {hero.imageUrl ? (
                  <img
                    src={hero.imageUrl}
                    alt={hero.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="absolute top-6 left-6">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-background px-3 py-1.5 font-medium">
                    Destacado
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={heroWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-card text-card-foreground px-6 py-3 text-xs uppercase tracking-widest shadow-sm text-center hover:bg-cx-walnut hover:text-primary-foreground transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-1">{hero.name}</h3>
              <p className="text-primary text-xs uppercase tracking-widest">{hero.material}</p>
              <p className="text-cx-rolling-stone text-sm mt-1">${hero.price.toLocaleString()}</p>
            </div>
          </Reveal>

          {/* Supporting products — stacked in col 3 */}
          <div className="flex flex-col gap-8">
            {supporting.map((product, i) => (
              <Reveal key={product.id} delay={(i + 1) * 110}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
