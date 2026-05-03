import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

const legalLinks = [
  { label: 'Privacidad', href: '#' },
  { label: 'Términos', href: '#' },
];

const exploreLinks = [
  { label: 'Sustentabilidad', href: '#' },
  { label: 'Envíos', href: '#' },
];

const socialLinks = [
  { icon: 'photo_camera', href: '#', label: 'Instagram' },
  { icon: 'language',     href: '#', label: 'Facebook' },
  { icon: 'mail',         href: '#', label: 'Correo electrónico' },
];

export function Footer() {
  return (
    <footer className="w-full py-16 bg-cx-wild-sand border-t border-border">
      <Reveal direction="none" className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="text-lg font-semibold text-foreground mb-4">Amara Muebles</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Artesanía en maderas nobles de Bolivia. Transformamos espacios en hogares atemporales.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase text-foreground mb-2 tracking-widest font-semibold">
            Legal
          </h4>
          {legalLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase text-foreground mb-2 tracking-widest font-semibold">
            Explora
          </h4>
          {exploreLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase text-foreground mb-2 tracking-widest font-semibold">
            Síguenos
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a
                key={item.icon}
                href={item.href}
                aria-label={item.label}
                className="text-muted-foreground hover:text-cx-walnut transition-colors"
              >
                <Icon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Amara Muebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
