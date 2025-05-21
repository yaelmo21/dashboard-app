import Logo from '@/assets/images/logo.svg';

const HeaderCard = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center mb-4'>
      <Logo className='w-12 h-12' />
      <h1 className='text-[19px] font-bold text-center text-muted'>
        Dashboard Kit
      </h1>
    </div>
  );
};

export default HeaderCard;
