import React, { FC } from 'react';
import clsx from 'clsx';
import { InputProps } from '@/infraestructure/interfaces/InputProps.interface';

const Input = ({
  id,
  label,
  rightElementLabel,
  rightElementInput,
  classLabel,
  classInput,
  error,
  messageError,
  ...props
}: InputProps) => {
  return (
    <div>
      <div className='flex justify-between'>
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              'block text-sm/6 font-medium',
              error ? 'text-red-600' : 'text-gray-900',
              classLabel,
            )}
          >
            {label}
          </label>
        )}
        {rightElementLabel && (
          <div className='shrink-0'>{rightElementLabel}</div>
        )}
      </div>

      <div
        className={clsx(
          'mt-2 flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 focus-within:outline-2 focus-within:-outline-offset-2',
          error
            ? 'outline-red-500 focus-within:outline-red-500'
            : 'outline-gray-300 focus-within:outline-indigo-600',
        )}
      >
        <input
          id={id}
          {...props}
          className={clsx(
            'block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6',
            classInput,
          )}
        />
        {rightElementInput && (
          <div className='shrink-0'>{rightElementInput}</div>
        )}
      </div>

      {error && messageError && (
        <p className='mt-1 text-sm text-red-600'>{messageError}</p>
      )}
    </div>
  );
};

export default Input;
