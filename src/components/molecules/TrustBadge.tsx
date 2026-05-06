import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface TrustBadgeProps {
  iconName: string;
  title: string;
  description: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ iconName, title, description }) => {
  // Dynamically resolve the icon component from lucide-react
  // Fallback to a generic icon if not found
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.CheckCircle;

  return (
    <div className="flex flex-col items-center">
      <Icon className="w-10 h-10 text-primary mb-4 stroke-[1.5]" />
      <h4 className="text-xl font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground max-w-xs text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};
