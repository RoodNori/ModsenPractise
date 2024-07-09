import * as React from 'react';
import * as styledMain from './styled';
import BookItem from '../BookItem';
import * as booksAPI from '../../api/booksapi';
import { useAppSelector } from '../../store/index';

export default function Main({ getBook }) {
  const search = useAppSelector((state) => state.search);
  const render = useAppSelector((state) => state.renderMain);
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [books, setBooks] = React.useState<Array<booksAPI.Book>>([]);
  const [offset, setOffset] = React.useState<number>(1);

  React.useLayoutEffect(() => {
    if (render.renderer) {
      booksAPI
        .getBooks({
          title: search.title,
          ordering: search.sorting,
          filtering: search.filtering,
          offset: 0,
        })
        .then((result) => {
          setTotalItems(result?.totalItems ?? 0);
          setBooks(result?.items ?? []);
        });
    }
  }, [render.click]);

  function getBooks(): void {
    setOffset(offset + 30);
    booksAPI
      .getBooks({
        title: search.title,
        ordering: search.sorting,
        filtering: search.filtering,
        offset: offset,
      })
      .then((result) => {
        setBooks(books.concat(result?.items) ?? books);
      });
  }

  return (
    <>
      {totalItems ? (
        <styledMain.h3>Found {totalItems} results</styledMain.h3>
      ) : (
        <styledMain.h3>no results</styledMain.h3>
      )}
      <styledMain.flex>
        {books.map((item, index) => (
          <div
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              getBook(item.tag);
            }}
          >
            <BookItem
              key={index}
              title={item.title}
              authors={item.authors}
              categorie={item.categories[0]}
              cover={item.cover}
            />
          </div>
        ))}
      </styledMain.flex>

      {offset < totalItems && (
        <styledMain.button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            getBooks;
          }}
        >
          Load more
        </styledMain.button>
      )}
    </>
  );
}
