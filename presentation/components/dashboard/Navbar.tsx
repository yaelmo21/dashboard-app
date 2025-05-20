'use client';
import React from 'react';
import HeaderList from './HeaderList';
import ListNavigation from './ListNavigation';
import { motion } from 'framer-motion';
import {
  fistMenuItems,
  secondMenuItems,
} from '@/presentation/navigation/navbarItems';
import Divider from '../ui/Divider';

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
      <Divider />
      <ListNavigation items={secondMenuItems} />
    </motion.aside>
  );
};

export default Navbar;
