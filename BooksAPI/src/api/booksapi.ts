interface getBooksProps {
  title: string;
  ordering: string;
  filtering: string;
  offset: number;
}

type getBooksResult = {
  totalItems: number;
  items: Array<Book>;
};

export class Book {
  readonly title: string;
  readonly authors: Array<string>;
  readonly categories: Array<string>;
  readonly cover: string;
  readonly description: string;
  readonly tag: string;

  constructor(obj) {
    this.title = obj.volumeInfo.title ?? '';
    this.authors = obj.volumeInfo.authors ?? [];
    this.categories = obj.volumeInfo.categories ?? [];
    this.cover = obj.volumeInfo.imageLinks.thumbnail ?? '';
    this.description = obj.volumeInfo.description ?? '';
    this.tag = obj.etag ?? '';
  }
}

export async function getBooks({
  title,
  ordering,
  filtering,
  offset,
}: getBooksProps): Promise<getBooksResult> {
  let result: getBooksResult = {
    totalItems: 0,
    items: [],
  };

  try {
    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+subject:${filtering}&orderBy=${ordering}&startIndex=${offset}&maxResults=30&key=AIzaSyDxQGJjZmTG3riwKRkypA301varGYd7U5g`,
      {
        method: 'GET',
        mode: 'cors',
      },
    );
    let json = await res.json();
    
    result.totalItems = json.totalItems;
    for (let i = 0; i < json.items.length; i++) {
      result.items.push(new Book(json.items[i]));
    }
  } catch (err) {}

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
