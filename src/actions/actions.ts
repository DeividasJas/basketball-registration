'use server';
import { supabase } from '@/supabase/supabaseClient';
import GetUser from '@/components/getUser';
import { revalidatePath } from 'next/cache';

export async function getLatestGame() {
  const { data: latestGame, error: latestGameError } = await supabase
    .from('games')
    .select('*')
    .order('id', { ascending: false })
    .limit(1)
    .single();

  if (latestGameError) {
    console.error('Error fetching latest game:', latestGameError);
    return { error: latestGameError };
  }

  return latestGame;
}

export async function registerUserGame() {
  const user = await GetUser();
  console.log(user);

  const latestGame = await getLatestGame();
  if (latestGame.error) {
    console.error('Error fetching latest game:', latestGame.error);
    return { error: latestGame.error };
  }

  const { status: registrationStatus } = await supabase
    .from('game_registrations')
    .insert({
      user_id: user.id,
      game_id: latestGame.id,
      given_name: user.given_name,
      family_name: user.family_name,
      email: user.email,
    });
  revalidatePath('/status');
  return registrationStatus;
}

export async function removeUserRegistration() {
  const user = await GetUser();
  console.log(user);

  const latestGame = await getLatestGame();
  if (latestGame.error) {
    console.error('Error fetching latest game:', latestGame.error);
    return { error: latestGame.error };
  }

  const { error: removedRegistrationError, status: removedRegistrationStatus } =
    await supabase
      .from('game_registrations')
      .delete()
      .eq('user_id', user.id)
      .eq('game_id', latestGame.id);
  if (removedRegistrationError) return removedRegistrationError;
  console.log(removedRegistrationStatus);

  revalidatePath('/status');
  return removedRegistrationStatus;
}

export async function displayPlayers() {
  const { data: gameData, error: GameError } = await supabase
    .from('game_registrations')
    .select('*');

  if (GameError) {
    console.error('Error fetching game players:', GameError);
    return { error: GameError };
  }
  console.log(gameData);
  
  return gameData;
}
