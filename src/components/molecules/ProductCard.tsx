import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="group cursor-pointer">
      <div className={cn('aspect-[4/5] mb-6 overflow-hidden relative', product.placeholderColor)}>
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
        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-card text-card-foreground px-6 py-3 text-xs uppercase tracking-widest shadow-sm text-center hover:bg-cx-walnut hover:text-primary-foreground transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
      <h3 className="text-lg font-medium text-foreground mb-1">{product.name}</h3>
      <p className="text-primary text-xs uppercase tracking-widest">{product.material}</p>
      <p className="text-cx-rolling-stone text-sm mt-1">${product.price.toLocaleString()}</p>
    </div>
  );
}
