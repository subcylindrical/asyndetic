import { createGlobalStyle } from 'styled-components';
import grain from './components/directory/directory-images/transparent-grain.png';
import tv from './components/directory/directory-images/transparent-tv.webp';
import photoshopGrain from './components/directory/directory-images/photoshop-grain.png';
import invertPhotoshopGrain from './components/directory/directory-images/invert-photoshop-grain.png';

import { LinksContainer } from './components/directory/directory.styles';
import { StyledLink } from './components/directory-link/directory-link.styles';
import { NavBarContainer } from './components/nav-bar/nav-bar.styles';

export const GlobalStyle = createGlobalStyle`
body {
  ${(props) => {
    if (props.theme == 'dark') {
      return `
    background-image: url(${invertPhotoshopGrain});
    background-repeat: repeat;
    background-size: cover;
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
