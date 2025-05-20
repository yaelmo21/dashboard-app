import React, { FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const SidebarLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-row h-full w-screen'>
      <Navbar />
      <MobileNavbar />
      <div className='bg-secondary w-full pt-[30px] md:pt-0 md:pl-[70px] lg:pl-[260px] min-h-full overflow-y-auto'>
        <main className='py-10 min-h-full '>{children}</main>
      </div>
    </div>
  );
};

export default SidebarLayout;
