import { cn } from '../../lib/cn';

interface NavLinkProps {
  href?: string;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function NavLink({ href = '#', active = false, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'uppercase tracking-widest text-xs font-medium transition-colors duration-300 ease-in-out',
        active
          ? 'text-foreground border-b border-foreground pb-1'
          : 'text-muted-foreground hover:text-foreground',
        className,
      )}
    >
      {children}
    </a>
  );
}
