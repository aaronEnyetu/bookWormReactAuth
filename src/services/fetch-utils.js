import { client } from './client';

// Auth Functions
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
}

export async function logout() {
  await client.auth.signOut();
}
