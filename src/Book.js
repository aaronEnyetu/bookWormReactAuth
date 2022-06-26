import { Link } from 'react-router-dom';

export function Book({ book }) {
  return (
    <div className='book-card'>
      <Link to={`/books/${book.id}`}>
        <h3>{book.title}</h3>
      </Link>
      <h4>By: {book.author}</h4>
      {/* <h4>Genre: {book.genre} </h4> */}
    </div>
  );
}