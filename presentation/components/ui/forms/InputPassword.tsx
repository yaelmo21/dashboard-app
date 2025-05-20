'use client';
import { InputProps } from '@/infraestructure/interfaces/InputProps.interface';
import React, { FC, useState } from 'react';
import Input from './Input';
import { FiEyeOff, FiEye } from 'react-icons/fi';

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
            <FiEyeOff
              className='text-muted'
              aria-label='Show password'
            />
          ) : (
            <FiEye
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
