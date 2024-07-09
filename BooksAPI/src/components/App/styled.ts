import { createGlobalStyle } from 'styled-components';

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

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
