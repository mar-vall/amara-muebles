import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

const showrooms = [
  {
    city: 'Santa Cruz de la Sierra',
    address: 'Av. San Martín 450, Equipetrol Norte',
    hours: 'Lun–Vie 9:00–19:00 · Sáb 10:00–15:00',
    phone: '+591 3 333 4455',
    mapsUrl:
      'https://maps.google.com/?q=Av.+San+Martín+450,+Equipetrol+Norte,+Santa+Cruz+de+la+Sierra,+Bolivia',
  },
  {
    city: 'La Paz',
    address: 'Calle Colón 780, Sopocachi',
    hours: 'Lun–Vie 9:00–18:30 · Sáb 10:00–14:00',
    phone: '+591 2 211 6677',
    mapsUrl:
      'https://maps.google.com/?q=Calle+Colón+780,+Sopocachi,+La+Paz,+Bolivia',
  },
];

const socialLinks = [
  { icon: 'photo_camera', href: '#', label: 'Instagram' },
  { icon: 'language',     href: '#', label: 'Facebook' },
  { icon: 'mail',         href: '#', label: 'Correo electrónico' },
];

export function Footer() {
  return (
    <footer className="w-full bg-cx-wild-sand border-t border-border">

      {/* Craftsman closing line */}
      <Reveal direction="none">
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12 border-b border-border">
          <p className="font-semibold text-foreground italic leading-snug mb-3"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
            "Cada veta cuenta una historia."
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-cx-rolling-stone">
            Julio Mamani · Maestro tallador · Amara Muebles · Santa Cruz de la Sierra
          </p>
        </div>
      </Reveal>

      {/* Main grid */}
      <Reveal direction="none" className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand + social */}
        <div>
          <div className="text-lg font-semibold text-foreground mb-4">Amara Muebles</div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Artesanía en maderas nobles de Bolivia.<br />
            Hecho en Bolivia. Cada pieza tarda entre tres y seis semanas.
          </p>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground mb-4 font-semibold">
              Síguenos
            </p>
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
        </div>

        {/* Showrooms */}
        {showrooms.map((s) => (
          <div key={s.city}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground mb-5 font-semibold">
              {s.city}
            </p>
            <div className="space-y-2 mb-5">
              <p className="text-sm text-muted-foreground">{s.address}</p>
              <p className="text-sm text-muted-foreground">{s.hours}</p>
              <a
                href={`tel:${s.phone.replace(/\s/g, '')}`}
                className="text-sm text-muted-foreground hover:text-cx-walnut transition-colors block"
              >
                {s.phone}
              </a>
            </div>
            <a
              href={s.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cx-walnut hover:opacity-70 transition-opacity"
            >
              <Icon name="location_on" size="sm" />
              Ver en Google Maps
            </a>
          </div>
        ))}

      </Reveal>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto px-6 pb-8 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Amara Muebles. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}
