import { createGlobalStyle } from 'styled-components';

import svg from './components/directory/directory-images/svg2.svg';
import pinksvg from './components/directory/directory-images/pinksvg2transparent.svg';

import { LinksContainer } from './components/directory/directory.styles';
import { NavBarContainer } from './components/nav-bar/nav-bar.styles';
import { StyledLink } from './components/directory-link/directory-link.styles';

export const GlobalStyle = createGlobalStyle`
body {
  ${(props) => {
    if (props.theme == 'dark') {
      return `
    background-image: url(${svg});
    background-repeat: repeat;
    background-size: cover;
    color: white;

      ${StyledLink} {
        color: white;
      }

      `;
    }
  }}
    
    background-color: ${(props) =>
      props.theme === 'dark' ? props.dark : 'rgba(255, 224, 224, 1)'};
    ${LinksContainer} {
        color: ${(props) => (props.theme === 'dark' ? '#bab1b1' : 'black')}
    }
    ${(props) => {
      if (props.theme == 'dark') {
        return `${NavBarContainer} {
          background-image: url(${pinksvg});
          background-repeat: repeat;
          background-size: cover;
          background-color: #D36582;
          color: ${props.dark};
        }`;
      } else {
        return `${NavBarContainer} {
          background-color: ${props.dark};
          color: white;
        }`;
      }
    }}
    
}`;
