import { shopProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ShopItem } from '../molecules/ShopItem';

export function ShopGrid() {
  return (
    <section className="py-24 bg-cx-spring-wood">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-[32px] leading-[42px] font-semibold text-foreground mb-4">
            Piezas Atemporales
          </h2>
          <p className="text-cx-rolling-stone max-w-xl mx-auto text-base leading-relaxed">
            Cada mueble es diseñado para resistir el paso del tiempo, combinando técnicas
            ancestrales con estética contemporánea.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {shopProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ShopItem product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
