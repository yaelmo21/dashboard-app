'use client';
import React from 'react';
import Input from '../ui/forms/Input';
import Link from 'next/link';
import { Button } from '../ui/Button';

import InputPassword from '../ui/forms/InputPassword';

const LoginForm = () => {
  return (
    <>
      <form className='flex flex-col gap-4'>
        <Input
          label='EMAIL'
          classLabel='text-muted'
          placeholder='Email address'
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

      <div className='flex items-center justify-center gap-2 mt-4'>
        <span className='text-sm text-muted'>Don&apos;t have an account?</span>
        <Link
          href='/auth/register'
          className='text-sm font-semibold text-primary hover:text-primary'
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
