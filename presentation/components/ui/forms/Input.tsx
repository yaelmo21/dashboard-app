import { InputProps } from '@/infraestructure/interfaces/InputProps.interface';
import React, { FC } from 'react';

const Input: FC<InputProps> = ({
  label,
  id,
  classLabel,
  classInput,
  rightElementInput,
  rightElementLabel,
  ...props
}) => {
  return (
    <div>
      <div className='flex justify-between'>
        {label && (
          <label
            htmlFor={id}
            className={`block text-sm/6 font-medium text-gray-900 ${classLabel}`}
          >
            {label}
          </label>
        )}
        {rightElementLabel && (
          <div className='shrink-0'>{rightElementLabel}</div>
        )}
      </div>

      <div className='mt-2 flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
        <input
          id={id}
          {...props}
          className={`block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 ${classInput}`}
        />
        {rightElementInput && (
          <div className='shrink-0'>{rightElementInput}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
