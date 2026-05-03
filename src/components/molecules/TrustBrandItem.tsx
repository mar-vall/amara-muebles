import { Icon } from '../atoms/Icon';

interface TrustBrandItemProps {
  icon: string;
  name: string;
}

export function TrustBrandItem({ icon, name }: TrustBrandItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Icon name={icon} size="xl" />
      <span className="font-bold text-xl">{name}</span>
    </div>
  );
}
