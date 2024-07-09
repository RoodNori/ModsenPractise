import styled from 'styled-components';

export const flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;
`;

export const grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 1vw;
  grid-template: 1fr / auto 1fr;
`;

export const span = styled.span`
  color: white;
  font-size: 1.1em;
`;

export const select = styled.select`
  color: grey;
  padding-right: 5vw;
  font-size: 1.2em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
