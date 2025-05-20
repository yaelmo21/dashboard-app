'use client';
import React from 'react';
import Input from '../ui/forms/Input';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
      <div>
        <h2 className='text-2xl font-bold text-center text-gray-900'>
          Log In to Dashboard Kit
        </h2>
        <h3 className='text-sm text-center text-muted mt-2'>
          Enter your email and password below
        </h3>
      </div>
      <form className='flex flex-col gap-4'>
        <Input
          label='EMAIL'
          classLabel='text-muted'
          placeholder='Email address'
        />
        <Input
          label='PASSWORD'
          classLabel='text-muted'
          placeholder='Password'
          type='password'
          rightElementLabel={
            <Link
              href='/auth/forgot-password'
              className='text-[10px] text-muted'
            >
              Forgot password?
            </Link>
          }
        />
      </form>
    </>
  );
};

export default LoginForm;
