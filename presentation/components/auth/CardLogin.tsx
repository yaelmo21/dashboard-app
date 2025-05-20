import React from 'react';
import HeaderCard from './HeaderCard';
import LoginForm from './LoginForm';

const CardLogin = () => {
  return (
    <div className='bg-white shadow-md rounded-md flex flex-col gap-10 px-12 py-12 w-full xl:w-96'>
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
  );
};

export default CardLogin;
