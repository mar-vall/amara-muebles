import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

interface ShopItemProps {
  product: Product;
}

export function ShopItem({ product }: ShopItemProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="flex flex-col">
      <div className="bg-card aspect-square mb-4 p-8 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
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
        <p className="text-xs text-cx-walnut uppercase tracking-widest">{product.name}</p>
        <p className="text-foreground font-semibold mt-0.5">${product.price.toLocaleString()}</p>
        <p className="text-muted-foreground text-xs mt-1">{product.material}</p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-all duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
