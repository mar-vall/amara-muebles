import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { MessageCircle } from 'lucide-react';
import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';

export const CatalogProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const waUrl = productWhatsappUrl(product.name);
  const src = product.images[1] ?? product.images[0];

  return (
    <div className="group flex flex-col">
      {/* Image — click navigates to detail; WhatsApp button stops propagation */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`Ver detalle de ${product.name}`}
        onClick={() => navigate(`/producto/${product.id}`)}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/producto/${product.id}`)}
        className="relative w-full aspect-[4/3] bg-muted mb-4 overflow-hidden cursor-pointer"
      >
        <img
          alt={product.name}
          src={src}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            href={waUrl}
            className="w-full bg-background text-foreground hover:bg-accent hover:text-accent-foreground py-3 gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.material}</p>
        </div>
        <span className="text-base text-foreground font-medium">
          Bs. {product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
