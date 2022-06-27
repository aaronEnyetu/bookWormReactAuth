import { client } from './client';


// Auth Functions
export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
}

export async function logout() {
  await client.auth.signOut();
  return window.location.href = '/';
}

// CREATE book function
export async function addNewBook(book) {
  const { data } = await client
    .from('book')
    .insert(book)
    .single();
  return data;
}

export async function getBooks() {
  const { data } = await client
    .from('book')
    .select('*');
  
  return data; 
}