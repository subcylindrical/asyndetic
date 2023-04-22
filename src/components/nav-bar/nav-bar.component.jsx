import { NavBarContainer, Toggle } from './nav-bar.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context.component';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../index.styles';

const NavBar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <NavBarContainer>
        <GlobalStyle dark={'#1f1f1f'} theme={theme} />
        <Toggle>
          <label>theme: </label>
          <input onChange={setTheme} type={'checkbox'} />
        </Toggle>
        <span>Zachary LeHouillier</span>
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
