import React from 'react';
import { promoData, WHATSAPP_NUMBER } from '../../data/mockData';
import { Button } from '../atoms/Button';
import { MessageCircle } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="mt-24 mb-16 relative w-full h-[500px] bg-muted rounded overflow-hidden flex items-center">
      <img
        alt={promoData.title}
        src=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
      />
      <div className="relative z-10 p-12 md:p-24 max-w-2xl">
        <h2 className="text-[40px] md:text-[56px] leading-tight font-bold text-foreground mb-4">
          {promoData.title}
        </h2>
        <p className="text-lg text-foreground/90 mb-8 max-w-lg">
          {promoData.description}
        </p>
        <Button
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(promoData.title)}`}
          className="gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar Oferta
        </Button>
      </div>
    </section>
  );
};
