import { shopProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ProductCard } from '../molecules/ProductCard';

export function ShopGrid() {
  return (
    <section id="muebles" className="py-24 bg-cx-spring-wood scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal className="text-center mb-16">
          <h2 className="text-[32px] leading-[42px] font-semibold text-foreground mb-4">
            Piezas Atemporales
          </h2>
          <p className="text-cx-rolling-stone max-w-xl mx-auto text-base leading-relaxed">
            Cada mueble es diseñado para resistir el paso del tiempo, con materiales de calidad y una artesanía que honra la tradición.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {shopProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
