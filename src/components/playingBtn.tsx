'use client';

import { registerUserGame } from '@/actions/actions';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function PlayingBtn() {
  const router = useRouter(); // Initialize useRouter hook
  const handleClick = async () => {
    try {
      const response = await registerUserGame();
      if (response === 201) {
        router.push('/status');
        toast.success('Game Registered');
      } else if (response === 409) {
        toast.error('Game Already Registered');
        router.push('/status');
      } else {
        toast.error('Error registering user game');
      }
    } catch (error) {
      console.error('Error registering user game:', error);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className='bg-orange-500 py-2 px-4 rounded-lg font-semibold mt-2 hover:shadow-md'
      >
        Play
      </button>
    </>
  );
}
