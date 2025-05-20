import React from 'react';
import GraphImage from '@/assets/images/graph.svg';
import Image from 'next/image';
import { Kpi } from '@/infraestructure/interfaces/Kpi.interface';
import FadeInUp from '../../animations/FadeInUp';
import ChartsKpisList from './ChartsKpisList';

const kpis: Kpi[] = [
  {
    label: 'Resolved',
    value: '449',
  },
  {
    label: 'Received',
    value: '426',
  },
  {
    label: 'Average first response time',
    value: '33m',
  },
  {
    label: 'Average response time',
    value: '3h 8m',
  },
  {
    label: 'Resolution within SLA',
    value: '94%',
  },
];

const Charts = () => {
  return (
    <FadeInUp>
      <section className='flex flex-row bg-white rounded-lg shadow-md'>
        <div className='sm:w-4/6 p-4'>
          <div className='flex flex-col lg:flex-row justify-between md:items-end gap-4'>
            <div className='w-full'>
              <h2 className='text-lg  text-gray-900'>Today’s trends</h2>
              <p className='text-sm text-muted'>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className='flex items-center justify-center gap-6 w-full'>
              <div className='flex items-center gap-2'>
                <span className='h-0.5 w-6 rounded-full bg-primary' />
                <span className='text-xs text-gray-600 font-medium'>Today</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-0.5 w-6 rounded-full bg-gray-300' />
                <span className='text-xs text-muted font-medium'>
                  Yesterday
                </span>
              </div>
            </div>
          </div>

          <Image
            src={GraphImage}
            alt='Graph'
            className='w-full h-96 lg:max-h-96  object-cover'
            priority
          />
        </div>
        <div className='hidden sm:block flex-1 border-l border-gray-200'>
          <ChartsKpisList kpis={kpis} />
        </div>
      </section>
    </FadeInUp>
  );
};

export default Charts;
