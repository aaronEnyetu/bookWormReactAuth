import React from 'react';
import { useEffect, useState } from 'react';
import { getBooks } from './services/fetch-utils';
import { Book } from './Book';

export default function ListPage() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function doFetch() {
      const books = await getBooks();
  
      setBooks(books);
    }
    doFetch();
  }, []);
  return (
    <div>
      {
        books.map((book, i) => <Book book={book} key={book.author + book.title + i} />)
      }
    </div>
  );
}