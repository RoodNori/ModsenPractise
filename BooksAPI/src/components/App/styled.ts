import { createGlobalStyle } from 'styled-components';
import {devices} from '../../constants/deviceSize';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Trebuchet MS';
    
  @media ${devices.mobileS} {
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    font-size: 11px;
  }

  @media ${devices.tablet} {
    font-size: 12px;
  }

  @media ${devices.laptop} {
    font-size: 14px;
  }

  @media ${devices.laptopL} {
    font-size: 16px;
  }

  @media ${devices.desktop} {
    font-size: 18px;
  }
 
  }
`;
