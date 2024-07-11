import * as React from 'react';
import * as styledFilter from './styled';
import { useAppDispatch } from '../../store/index';
import { setFiltering, setSorting } from '../../store/reducers/searchReducer';

const categories: Array<string> = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

export default function Filter() {
  const dispatch = useAppDispatch();

  function setOption(select: string) {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (select === 'filter')
        dispatch(setFiltering(event.target.value));
      else dispatch(setSorting(event.target.value));
    }
  }

  return (
    <styledFilter.flex>
      <styledFilter.grid>
        <styledFilter.span>Categories</styledFilter.span>
        <styledFilter.select
          onChange={setOption('filter')}
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
          onChange={setOption('sort')}
        >
          <option value="">relevance</option>
          <option value="newest">newest</option>
        </styledFilter.select>
      </styledFilter.grid>
    </styledFilter.flex>
  );
}
