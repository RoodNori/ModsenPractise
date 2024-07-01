import * as React from 'react';
import * as hStyle from './styled';

const categories: Array<string> = ['art', 'biogaphy', 'computers', 'history', 'medical', 'poetry'];

function Search() {
  return (
    <hStyle.sFlex>
      <input type="search"></input>
      <hStyle.iconDiv />
    </hStyle.sFlex>
  );
}

function Filter() {
  return (
    <hStyle.flexDiv>
      <hStyle.fGrid>
        <hStyle.span>Categories</hStyle.span>
        <hStyle.select>
          <option value="">all</option>
          {categories.map(item => 
            <option value={item}>{item}</option>
          )}
        </hStyle.select>
      </hStyle.fGrid>
      <hStyle.fGrid>
        <hStyle.span>Sorting by</hStyle.span>
        <hStyle.select>
          <option value="">relevance</option>
          <option value="newest">newest</option>
        </hStyle.select>
      </hStyle.fGrid>
    </hStyle.flexDiv>
  );
}

export default function Header() {
  return (
    <hStyle.hGrid>
      <hStyle.h1>Search for books</hStyle.h1>
      <Search />
      <Filter />
    </hStyle.hGrid>
  );
}
