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

export async function updateBook(book, id) {
  const { data, error } = await client
    .from('book')
    .update(book)
    .match({ id: id })
    .single();
  
  return data;
}
  
export async function deleteBook(id) {
  const { data, error } = await client
    .from('book')
    .delete()
    .match({ id: id })
    .single();
  
  return data;
}
  
  // parameter
export async function getBookById(id) {
  const { data, error } = await client
    .from('book')
    .select('*')
    .match({ id })
    .single();
  
  return data; 
}