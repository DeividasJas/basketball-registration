import { displayPlayers, getLatestGame } from '@/actions/actions';
import { registeredPlayersList } from '@/types/registeredPlayersList';
import UserCard from './userCard';
export default async function RegisteredPlayersList() {

  const data:registeredPlayersList[]  = await displayPlayers();
  if (!data || data.length === 0) {
    return <h1>No game found</h1>;
  }
  console.log(data);

  const latestGame = await getLatestGame();


  // const time = new Date(data[0].games.game_date).toLocaleTimeString();
  const date = new Date(latestGame.game_date).toLocaleDateString();

  return (
    <>
      <h3>{date} {}</h3>
      <p>Players:</p>
      <ul className='grid md:grid-cols-2 gap-2 max-w-screen-lg mx-auto'>
        {data.map((player) => (

          <UserCard
            key={player.id}
            playerEmail={player.email}
            playerName={player.given_name}
            playerLastname={player.family_name}
          />
        ))}
      </ul>
    </>
  );
}
