import React from 'react';
import { TrustBadge } from '../molecules/TrustBadge';
import { trustBadges } from '../../data/mockData';

export const TrustSection: React.FC = () => {
  return (
    <section className="mt-20 border-t border-border pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-4">
      {trustBadges.map((badge, index) => (
        <TrustBadge
          key={index}
          iconName={badge.icon}
          title={badge.title}
          description={badge.description}
        />
      ))}
    </section>
  );
};
