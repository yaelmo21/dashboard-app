'use client';
import React from 'react';
import logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl'>
      <div>
        <Image
          src={logo}
          alt='Logo Dashboard Kit'
          className='mx-auto mb-4 w-12 h-12'
        />
      </div>
    </div>
  );
};

export default LoginForm;
