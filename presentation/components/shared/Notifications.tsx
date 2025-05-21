import React, { FC } from 'react';
import { FaBell } from 'react-icons/fa6';

/**
 * This component renders a notifications button with a bell icon.
 */

interface NotificationsProps {
  count?: number;
}

const Notifications: FC<NotificationsProps> = ({ count = 0 }) => {
  return (
    <button className='relative inline-block'>
      <FaBell
        className='h-4 w-4 text-muted hover:text-gray-700 transition duration-150 ease-in-out'
        aria-hidden='true'
      />
      {count > 0 && (
        <span className='absolute top-0 right-0 block size-2 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary ring-2 ring-primary' />
      )}
    </button>
  );
};

export default Notifications;
