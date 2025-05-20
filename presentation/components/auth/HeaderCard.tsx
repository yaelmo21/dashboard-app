import logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const HeaderCard = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center mb-4'>
      <Image
        src={logo}
        alt='Logo Dashboard Kit'
        className='w-12 h-12'
      />

      <h1 className='text-xl font-bold text-center text-muted'>
        Dashboard Kit
      </h1>
    </div>
  );
};

export default HeaderCard;
