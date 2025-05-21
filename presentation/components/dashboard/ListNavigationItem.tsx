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
        className='px-8 py-5 flex items-center gap-x-3 text-sm leading-6 group relative text-gray-500 hover:text-gray-200 hover:bg-[#9FA2B4]/20 transition-all duration-200 ease-in-out cursor-pointer'
        href={href}
      >
        <div className='absolute left-0 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity' />
        <Icon
          className='h-4 w-4'
          aria-hidden='true'
        />
        <span
          className={`text-sm font-normal leading-6 ${clsx(
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
