import React from 'react';
import { FilterGroup } from '../molecules/FilterGroup';
import { filterCategories } from '../../data/mockData';

export const SidebarFilters: React.FC = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-32 space-y-10">
        {filterCategories.map((category, index) => (
          <FilterGroup key={index} title={category.title} options={category.options} />
        ))}
      </div>
    </aside>
  );
};
