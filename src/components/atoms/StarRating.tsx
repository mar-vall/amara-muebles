import { cn } from '../../lib/cn';

interface StarRatingProps {
  count?: number;
  className?: string;
}

export function StarRating({ count = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn('flex text-cx-walnut', className)}
      aria-label={`${count} de 5 estrellas`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
        >
          star
        </span>
      ))}
    </div>
  );
}
