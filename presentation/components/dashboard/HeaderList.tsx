import React, { FC } from 'react';
import Logo from '@/assets/images/logo.svg';
import clsx from 'clsx';

interface HeaderListProps {
  automaticHiddeTitle?: boolean;
}

const HeaderList: FC<HeaderListProps> = ({ automaticHiddeTitle = true }) => {
  return (
    <div className='flex lg:px-8 lg:py-8  gap-4 h-28 items-center justify-center lg:justify-start '>
      <div>
        <Logo className='h-8 w-8' />
      </div>
      <h2
        className={`text-[19px] font-semibold  text-muted ${clsx(
          automaticHiddeTitle && 'hidden lg:block',
        )} `}
      >
        Dashboard Kit
      </h2>
    </div>
  );
};

export default HeaderList;
