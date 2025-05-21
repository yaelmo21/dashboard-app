import React, { FC } from 'react';
import { Kpi } from '@/infraestructure/interfaces/Kpi.interface';
import ChartKpiItem from './ChartKpiItem';

interface ChartsKpisListProps {
  kpis: Kpi[];
}
const ChartsKpisList: FC<ChartsKpisListProps> = ({ kpis }) => {
  return (
    <ul
      role='list'
      className='divide-y divide-gray-100'
    >
      {kpis.map((kpi) => (
        <ChartKpiItem
          key={kpi.label}
          {...kpi}
        />
      ))}
    </ul>
  );
};

export default ChartsKpisList;
