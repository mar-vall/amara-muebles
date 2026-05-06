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
}

export const FilterGroup: React.FC<FilterGroupProps> = ({ title, options }) => {
  return (
    <div>
      <h3 className="font-semibold text-xs text-foreground mb-4 uppercase tracking-widest border-b border-border pb-2">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {options.map((option, index) => (
          <li key={index}>
            <Checkbox
              label={`${option.label}${option.count !== undefined ? ` (${option.count})` : ''}`}
              defaultChecked={option.checked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
