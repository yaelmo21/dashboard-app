'use client';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default async function Home() {
  const verifyToken = () => {
    const token = Cookies.get('token');
    if (token) {
      return redirect('/dashboard');
    }

    return redirect('/auth/login');
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return <></>;
}
