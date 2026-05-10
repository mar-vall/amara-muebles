import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'outline' | 'dark' | 'ghost' | 'border';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-cx-walnut text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:bg-primary transition-colors duration-300 active:scale-95',
  outline:
    'border border-primary-foreground text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:bg-primary-foreground hover:text-foreground transition-colors duration-300 active:scale-95',
  dark:
    'bg-foreground text-primary-foreground text-xs uppercase tracking-widest hover:opacity-80 transition-colors duration-300 active:scale-95',
  ghost:
    'bg-card text-card-foreground text-xs uppercase tracking-widest shadow-sm hover:opacity-80 transition-opacity',
  border:
    'border border-cx-rolling-stone text-xs uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-[background-color,color] duration-300',
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}
