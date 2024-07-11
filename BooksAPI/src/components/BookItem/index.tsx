import * as React from 'react';
import * as styledBookItem from './styled';

interface IProps {
  title: string;
  authors: Array<string>;
  categorie: string;
  cover: string;
  tag: string;
  getBook: (tag: string) => void;
}

export default function BookItem({ title, authors, categorie, cover, tag, getBook}: IProps) {
  function getDescription(event: React.MouseEvent<HTMLDivElement>): void {
    getBook(tag);
  }

  return (
    <styledBookItem.flex onClick={getDescription}>
      <styledBookItem.img src={cover} />
      <styledBookItem.categorie>{categorie}</styledBookItem.categorie>
      <styledBookItem.title>{title}</styledBookItem.title>
      <styledBookItem.author>
      {authors.map((item) => (
        <>{item.trim().replace(',', '')}, </>
      ))}
      </styledBookItem.author>
    </styledBookItem.flex>
  );
}
