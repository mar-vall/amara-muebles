export interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  /** Unsplash or local path. Empty string until real images are added. */
  imageUrl: string;
  /** Price in USD. */
  price: number;
  /** Which homepage section this product appears in. */
  section: 'featured' | 'shop';
  /** Tailwind class used as placeholder until real images are ready. */
  placeholderColor: string;
}

export const products: Product[] = [
  // ── Featured products — "Nuestras Novedades" (3) ─────────────────────────
  {
    id: 'sofa-bosque',
    name: 'Sofá Bosque',
    description:
      'Sofá de tres plazas con estructura de roble macizo y tapicería en lino natural crudo. Diseño de líneas bajas inspirado en la calidez del bosque.',
    material: 'Roble Macizo y Lino Natural',
    imageUrl: 'https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?w=1200&q=85&fit=crop&auto=format',
    price: 1850,
    section: 'featured',
    placeholderColor: 'bg-cx-pampas',
  },
  {
    id: 'mesa-terral',
    name: 'Mesa Comedor Terral',
    description:
      'Mesa de comedor extensible con tablero de nogal americano de veta continua y patas torneadas. Capacidad para 6 a 10 personas.',
    material: 'Nogal Americano',
    imageUrl: '../../public/Products/sillones/foto1.png',
    price: 1340,
    section: 'featured',
    placeholderColor: 'bg-cx-cararra',
  },
  {
    id: 'comoda-andina',
    name: 'Cómoda Andina',
    description:
      'Cómoda de cinco cajones en cedro boliviano tallado a mano. Herrajes de latón envejecido y acabado con aceite de tung.',
    material: 'Cedro Boliviano y Latón',
    imageUrl: 'https://images.unsplash.com/photo-1544691560-fc2053d97726?w=1200&q=85&fit=crop&auto=format',
    price: 975,
    section: 'featured',
    placeholderColor: 'bg-muted',
  },

  // ── Shop products — "Piezas Atemporales" (4) ─────────────────────────────
  {
    id: 'silla-ask',
    name: 'Silla Nórdica Ask',
    description:
      'Silla de comedor en roble macizo con asiento tapizado en cuero curtido natural. Ensamble tradicional mortaja y espiga.',
    material: 'Roble Macizo y Cuero Natural',
    imageUrl: 'https://images.unsplash.com/photo-1624345691006-e683ff409f3f?w=800&q=85&fit=crop&auto=format',
    price: 380,
    section: 'shop',
    placeholderColor: 'bg-cx-pampas',
  },
  {
    id: 'taburete-apex',
    name: 'Taburete Apex',
    description:
      'Taburete de bar de altura regulable en roble blanqueado con reposapiés de latón y asiento acolchado en cuero.',
    material: 'Roble Blanqueado y Latón',
    imageUrl: 'https://images.unsplash.com/photo-1634798245965-03669c757183?w=800&q=85&fit=crop&auto=format',
    price: 240,
    section: 'shop',
    placeholderColor: 'bg-cx-cararra',
  },
  {
    id: 'estante-horizon',
    name: 'Estante Horizon',
    description:
      'Estantería flotante modular en nogal negro con ensamble dovetail visible. Baldas ajustables y acabado al aceite.',
    material: 'Nogal Negro',
    imageUrl: 'https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?w=800&q=85&fit=crop&auto=format',
    price: 310,
    section: 'shop',
    placeholderColor: 'bg-muted',
  },
  {
    id: 'mesa-oria',
    name: 'Mesita de Noche Oria',
    description:
      'Mesita de noche de roble blanco con un cajón y bandeja inferior. Patas cónicas torneadas a mano, acabado natural mate.',
    material: 'Roble Blanco',
    imageUrl: 'https://images.unsplash.com/photo-1765766602624-861292c3bc8f?w=800&q=85&fit=crop&auto=format',
    price: 290,
    section: 'shop',
    placeholderColor: 'bg-cx-spring-wood',
  },
];

export const featuredProducts = products.filter((p) => p.section === 'featured');
export const shopProducts = products.filter((p) => p.section === 'shop');
