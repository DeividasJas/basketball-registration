import RegisteredPlayersList from '@/components/registeredPlayersList';
import NotPlayingBtn from '@/components/notPlayingBtn';
import { Suspense } from 'react';
import PlayingBtn from '@/components/playingBtn';
export default async function SchedulePage() {
  return (
    <>
      <main className='border text-center'>
        <h1 className='mt-20 text-4xl'>Game Stats for</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <RegisteredPlayersList />
        </Suspense>
        <div className='flex gap-4 justify-center mx-auto'>
          <PlayingBtn />
          <NotPlayingBtn />
        </div>
      </main>
    </>
  );
}
