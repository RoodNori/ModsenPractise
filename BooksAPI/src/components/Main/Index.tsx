import * as React from 'react';
import * as mStyle from './styled';
import BookItem from '../BookItem';
import * as booksAPI from '../../constants/booksapi';

export default function Main() {
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [books, setBooks] = React.useState<Array<booksAPI.Book>>([]);

  return (
    <>
      <span>{totalItems}</span>
      {books.forEach((item) => {
        <BookItem />;
      })}
    </>
  );
}
