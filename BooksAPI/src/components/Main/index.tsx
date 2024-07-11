import * as React from 'react';
import * as styledMain from './styled';
import BookItem from '../BookItem';
import * as booksAPI from '../../api/booksapi';
import { useAppSelector } from '../../store/index';
import { useAppDispatch } from '../../store/index';
import * as loadingReducers from '../../store/reducers/loadingReducer';

export default function Main({ getBook }) {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);
  const render = useAppSelector((state) => state.renderMain);
  const loading = useAppSelector((state) => state.loading.load);
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [books, setBooks] = React.useState<Array<booksAPI.Book>>([]);
  const [offset, setOffset] = React.useState<number>(1);

  React.useLayoutEffect(() => {
    if (render.renderer) {
      dispatch(loadingReducers.setLoad(true));
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
      dispatch(loadingReducers.setLoad(false));
    }
  }, [render.click]);

  function getBooks(event: React.MouseEvent<HTMLButtonElement>): void {
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
      {loading ? (
        <styledMain.h3>Searching...</styledMain.h3>
      ) : totalItems ? (
        <styledMain.h3>Found {totalItems} results</styledMain.h3>
      ) : (
        <styledMain.h3>no results</styledMain.h3>
      )}
      <styledMain.flex>
        {books.map((item, index) => (
          <BookItem
            key={index}
            title={item.title}
            authors={item.authors}
            categorie={item.categories[0]}
            cover={item.cover}
            tag={item.id}
            getBook={getBook}
          />
        ))}
      </styledMain.flex>
      {offset + 30 < totalItems && (
        <styledMain.button onClick={getBooks}>Load more</styledMain.button>
      )}
    </>
  );
}
