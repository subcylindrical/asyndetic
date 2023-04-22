import Directory from '../../components/directory/directory.component';
import { GlobalStyle } from '../../index.styles';
import { useReducer } from 'react';

import NavBar from '../../components/nav-bar/nav-bar.component';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context.component';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Directory />
    </div>
  );
};

export default Home;
