import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

/** 'wide' = landscape 4/3, spans 2 grid cols on desktop. 'tall' = portrait 3/4, 1 grid col. */
type ShopItemVariant = 'wide' | 'tall';

interface ShopItemProps {
  product: Product;
  variant?: ShopItemVariant;
}

export function ShopItem({ product, variant = 'tall' }: ShopItemProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="flex flex-col">
      <div className={cn(
        'bg-card mb-4 flex items-center justify-center transition-[box-shadow,transform] duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden',
        variant === 'wide' ? 'aspect-[4/3] p-6' : 'aspect-[3/4] p-8',
      )}>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            srcSet={[
              product.imageUrl.replace(/w=\d+/, 'w=400') + ' 400w',
              product.imageUrl.replace(/w=\d+/, 'w=800') + ' 800w',
              product.imageUrl.replace(/w=\d+/, 'w=1200') + ' 1200w',
            ].join(', ')}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className={cn('w-full h-full', product.placeholderColor)} />
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-cx-walnut uppercase tracking-widest">{product.name}</h3>
        <p className="text-foreground font-semibold mt-0.5">${product.price.toLocaleString()}</p>
        <p className="text-muted-foreground text-xs mt-1">{product.material}</p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
