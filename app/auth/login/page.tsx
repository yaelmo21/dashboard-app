import LoginForm from '@/presentation/components/auth/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
