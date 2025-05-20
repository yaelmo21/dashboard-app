import { NavbarItem } from '@/infraestructure/interfaces/NavbarItem.inteface';
import React, { FC } from 'react';
import ListNavigationItem from './ListNavigationItem';

const ListNavigation: FC<{
  items: NavbarItem[];
  automaticHiddeTitle?: boolean;
}> = ({ items, automaticHiddeTitle }) => {
  return (
    <ul
      role='list'
      className='flex flex-col'
    >
      {items.map((item) => (
        <ListNavigationItem
          key={item.id}
          automaticHiddeTitle={automaticHiddeTitle}
          {...item}
        />
      ))}
    </ul>
  );
};

export default ListNavigation;
