import { useState, useEffect } from 'react';

interface ProductImageSlideshowProps {
  images: string[];
  alt: string;
}

const INTERVAL_MS = 3500;

export function ProductImageSlideshow({ images, alt }: ProductImageSlideshowProps) {
  const [activeIdx, setActiveIdx] = useState(images.length > 1 ? 1 : 0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === activeIdx ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
