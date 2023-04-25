import { createGlobalStyle } from 'styled-components';
import grain from './components/directory/directory-images/transparent-grain.png';
import tv from './components/directory/directory-images/transparent-tv.webp';

import { LinksContainer } from './components/directory/directory.styles';
import { StyledLink } from './components/directory-link/directory-link.styles';
import { NavBarContainer } from './components/nav-bar/nav-bar.styles';

export const GlobalStyle = createGlobalStyle`
body {
    background-image: ${(props) => (props.dark ? `url(${grain})` : '')};
    background-repeat: repeat;
    background-size: cover;
    background-color: ${(props) =>
      props.theme === 'dark' ? props.dark : 'rgba(255, 224, 224, 1)'};
    ${LinksContainer} {
        color: ${(props) => (props.theme === 'dark' ? '#bab1b1' : 'black')}
    }
    ${StyledLink} {
      &:hover {
        // color: rgba(245, 181, 39, 1);
      }
    }
    ${(props) => {
      if (props.theme == 'dark') {
        return `${NavBarContainer} {
          background-color: rgba(255, 224, 224, 1);
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
