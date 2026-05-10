import { cn } from '../../lib/cn';

interface IconProps {
  name: string;
  filled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

const sizeClasses: Record<NonNullable<IconProps['size']>, string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
};

export function Icon({ name, filled = false, size = 'md', className, 'aria-hidden': ariaHidden }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined', sizeClasses[size], className)}
      aria-hidden={ariaHidden}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
