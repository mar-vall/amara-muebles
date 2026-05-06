import React from 'react';
import { Button } from '../atoms/Button';
import { CatalogProduct, getWhatsAppLink } from '../../data/mockData';
import { MessageCircle } from 'lucide-react';

export const CatalogProductCard: React.FC<{ product: CatalogProduct }> = ({ product }) => {
  return (
    <div className="group flex flex-col">
      <div className="relative w-full aspect-[4/5] bg-muted mb-4 overflow-hidden rounded">
        <img
          alt={product.imageAlt}
          src={product.image}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-background text-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Nuevo
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
        {/* Quick Actions Overlay */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 px-4">
          <Button
            href={getWhatsAppLink(product.name)}
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
        <span className="text-base text-foreground font-medium">{product.price}</span>
      </div>
    </div>
  );
};
