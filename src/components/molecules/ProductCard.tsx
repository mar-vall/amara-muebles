import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

interface ProductCardProps {
  product: Product;
  /** When true, uses a compact square aspect ratio — used for supporting cards alongside a hero */
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className={cn(
        'mb-5 overflow-hidden relative',
        compact ? 'aspect-square' : 'aspect-[4/5]',
        product.placeholderColor,
      )}>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            srcSet={[
              product.imageUrl.replace(/w=\d+/, 'w=400') + ' 400w',
              product.imageUrl.replace(/w=\d+/, 'w=800') + ' 800w',
              product.imageUrl.replace(/w=\d+/, 'w=1200') + ' 1200w',
            ].join(', ')}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full" />
        )}

        {/* Hover overlay — fades in, text slides up from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 pointer-events-none">
          <p className="text-white text-xs uppercase tracking-widest">{product.name}</p>
          <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Ver más →</p>
        </div>
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
        className="mt-auto block w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
