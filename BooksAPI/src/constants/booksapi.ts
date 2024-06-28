interface getBooksProps {
  title: string;
  ordering: string;
  filtering: string;
  offset: number;
}

interface getBooksResultProps {
  totalItems: number;
  items: Array<Book>;
}

export class Book {
  readonly title: string;
  readonly authors: Array<string>;
  readonly categories: Array<string>;
  readonly cover: string;

  constructor(obj: any) {
    this.title = obj.volumeInfo.title ?? "";
    this.authors = obj.volumeInfo.authors ?? [];
    this.categories = obj.volumeInfo.categories ?? [];
    this.cover = obj.volumeInfo.imageLinks.thumbnail ?? "";
  }
}

export function getBooks({
  title,
  ordering,
  filtering,
  offset = 0,
}: getBooksProps): getBooksResultProps {
  let result: getBooksResultProps;
  let books: Array<Book> = new Array<Book>();

  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+subject:${filtering}&orderBy=${ordering}&startIndex=${offset}&maxResults=30`,
  )
    .then((res) => res.json())
    .then((json) => {
      result.totalItems = json.totalItems;
      for (let n: number = 0; n < json.totalItems; n++) {
        books.push(new Book(json.items[n]));
      }
    });

  result.items = books;

  return result;
}

export function getBook(id: string): Book {
  let book: Book;

  fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((res) => res.json())
    .then((json) => {
      book = new Book(json);
    });

  return book;
}
