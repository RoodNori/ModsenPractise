import * as React from 'react';
import * as styledBookItem from './styled';

interface IProps {
  title: string;
  authors: Array<string>;
  categorie: string;
  cover: string;
}

export default function BookItem({ title, authors, categorie, cover}: IProps) {
  return (
    <styledBookItem.grid>
      <styledBookItem.img src={cover} />
      <styledBookItem.categorie>{categorie}</styledBookItem.categorie>
      <styledBookItem.title>{title}</styledBookItem.title>
      <styledBookItem.p>
      {authors.map((item, index) => (
        <styledBookItem.author key={index}>{item.trim().replace(',', '')}, </styledBookItem.author>
      ))}
      </styledBookItem.p>
    </styledBookItem.grid>
  );
}
