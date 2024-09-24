export default function UserCard({
  playerName,
  playerEmail,
  playerLastname,
}: {
  playerName: string;
  playerEmail: string;
  playerLastname: string;
}) {
  return (
    <>
      <li className='grid grid-cols-4 border border-orange-200 py-2 divide-x-2 divide-zinc-600'>
        <p>{playerName}</p>
        <p>{playerLastname}</p>
        {/* {playerEmail && <p className='col-span-2 '>{playerEmail}</p>} */}
        <p className='col-span-2 '>{ playerEmail}</p>
      </li>
    </>
  );
}
