'use client';
import { InputProps } from '@/infraestructure/interfaces/InputProps.interface';
import React, { FC, useState } from 'react';
import Input from './Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputPassword: FC<Omit<Omit<InputProps, 'rightElementInput'>, 'type'>> = (
  props,
) => {
  const [viewPassword, setViewPassword] = useState(false);
  const tooglePassword = () => setViewPassword(!viewPassword);
  return (
    <Input
      {...props}
      type={viewPassword ? 'text' : 'password'}
      rightElementInput={
        <button
          className='flex items-center justify-center hover:bg-gray-100 rounded p-1.5'
          type='button'
          onClick={tooglePassword}
        >
          {viewPassword ? (
            <FaEyeSlash
              className='text-muted'
              aria-label='Show password'
            />
          ) : (
            <FaEye
              className='text-muted'
              aria-label='Show password'
            />
          )}
        </button>
      }
    />
  );
};

export default InputPassword;
