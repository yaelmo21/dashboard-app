'use client';
import { Stant } from '@/infraestructure/interfaces/Stant.interface';
import React, { FC } from 'react';
import StantItem from './StantItem';

interface StantsGridProps {
  stants: Stant[];
}

const StantsGrid: FC<StantsGridProps> = ({ stants }) => {
  return (
    <div className='grid grid-cols-2 gap-1 sm:gap-4 lg:grid-cols-4'>
      {stants.map((stant, index) => (
        <StantItem
          key={stant.label}
          label={stant.label}
          value={stant.value}
          index={index}
        />
      ))}
    </div>
  );
};

export default StantsGrid;
