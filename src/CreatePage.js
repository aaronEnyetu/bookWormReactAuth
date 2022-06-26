import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewBook } from './services/fetch-utils';


export default function CreatePage() {
  const { push } = useHistory();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await addNewBook({
      title: title,
      author: author,
    //   genre: genre
    });
    
    push('/books');
    setTitle('');
    setAuthor('');
    // setGenre('');
  }

  return (
    <div>CreatePage
      <form onSubmit={handleSubmit}>
        <label> Title
          <input value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label> Author
          <input value={author}
            onChange={(e) => setAuthor(e.target.value)} />
        </label>
        {/* <label> Genre
          <input value={genre}
            onChange={(e) => setGenre(e.target.value)} />
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  );
}