'use client';
import { useEffect } from 'react';
import Image from 'next/image';
export default function Home() {
  useEffect(() => {
    const checkUser = async () => {
      await fetch('/api/handle-user', {
        method: 'POST',
      });
    };

    checkUser();
  }, []);

  return (
    <>
      <main className='text-center'>
        <div className='flex flex-col gap-3 mb-5'>
          <h1 className='mt-20 text-4xl'>Krepšinio vakarai</h1>
          <p>
            Renkames Vyčio gimanazijoje antradieniais{' '}
            <span className='font-semibold'>aštunta valanda</span> vakaro
          </p>
          <p>Pinigėlius mokakame Audriui: LT1234567890</p>
          <p>
            <span className='font-semibold'>8$ </span>
            už vieną kartą, arba membership{' '}
            <span className='font-semibold'>...$ </span> per mėnėsį
          </p>
        </div>
        <Image
          src={'/sabonis.gif'}
          width='0'
          height='0'
          alt='basketball'
          className='mx-auto w-full sm:w-2/3 rounded-md'
        />
      </main>
    </>
  );
}