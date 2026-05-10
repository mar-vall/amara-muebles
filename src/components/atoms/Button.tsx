import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'outline' | 'dark' | 'ghost' | 'border';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-cx-walnut text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:bg-primary transition-all duration-500 active:scale-95',
  outline:
    'border border-primary-foreground text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:bg-primary-foreground hover:text-foreground transition-all duration-500 active:scale-95',
  dark:
    'bg-foreground text-primary-foreground text-xs uppercase tracking-widest hover:opacity-80 transition-all active:scale-95',
  ghost:
    'bg-card text-card-foreground text-xs uppercase tracking-widest shadow-sm hover:opacity-80 transition-opacity',
  border:
    'border border-cx-rolling-stone text-xs uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-all duration-300',
};

export function Button({ variant = 'primary', className, href, children, ...props }: ButtonProps & { href?: string }) {
  const classes = cn(variantClasses[variant], className, 'inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]');
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
