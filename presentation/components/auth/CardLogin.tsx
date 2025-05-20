import React from 'react';
import HeaderCard from './HeaderCard';
import LoginForm from './LoginForm';

const CardLogin = () => {
  return (
    <div className='bg-white shadow-md rounded-md flex flex-col gap-10 px-12 py-12 w-full xl:w-96'>
      <HeaderCard />
      <LoginForm />
    </div>
  );
};

export default CardLogin;
