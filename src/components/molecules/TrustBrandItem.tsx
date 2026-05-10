interface TrustBrandItemProps {
  icon: string;
  name: string;
}

export function TrustBrandItem({ icon, name }: TrustBrandItemProps) {
  return (
    <img src={icon} alt={name} className="h-28 w-auto" style={{ mixBlendMode: 'multiply' }} />
  );
}
