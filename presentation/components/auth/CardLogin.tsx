import React from 'react';
import HeaderCard from './HeaderCard';
import LoginForm from './LoginForm';
import Link from 'next/link';

const CardLogin = () => {
  return (
    <div className='bg-white shadow-md rounded-md flex flex-col justify-between gap-10 px-12 py-12 w-[calc(100%-1rem)] h-5/6 md:h-auto  md:w-5/6 xl:w-96'>
      <div className='flex flex-col gap-10'>
        <HeaderCard />
        <div>
          <h2 className='text-2xl font-bold text-center text-gray-900'>
            Log In to Dashboard Kit
          </h2>
          <h3 className='text-sm text-center text-muted mt-2'>
            Enter your email and password below
          </h3>
        </div>
        <LoginForm />
      </div>
      <div className='flex items-center justify-center gap-2 mt-4'>
        <span className='text-sm text-muted'>Don&apos;t have an account?</span>
        <Link
          href='/auth/register'
          className='text-sm font-semibold text-primary hover:text-primary'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default CardLogin;
