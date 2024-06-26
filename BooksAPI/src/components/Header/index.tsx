import * as React from 'react';

interface HeaderProps {}

function Search() {
  return (
    <div>
      <input type="search"></input>
      <div></div>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <span>Categories</span>
      <select>
        <option value="">all</option>
        <option value="art">art</option>
        <option value="biogaphy">biogaphy</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
      <span>Sorting by</span>
      <select>
        <option value="">revelance</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}

export default function Header() {
  return (
    <div>
      <h1>Search for book</h1>
      <Search />
      <Filter />
    </div>
  );
}
