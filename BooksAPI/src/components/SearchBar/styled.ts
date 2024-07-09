import styled from 'styled-components';
import icon from '../../assets/Header/search1.svg';

export const flex = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const input = styled.input`
  font-size: 1.2em;
  width: 50%;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const button = styled.button`
  flex-basis: 2%;
  border: 0;
  background-color: white;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;
