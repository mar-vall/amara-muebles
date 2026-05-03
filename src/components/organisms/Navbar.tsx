import { useState } from 'react';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../atoms/NavLink';

const navLinks = [
  { label: 'Muebles', href: '#', active: true },
  { label: 'Sobre Nosotros', href: '#', active: false },
  { label: 'Contáctanos', href: '#', active: false },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-card border-b border-border"
      style={{ animation: 'navSlideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both' }}
    >
      {/* Main bar */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        <a href="#" className="flex items-center active:scale-95 transition-transform">
          <img src="/logo.svg" alt="Amara Muebles" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} active={link.active}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            aria-label="Buscar"
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            <Icon name="search" />
          </button>
          {/* Desktop CTA */}
          <button type="button" className="hidden md:block bg-muted text-cx-walnut px-6 py-2.5 uppercase tracking-widest text-xs font-medium transition-all duration-500 hover:opacity-70 active:scale-95">
            Ver Catálogo
          </button>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground hover:opacity-70 transition-opacity p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden bg-card border-t border-border"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-6px)',
          maxHeight: mobileOpen ? '400px' : '0px',
          transitionProperty: 'opacity, transform, max-height',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="flex flex-col px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              active={link.active}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button className="bg-muted text-cx-walnut py-3 uppercase tracking-widest text-xs font-medium w-full hover:opacity-70 transition-opacity">
            Ver Catálogo
          </button>
        </div>
      </div>
    </nav>
  );
}
