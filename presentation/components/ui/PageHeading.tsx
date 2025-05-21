import React, { FC } from 'react';

interface PageHeadingProps {
  title: string;
}

const PageHeading: FC<PageHeadingProps> = ({ title }) => {
  return <h1 className='text-[24px] font-bold text-gray-900'>{title}</h1>;
};

export default PageHeading;
