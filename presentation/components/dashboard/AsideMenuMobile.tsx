import React, { FC } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';

import HeaderList from './HeaderList';
import ListNavigation from './ListNavigation';
import Divider from '../ui/Divider';
import {
  fistMenuItems,
  secondMenuItems,
} from '@/presentation/navigation/navbarItems';
import { HiXMark } from 'react-icons/hi2';

interface AsideMenuMobileProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AsideMenuMobile: FC<AsideMenuMobileProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <Dialog
      open={sidebarOpen}
      onClose={setSidebarOpen}
      className='relative z-50 lg:hidden'
    >
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0'
      />
      <div className='fixed inset-0 flex'>
        <DialogPanel
          transition
          className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full'
        >
          <TransitionChild>
            <div className='absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0'>
              <button
                type='button'
                onClick={() => setSidebarOpen(false)}
                className='-m-2.5 p-2.5'
              >
                <span className='sr-only'>Close sidebar</span>
                <HiXMark
                  aria-hidden='true'
                  className='size-6 text-white'
                />
              </button>
            </div>
          </TransitionChild>

          <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-tertiary px-6 pb-4'>
            <HeaderList automaticHiddeTitle={false} />
            <ListNavigation
              items={fistMenuItems}
              automaticHiddeTitle={false}
            />
            <Divider />
            <ListNavigation
              items={secondMenuItems}
              automaticHiddeTitle={false}
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AsideMenuMobile;
