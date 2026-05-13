import React from 'react';
import { FilterGroup } from '../molecules/FilterGroup';

const filterCategories = [
  {
    title: 'Categorías',
    options: [
      { label: 'Sofás',     count: 3,  checked: false },
      { label: 'Comedores', count: 4,  checked: false },
      { label: 'Mesas',     count: 3,  checked: false },
      { label: 'Sillas',    count: 3,  checked: false },
      { label: 'Sillones',  count: 3,  checked: false },
    ],
  },
];

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
