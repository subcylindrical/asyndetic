import { NavBarContainer, ThemeToggle } from './nav-bar.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context.component';
import { Link, Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../index.styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NavBar = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const location = useLocation();
  const formatPageName = (page) => {
    if (page.match(/^\/$/)) return 'Home';
    return page.replace(/[/-]/g, ' ');
  };

  return (
    <>
      <NavBarContainer>
        <GlobalStyle dark={'#1f1f1f'} theme={theme} />
        <Link to={'/'}>Zachary LeHouillier</Link>
        <span>{formatPageName(location.pathname)}</span>
        <ThemeToggle>
          <label>theme: </label>
          <input onChange={setTheme} type={'checkbox'} />
        </ThemeToggle>
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
