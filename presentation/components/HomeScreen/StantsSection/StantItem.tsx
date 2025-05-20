'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Stant } from '@/infraestructure/interfaces/Stant.interface';

interface StantItemProps extends Stant {
  index?: number;
}

const StantItem: FC<StantItemProps> = ({ label, value, index }) => {
  if (!index && index !== 0) {
    return (
      <div className='group flex flex-col gap-3 items-center p-4 bg-white rounded-lg shadow hover:border-2 hover:text-primary hover:border-primary transition duration-100 ease-in-out'>
        <p className='text-sm font-semibold text-muted group-hover:text-primary transition-colors duration-100'>
          {label}
        </p>
        <p className='text-4xl font-bold text-gray-900  group-hover:text-primary transition-colors duration-100'>
          {value}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
      className='group flex flex-col gap-3 items-center p-4 bg-white rounded-lg shadow hover:border-2 hover:text-primary hover:border-primary transition duration-100 ease-in-out'
    >
      <p className='text-sm font-semibold text-muted group-hover:text-primary transition-colors duration-100'>
        {label}
      </p>
      <p className='text-4xl font-bold text-gray-900  group-hover:text-primary transition-colors duration-100'>
        {value}
      </p>
    </motion.div>
  );
};

export default StantItem;
