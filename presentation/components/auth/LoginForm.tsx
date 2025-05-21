'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import Input from '../ui/forms/Input';
import { Button } from '../ui/Button';
import InputPassword from '../ui/forms/InputPassword';
import { loginValidationSchema } from '@/validation/LoginValidation';
import { useRouter } from 'next/navigation';
import { Alert } from '../ui/Alert';
import FadeInUp from '../animations/FadeInUp';

const LoginForm = () => {
  const [viewError, setViewError] = useState(false);
  const router = useRouter();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        const { email, password } = values;
        if (email === 'admin@admin.com' && password === 'admin') {
          Cookies.set('token', 'admin');
          router.replace('/');
          return;
        }
        setViewError(true);
      },
      validationSchema: loginValidationSchema,
    });

  useEffect(() => {
    if (viewError) {
      setViewError(false);
    }
  }, [values]);

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
      {viewError && (
        <FadeInUp>
          <Alert
            type='error'
            message='Please check your email and password.'
            dismissible
            onDismiss={() => setViewError(false)}
          />
        </FadeInUp>
      )}
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
