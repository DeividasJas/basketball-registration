'use client';
import { removeUserRegistration } from '@/actions/actions';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function NotPlayingBtn() {
  const router = useRouter(); // Initialize useRouter hook
  const handleClick = async () => {
    const removedRegistration = await removeUserRegistration();
    console.log(removedRegistration);

    if (removedRegistration === 204) {
      toast.success('User Registration Removed');
      router.push('/status');
    }
  };
  return (
    <>
      <button
        onClick={() => handleClick()}
        className='bg-orange-800 py-2 px-4 rounded-lg font-semibold mt-2 hover:shadow-md'
      >
        Not Playing
      </button>
    </>
  );
}
