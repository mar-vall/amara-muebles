import React from 'react';
import { Checkbox } from '../atoms/Checkbox';

export interface FilterOption {
  label: string;
  count?: number;
  checked?: boolean;
}

export interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  onToggle?: (label: string) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({ title, options, onToggle }) => {
  return (
    <div>
      <h3 className="font-semibold text-xs text-foreground mb-4 uppercase tracking-widest border-b border-border pb-2">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {options.map((option) => (
          <li key={option.label}>
            <Checkbox
              label={`${option.label}${option.count !== undefined ? ` (${option.count})` : ''}`}
              checked={option.checked ?? false}
              onChange={() => onToggle?.(option.label)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
