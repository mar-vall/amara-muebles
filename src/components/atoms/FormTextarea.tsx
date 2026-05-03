interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function FormTextarea({ label, id, ...props }: FormTextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label
        htmlFor={textareaId}
        className="block text-xs uppercase text-primary mb-2 tracking-wider"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-cx-walnut transition-colors text-sm text-foreground placeholder:text-muted-foreground resize-none"
        {...props}
      />
    </div>
  );
}
