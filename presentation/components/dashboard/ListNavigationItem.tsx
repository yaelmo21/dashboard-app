import React, { FC } from 'react';
import Link from 'next/link';
import { NavbarItem } from '@/infraestructure/interfaces/NavbarItem.inteface';
import clsx from 'clsx';

interface Props extends NavbarItem {
  automaticHiddeTitle?: boolean;
}

const ListNavigationItem: FC<Props> = ({
  name,
  icon: Icon,
  href,
  automaticHiddeTitle = true,
}) => {
  return (
    <li>
      <Link
        className='px-8 py-5 flex items-center gap-x-3 text-sm leading-6 text-gray-500 hover:text-gray-200 hover:bg-gray-600  transition-all duration-200 ease-in-out cursor-pointer'
        href={href}
      >
        <Icon
          className='h-4 w-4'
          aria-hidden='true'
        />
        <span
          className={`text-sm font-semibold leading-6 ${clsx(
            automaticHiddeTitle && 'hidden lg:block',
          )}`}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default ListNavigationItem;
