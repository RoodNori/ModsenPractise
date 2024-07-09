import * as React from 'react';
import Header from '../Header';
import Main from '../Main';
import Book from '../Book';
import { GlobalStyles } from './styled';
import { useAppSelector } from '../../store/index';
import { useAppDispatch } from '../../store/index';
import * as mainReducers from '../../store/reducers/renderMainReducer';

export default function App() {
  const dispatch = useAppDispatch();
  const render = useAppSelector((state) => state.renderMain);
  const [click, setClick] = React.useState<boolean>(false);
  const [tag, setTag] = React.useState<string>('');

  React.useEffect(() => {
    if (render.renderer)
      setClick(false);
  }, [render.click]);

  React.useLayoutEffect(() => {
    dispatch(mainReducers.setRender());
  }, []);

  function getBook(tag: string): void {
    setTag(tag);
    setClick(true);
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      {click ? <Book tag={tag}/>: <Main getBook={getBook}/>}
    </>
  );
}
