import React from 'react';
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const HeaderList = () => {
  return (
    <div className='flex lg:px-8 lg:py-8  gap-4 h-28 items-center justify-center lg:justify-start '>
      <Image
        src={Logo}
        alt='Logo Dashboard kit'
        className='w-8 h-8'
      />
      <h2 className='text-[19px] hidden lg:block font-bold text-muted '>
        Dashboard Kit
      </h2>
    </div>
  );
};

export default HeaderList;
