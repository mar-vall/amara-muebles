import { useState, useEffect } from 'react';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../atoms/NavLink';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Muebles',        href: '#muebles',         sections: ['novedades', 'muebles'] },
  { label: 'Sobre Nosotros', href: '#nuestra-historia', sections: ['nuestra-historia']     },
  { label: 'Contáctanos',    href: '#contacto',         sections: ['contacto']             },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#muebles');
  const navigate = useNavigate();
  const location = useLocation();
  const isCatalog = location.pathname === '/catalog';

  useEffect(() => {
    // Map each section id → which nav href it belongs to
    const sectionMap: Record<string, string> = {};
    navLinks.forEach(link => {
      link.sections.forEach(id => { sectionMap[id] = link.href; });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the intersecting entry closest to the top of the viewport
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const mapped = sectionMap[visible[0].target.id];
          if (mapped) setActiveHref(mapped);
        }
      },
      // Active zone: below the 80px navbar, top 55% of viewport
      { rootMargin: '-80px 0px -45% 0px', threshold: 0 },
    );

    Object.keys(sectionMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            <NavLink
              key={link.label}
              href={link.href}
              active={activeHref === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => navigate('/catalog')}
            className={`hidden md:block px-6 py-2.5 uppercase tracking-widest text-xs font-medium transition-all duration-500 active:scale-95 ${
              isCatalog
                ? 'bg-[var(--cx-color-walnut)] text-white'
                : 'bg-muted text-cx-walnut hover:opacity-70'
            }`}
          >
            Ver Catálogo
          </button>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile menu — absolutely positioned so it never affects nav height */}
      <div
        className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-card border-t border-border transition-[opacity,transform] duration-300 ease-out"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          visibility: mobileOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              active={activeHref === link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => {
              navigate('/catalog');
              setMobileOpen(false);
            }}
            className={`py-3 uppercase tracking-widest text-xs font-medium w-full transition-opacity ${
              isCatalog
                ? 'bg-[var(--cx-color-walnut)] text-white'
                : 'bg-muted text-cx-walnut hover:opacity-70'
            }`}
          >
            Ver Catálogo
          </button>
        </div>
      </div>
    </nav>
  );
}
