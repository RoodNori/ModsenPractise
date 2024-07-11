import * as React from 'react';
import * as styledBook from './styled';
import * as booksAPI from '../../api/booksapi';

export default function BookItem({ tag }) {
  const [cover, setCover] = React.useState<string>('');
  const [categories, setCategories] = React.useState<Array<string>>([]);
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [authors, setAuthors] = React.useState<Array<string>>([]);

  React.useLayoutEffect(() => {
    booksAPI.getBook(tag).then((result) => {
      setCover(result?.cover ?? '');
      setCategories(result?.categories ?? []);
      setTitle(result?.title ?? '');
      setDescription(result?.description ?? '');
      setAuthors(result?.authors ?? []);
    });
  }, []);

  return (
      <styledBook.flex>
        <styledBook.img src={cover} />
        <styledBook.grid>
          <styledBook.categorie>
            {categories.map((item) => (
              <>{item}, </>
            ))}
          </styledBook.categorie>
          <styledBook.title>{title}</styledBook.title>
          <styledBook.author>
            {authors.map((item) => (
              <>{item.trim().replace(',', '')}, </>
            ))}
          </styledBook.author>
          <styledBook.description dangerouslySetInnerHTML={{ __html: description }}></styledBook.description>
        </styledBook.grid>
      </styledBook.flex>
  );
}
