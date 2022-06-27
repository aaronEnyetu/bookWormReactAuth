import { useEffect, useState } from 'react';
import { deleteBook, getBookById, updateBook } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  // on load, fetch this book!
  useEffect(() => {
    async function doFetch() {
      // argument
      const book = await getBookById(id);

      setTitle(book.title);
      setAuthor(book.author);
    }

    doFetch();
  }, [id]);

  async function handleDeleteBook() {
    await deleteBook(id);

    push('/book');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // create a book in supabase using form data
    await updateBook({
      title: title,
      author: author
    }, id);

    // clear out form 
    setTitle('');
    setAuthor('');

    // send the user to the list page
    push('/book');
  }

  return (
    <div>
      <h2>Update a book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          Author
          <input onChange={e => setAuthor(e.target.value)} value={author} />
        </label>
        <button>Update book</button>
      </form>
      <button 
        onClick={handleDeleteBook} className='delete-button'>Delete book</button>
    </div>
  );
}