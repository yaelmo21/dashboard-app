import { Kpi } from '@/infraestructure/interfaces/Kpi.interface';
import React, { FC } from 'react';

const ChartKpiItem: FC<Kpi> = ({ label, value }) => {
  return (
    <li className='flex flex-col justify-center items-center px-4 py-5'>
      <span className='text-sm text-muted text-center'>{label}</span>
      <span className='font-bold text-2xl text-center'>{value}</span>
    </li>
  );
};

export default ChartKpiItem;
