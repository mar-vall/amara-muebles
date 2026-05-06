import React from 'react';
import { Button } from '../atoms/Button';
import { Menu } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data/mockData';

export const TopNavBar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        <div className="text-2xl font-light tracking-tighter text-foreground cursor-pointer">
          Amara Muebles
        </div>
        <nav className="hidden md:flex gap-8 items-center uppercase tracking-widest text-xs font-medium">
          <a className="text-foreground border-b border-foreground pb-1 transition-all duration-500 ease-in-out hover:opacity-70 cursor-pointer active:scale-95">
            Muebles
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-all duration-500 ease-in-out hover:opacity-70 cursor-pointer active:scale-95">
            Sobre Nosotros
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-all duration-500 ease-in-out hover:opacity-70 cursor-pointer active:scale-95">
            Contactanos
          </a>
        </nav>
        <Button
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustar%C3%ADa%20visitar%20el%20showroom`}
          className="hidden md:flex"
        >
          Visitar Showroom
        </Button>
        <button className="md:hidden text-foreground p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
