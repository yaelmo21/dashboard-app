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
      <div className='relative rounded-lg p-[1px] bg-[#DFE0EB] shadow-inner hover:bg-blue-100/50'>
        <div className='group flex flex-col gap-3 items-center p-4 bg-white rounded-lg shadow border-2 border-transparent hover:text-primary hover:border-primary transition duration-200 ease-in-out'>
          <p className='text-sm font-semibold text-muted group-hover:text-primary transition-colors duration-100'>
            {label}
          </p>
          <p className='text-4xl font-bold text-gray-900  group-hover:text-primary transition-colors duration-100'>
            {value}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
      className='relative rounded-lg p-[1px] bg-[#DFE0EB] shadow-inner hover:bg-blue-100/50'
    >
      <div className='group flex flex-col gap-3 items-center p-4 bg-white rounded-lg shadow border-2 border-transparent hover:text-primary hover:border-primary transition duration-200 ease-in-out'>
        <p className='text-sm font-semibold text-muted group-hover:text-primary transition-colors duration-100'>
          {label}
        </p>
        <p className='font-bold text-[40px] text-gray-900  group-hover:text-primary transition-colors duration-100'>
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StantItem;
