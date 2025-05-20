import React, { FC } from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: FC<DividerProps> = ({ orientation = 'horizontal' }) => {
  if (orientation === 'vertical') {
    return <div className='h-7 border-l border-gray-300' />;
  }

  return (
    <div
      aria-hidden='true'
      className='inset-0 flex items-center'
    >
      <div className='w-full border-t border-gray-700' />
    </div>
  );
};

export default Divider;
