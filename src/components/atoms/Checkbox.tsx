import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        className={`form-checkbox h-4 w-4 text-cx-walnut rounded-sm border-border focus:ring-ring focus:ring-offset-background ${className}`}
        {...props}
      />
      <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
        {label}
      </span>
    </label>
  );
};
