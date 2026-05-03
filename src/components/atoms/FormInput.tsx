interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, id, ...props }: FormInputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-xs uppercase text-primary mb-2 tracking-wider"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-cx-walnut transition-colors text-sm text-foreground placeholder:text-muted-foreground"
        {...props}
      />
    </div>
  );
}
