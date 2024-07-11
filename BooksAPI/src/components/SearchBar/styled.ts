import styled from 'styled-components';
import icon from '../../assets/SearchBar/search.svg';
import { devices } from '../../constants/deviceSize';

export const flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${devices.mobileS} {
    height: 20%;
  }

  @media ${devices.mobileM} {
    height: 30%;
  }

  @media ${devices.mobileL} {
    height: 40%;
  }

  @media ${devices.tablet} {
    height: 50%;
  }
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
  border: 0;
  background-color: white;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media ${devices.mobileS} {
    flex-basis: 8%;
  }

  @media ${devices.mobileM} {
    flex-basis: 6%;
  }

  @media ${devices.mobileL} {
    flex-basis: 4%;
  }

  @media ${devices.tablet} {
    flex-basis: 2%;
  }
`;
