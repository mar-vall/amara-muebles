import { featuredProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ProductCard } from '../molecules/ProductCard';

export function FeaturedProducts() {
  return (
    <section id="novedades" className="py-24 bg-background scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block">
              Colección
            </span>
            <h2 className="text-[32px] leading-[42px] font-semibold text-foreground">
              Nuestros muebles
            </h2>
          </div>
          <a
            href="#muebles"
            className="text-cx-walnut text-xs uppercase border-b border-cx-walnut pb-1 hover:opacity-70 transition-opacity tracking-widest"
          >
            Ver Todo
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
