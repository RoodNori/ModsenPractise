import * as React from 'react';
import * as styledSearch from './styled';
import { useAppDispatch } from '../../store/index';
import { setTitle } from '../../store/reducers/searchReducer';
import { setClick } from '../../store/reducers/renderMainReducer';

export default function Search() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = React.useState<string>('');

  return (
    <styledSearch.flex>
      <styledSearch.input
        type="search"
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            dispatch(setTitle(search));
            dispatch(setClick());
          }
        }}
       />
      <styledSearch.button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setTitle(search));
        dispatch(setClick());
      }} />
    </styledSearch.flex>
  );
}
