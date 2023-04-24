import { createGlobalStyle } from 'styled-components';
import grain from './components/directory/directory-images/transparent-grain.png';
import tv from './components/directory/directory-images/transparent-tv.webp';

import { LinksContainer } from './components/directory/directory.styles';

export const GlobalStyle = createGlobalStyle`
body {
    background-image: ${(props) => (props.dark ? `url(${grain})` : '')};
    background-repeat: repeat;
    background-size: cover;
    background-color: ${(props) =>
      props.theme === 'dark' ? props.dark : 'white'};
      ${LinksContainer} {
        color: ${(props) => (props.theme === 'dark' ? '' : 'black')}
      }
}`;
