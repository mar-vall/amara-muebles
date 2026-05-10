import { shopProducts } from '../../data/products';
import { Reveal } from '../atoms/Reveal';
import { ShopItem } from '../molecules/ShopItem';

export function ShopGrid() {
  return (
    <section id="muebles" className="py-24 bg-cx-spring-wood scroll-mt-20">
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

        {/*
          Desktop layout — 4-column base grid with editorial variation:
            index 0 → wide (col-span-2, landscape 4/3)
            index 1 → tall (col-span-1, portrait 3/4)
            index 2 → tall (col-span-1, portrait 3/4)
            index 3 → wide (col-span-2, landscape 4/3)
          This mirrors a row-2 symmetry: wide | [tall tall] / [tall tall] | wide
          On mobile all cards are single-column, variant only affects aspect ratio.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {shopProducts.map((product, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <Reveal
                key={product.id}
                delay={i * 90}
                className={isWide ? 'lg:col-span-2' : 'lg:col-span-1'}
              >
                <ShopItem product={product} variant={isWide ? 'wide' : 'tall'} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
