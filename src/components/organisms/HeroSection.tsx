import { Button } from '../atoms/Button';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/Hero.png)',
          animation: `heroScale 1.4s ${EASE} both`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent z-10" />

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-xl">
          <span
            className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-6 block"
            style={{ animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-1) both` }}
          >
            Colección Amara
          </span>
          <h1
            className="font-black text-primary-foreground mb-4"
            style={{
              fontSize: 'clamp(36px, 6vw, 60px)',
              lineHeight: 1.1,
              animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-2) both`,
            }}
          >
            El arte en tu hogar.
          </h1>
          <p
            className="text-base text-primary-foreground/80 mb-10 leading-relaxed max-w-md"
            style={{ animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-3) both` }}
          >
            Piezas únicas talladas en roble, nogal y teca por maestros artesanos bolivianos.
            Diseño que respeta la naturaleza y transforma cada espacio.
          </p>
          <div
            style={{ animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-4) both` }}
          >
            <Button
              variant="primary"
              className="px-10 py-4"
              onClick={() => document.getElementById('muebles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Colección
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
