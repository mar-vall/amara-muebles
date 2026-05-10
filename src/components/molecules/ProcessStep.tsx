import { Icon } from '../atoms/Icon';

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

export function ProcessStep({ icon, title, description }: ProcessStepProps) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 bg-muted mx-auto mb-8 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <Icon
          name={icon}
          size="lg"
          className="text-foreground group-hover:text-primary-foreground transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
