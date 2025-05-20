import React, { FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const SidebarLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-row h-full'>
      <Navbar />
      <MobileNavbar />
      <div>
        <main className='py-10'>
          <div className='px-4 sm:px-6 lg:px-8 pt-[30px] sm:pt-0 md:pl-[80px] lg:pl-[260px]'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
