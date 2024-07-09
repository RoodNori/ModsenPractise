import styled from 'styled-components';
import shapka from '../../assets/Header/books.jpg';

export const grid = styled.div`
  display: grid;
  height: 30vh;
  width: 100vw;
  background-image: url(${shapka});
  background-size: cover;
  grid-template: repeat(3, 1fr) / 1fr;
`;

export const h1 = styled.h1`
text-align: center;
  color: white;
  font-size: 3em;
`;
