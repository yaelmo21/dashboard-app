'use client';
import React, { FC } from 'react';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <div className='group grid size-4 grid-cols-1'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className='col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto'
      />
      <svg
        fill='none'
        viewBox='0 0 14 14'
        className='pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25'
      >
        <path
          d='M3 8L6 11L11 3.5'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='opacity-0 group-has-checked:opacity-100'
        />
        <path
          d='M3 7H11'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='opacity-0 group-has-indeterminate:opacity-100'
        />
      </svg>
    </div>
  );
};

export default CheckBox;
