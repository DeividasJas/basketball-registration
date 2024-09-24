import PlayingBtn from '@/components/playingBtn';
import NotPlayingBtn from '@/components/notPlayingBtn';
import TimeTillGame from '@/components/timeTillGame';
export default function SchedulePage() {
  return (
    <>
      <main className='text-center'>
        <h1 className='mt-20 text-4xl'>Game Starts In</h1>
        <TimeTillGame />
        <p>Are you playing?</p>
        <div className='flex gap-4 justify-center mx-auto'>
          <PlayingBtn />
          <NotPlayingBtn />
        </div>
      </main>
    </>
  );
}
