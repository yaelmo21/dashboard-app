'use client';
import React from 'react';
import logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl'>
      <div className='flex flex-col gap-3 items-center justify-center mb-4'>
        <Image
          src={logo}
          alt='Logo Dashboard Kit'
          className='w-12 h-12'
        />

        <h1 className='text-2xl font-bold text-center text-muted'>
          Dashboard Kit
        </h1>
      </div>
    </div>
  );
};

export default LoginForm;
