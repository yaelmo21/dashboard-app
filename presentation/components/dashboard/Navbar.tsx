'use client';
import React from 'react';
import HeaderList from './HeaderList';
import ListNavigation from './ListNavigation';
import { motion } from 'framer-motion';
import {
  fistMenuItems,
  secondMenuItems,
} from '@/presentation/navigation/navbarItems';

const Navbar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className=' hidden md:flex md:w-[76px] lg:w-[255px] h-full bg-tertiary fixed inset-y-0 z-50 flex-col'
    >
      <HeaderList />
      <ListNavigation items={fistMenuItems} />
      <div
        aria-hidden='true'
        className='inset-0 flex items-center'
      >
        <div className='w-full border-t border-gray-700' />
      </div>
      <ListNavigation items={secondMenuItems} />
    </motion.aside>
  );
};

export default Navbar;
