'use client';
import React from 'react';
import Input from '../ui/forms/Input';
import Link from 'next/link';
import { Button } from '../ui/Button';

import InputPassword from '../ui/forms/InputPassword';
import { useFormik } from 'formik';
import { loginValidationSchema } from '@/validation/LoginValidation';

const LoginForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: loginValidationSchema,
    });

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit}
    >
      <Input
        label='EMAIL'
        classLabel='text-muted'
        placeholder='Email address'
        type='email'
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={Boolean(errors.email && touched.email)}
        messageError={errors.email}
      />
      <InputPassword
        label='PASSWORD'
        classLabel='text-muted'
        placeholder='Password'
        name='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={Boolean(errors.password && touched.password)}
        messageError={errors.password}
        rightElementLabel={
          <Link
            href='/auth/forgot-password'
            className='text-[10px] text-muted'
          >
            Forgot password?
          </Link>
        }
      />
      <Button
        size='lg'
        type='submit'
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
