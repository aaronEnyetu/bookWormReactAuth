import { Link } from 'react-router-dom';

export function Book({ book }) {
  return <Link to={`/book/${book.id}`} >
    <p>{book.title} by {book.author}</p>
  </Link>;
}