import * as React from 'react';
import * as styledHeader from './styled';
import Search from '../SearchBar';
import Filter from '../FilterBar';

export default function Header() {
  return (
    <styledHeader.grid>
      <styledHeader.h1>Search for books</styledHeader.h1>
      <Search />
      <Filter />
    </styledHeader.grid>
  );
}
