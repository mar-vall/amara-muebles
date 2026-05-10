import { useState } from 'react';
import { Reveal } from '../atoms/Reveal';
import { FormTextarea } from '../atoms/FormTextarea';
import { contactWhatsappUrl } from '../../lib/whatsapp';

export function ContactSection() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Por favor escribe tu mensaje antes de continuar.');
      return;
    }
    setError('');
    window.open(contactWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="relative py-24 flex items-center justify-center scroll-mt-20 overflow-hidden">
      {/* Workshop background */}
      <img
        src="https://images.unsplash.com/photo-1547609434-b732edfee020?w=1600&q=85&fit=crop&auto=format"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 w-full max-w-xl mx-auto px-6">
        <Reveal direction="none">
          <div className="bg-card p-12 shadow-2xl">
            <h2 className="text-[32px] leading-[42px] font-semibold text-foreground mb-3">
              ¿Tienes algo en mente?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Escríbenos y te respondemos por WhatsApp. Sin formularios, sin esperas.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <FormTextarea
                  label="Tu mensaje"
                  placeholder="Cuéntanos qué buscas, qué espacio tienes, o qué pieza te interesa..."
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (error) setError('');
                  }}
                />
                {error && (
                  <p className="mt-2 text-xs text-destructive" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-cx-walnut text-primary-foreground py-4 text-xs uppercase tracking-widest hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>

  );
}
