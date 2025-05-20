'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import { FaBell } from 'react-icons/fa6';
import AsideMenuMobile from './AsideMenuMobile';
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const toogleSidebar = () => setOpen(!open);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='fixed top-0 left-0 right-0 z-50 bg-tertiary md:hidden h-[59px] shadow-lg flex items-center justify-between px-4 gap-4 '
      >
        <button
          onClick={toogleSidebar}
          className='cursor-pointer'
        >
          <Image
            src={Logo}
            alt='Logo Dashboard kit'
            className='w-8 h-8'
          />
        </button>

        <button>
          <FaBell
            className='h-4 w-4 text-gray-500 hover:text-gray-200 transition-all duration-200 ease-in-out'
            aria-hidden='true'
          />
        </button>
      </motion.nav>

      <AsideMenuMobile
        sidebarOpen={open}
        setSidebarOpen={setOpen}
      />
    </>
  );
};

export default MobileNavbar;
