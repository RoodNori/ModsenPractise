import * as React from 'react';
import * as styledSearch from './styled';
import { useAppDispatch } from '../../store/index';
import { useAppSelector } from '../../store/index';
import { setTitle } from '../../store/reducers/searchReducer';
import { setClick } from '../../store/reducers/renderMainReducer';

export default function Search() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.load);
  const [search, setSearch] = React.useState<string>('');

  function setInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <styledSearch.flex>
      <styledSearch.input
        disabled={loading}
        type='search'
        onInput={setInput}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            dispatch(setTitle(search));
            dispatch(setClick());
          }
        }}
      />
      <styledSearch.button
      disabled={loading}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          dispatch(setTitle(search));
          dispatch(setClick());
        }}
      />
    </styledSearch.flex>
  );
}
