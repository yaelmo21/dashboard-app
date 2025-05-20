import React from 'react';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className='bg-tertiary w-full h-screen'>{children}</main>;
};

export default AuthLayout;
