import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewBook } from './services/fetch-utils';


export default function CreatePage() {
  const { push } = useHistory();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    await addNewBook({
      title: title,
      author: author,
    
    });
    
    
    setTitle('');
    setAuthor('');

    push('/book');
   
  }

  return (
    <div>
      <h2>Create a book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          Author
          <input onChange={e => setAuthor(e.target.value)} value={author} />
        </label>
        <button>Create book</button>
      </form>
    </div>
  );
}