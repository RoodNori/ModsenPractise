import styled from 'styled-components';

const span = styled.span`
  font-size: 1.1em;
`;

export const grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
`;

export const flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const categorie = styled(span)`
  opacity: 0.5;
`;

export const title = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

export const description = styled.p`
  font-size: 1.1em;
  border: 1px black solid;
`;

export const author = styled(span)`
  text-decoration: underline;
  opacity: 0.5;
`;

export const img = styled.img`
  background-color: rgb(243, 242, 241);
  //align-self: center;
`;
