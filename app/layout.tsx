import type { Metadata } from 'next';

import './globals.css';
import { Mulish } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Dashboard Kit',
  description:
    'A simple dashboard kit built with Next.js and Tailwind CSS by @yaelmo21',
};

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='es'
      className='h-full'
    >
      <body className={`${mulish.variable} antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}
