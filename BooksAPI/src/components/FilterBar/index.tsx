import * as React from 'react';
import * as styledFilter from './styled';
import { useAppDispatch } from '../../store/index';
import { setFiltering, setSorting } from '../../store/reducers/searchReducer';

const categories: Array<string> = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

export default function Filter() {
  const dispatch = useAppDispatch();

  return (
    <styledFilter.flex>
      <styledFilter.grid>
        <styledFilter.span>Categories</styledFilter.span>
        <styledFilter.select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            dispatch(setFiltering(event.target.value));
          }}
        >
          <option value="">all</option>
          {categories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </styledFilter.select>
      </styledFilter.grid>
      <styledFilter.grid>
        <styledFilter.span>Sorting by</styledFilter.span>
        <styledFilter.select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            dispatch(setSorting(event.target.value));
          }}
        >
          <option value="">relevance</option>
          <option value="newest">newest</option>
        </styledFilter.select>
      </styledFilter.grid>
    </styledFilter.flex>
  );
}
