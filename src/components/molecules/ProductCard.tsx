import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className={cn('aspect-[4/5] mb-5 overflow-hidden relative', product.placeholderColor)}>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
        )}
      </div>

      {/* Info */}
      <h3 className="text-lg font-medium text-foreground mb-1">{product.name}</h3>
      <p className="text-primary text-xs uppercase tracking-widest">{product.material}</p>
      <p className="text-cx-rolling-stone text-sm mt-1 mb-5">${product.price.toLocaleString()}</p>

      {/* CTA — always visible, primary tier */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-all duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
