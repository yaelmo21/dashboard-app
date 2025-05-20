'use client';
import React from 'react';
import Input from '../ui/forms/Input';
import Link from 'next/link';
import { Button } from '../ui/Button';

import InputPassword from '../ui/forms/InputPassword';

const LoginForm = () => {
  return (
    <form className='flex flex-col gap-4'>
      <Input
        label='EMAIL'
        classLabel='text-muted'
        placeholder='Email address'
        error={true}
        messageError='Invalid email format'
      />
      <InputPassword
        label='PASSWORD'
        classLabel='text-muted'
        placeholder='Password'
        rightElementLabel={
          <Link
            href='/auth/forgot-password'
            className='text-[10px] text-muted'
          >
            Forgot password?
          </Link>
        }
      />
      <Button size='lg'>Log In</Button>
    </form>
  );
};

export default LoginForm;
