import React, { FC } from 'react';

interface AvatarUserProps {
  name: string;
  imageUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
};

const AvatarUser: FC<AvatarUserProps> = ({ name, imageUrl, size = 'sm' }) => {
  return (
    <div className='flex items-center space-x-3'>
      <span className='text-sm font-semibold text-gray-900 '>
        <span className='hidden lg:inline'>{name}</span>
      </span>
      {imageUrl && (
        <img
          alt={`${name}'s avatar`}
          src={imageUrl}
          className={`inline-block  rounded-full border-1 p-0.5 border-gray-300 ${sizeMap[size]}`}
        />
      )}
      {!imageUrl && (
        <div className='flex items-center justify-center size-8 rounded-full border-1 p-0.5 border-gray-300 bg-gray-200 '>
          <span className='text-sm font-semibold text-gray-900'>
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};

export default AvatarUser;
