import { Notifications, Search } from '@/presentation/components/HomeScreen';
import Divider from '@/presentation/components/ui/Divider';
import PageHeading from '@/presentation/components/ui/PageHeading';
import AvatarUser from '@/presentation/components/users/AvatarUser';
import React from 'react';

const DashboardHome = () => {
  const user = {
    name: 'Tom Cook',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  return (
    <div className='px-4 sm:px-6 w-full '>
      <div className='flex justify-between items-center w-full '>
        <PageHeading title='Overview' />
        <div className='flex items-center gap-10'>
          <Search />
          <Notifications count={1} />
          <Divider orientation='vertical' />
          <AvatarUser
            name={user.name}
            imageUrl={user.imageUrl}
            size='md'
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
