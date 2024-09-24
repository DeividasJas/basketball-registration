import { NextResponse } from 'next/server';
import { supabase } from '@/supabase/supabaseClient';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function POST() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  
  // If no user from Kinde, return early
  if (!user) {
    return NextResponse.json({ message: 'No user found in Kinde session' }, { status: 400 });
  }

  // Check if the user exists in Supabase
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id);

  // Handle potential errors from Supabase select
  if (selectError) {
    return NextResponse.json({ message: 'Error fetching user from Supabase', error: selectError.message }, { status: 500 });
  }

  // If user exists, return early
  if (existingUser.length > 0) {
    console.log('User already exists:', existingUser);
    return NextResponse.json({ message: 'User already exists', user: existingUser[0] });
  }

  // Insert new user into Supabase
  const { data: newUser, error: insertError } = await supabase.from('users').insert([user]);

  console.log(insertError);
  
  // Handle potential errors from Supabase insert
  if (insertError) {
    return NextResponse.json({ message: 'Error creating user in Supabase', error: insertError.message }, { status: 500 });
  }

  console.log('New user created:', newUser);
  return NextResponse.json({ message: 'User created successfully', user: newUser });
}
