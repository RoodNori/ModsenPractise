import * as React from 'react';
//import * as  from './styled';
import BookItem from '../BookItem' 
import * as booksAPI from '../../constants/booksapi'


const [totalItems, setTotalItems] = React.useState<number>(0);
const [books, setBooks] = React.useState<Array<booksAPI.Book>>([]);


export default function Main() {
  return (
    <>
      <span>{totalItems}</span>
      {books.forEach(item => {
        <BookItem />
      })}
    </>
  );
}
