import Image from 'next/image';

export default function Home() {
  const colors = [
    {
      name: 'primary',
      color: 'bg-primary',
    },
    {
      name: 'secondary',
      color: 'bg-secondary',
    },
    {
      name: 'surface',
      color: 'bg-surface',
    },
    {
      name: 'tertiary',
      color: 'bg-tertiary',
    },
    {
      name: 'muted',
      color: 'bg-muted',
    },
    {
      name: 'border',
      color: 'bg-border',
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {colors.map((color) => (
        <div
          key={color.name}
          className='flex flex-col items-center gap-10'
        >
          <div className={`w-full h-96 ${color.color}`}></div>
          <strong className='text-sm'>{color.name}</strong>
        </div>
      ))}
    </div>
  );
}
