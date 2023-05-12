import { NavBarContainer, ThemeToggle } from './nav-bar.styles';
import { Link, Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../index.styles';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

import SettingsGear from '../settings-gear/settings-gear.component';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { THEME_ACTION_TYPES } from '../../store/theme/theme.types';
import { themeSelector } from '../../store/theme/theme.selectors';

const NavBar = () => {
  const navThemeState = useSelector(themeSelector);
  const dispatch = useDispatch();

  const location = useLocation();
  const formatPageName = (page) => {
    if (page.match(/^\/$/)) return 'Home';
    return page.replace(/[/-]/g, ' ');
  };

  return (
    <Fragment>
      <NavBarContainer>
        <GlobalStyle dark={'#1f1f1f'} theme={navThemeState} />
        <Link to={'/'}>Zachary LeHouillier</Link>
        <span>{formatPageName(location.pathname)}</span>
        <ThemeToggle>
          <label>theme: </label>
          <input
            onChange={() => dispatch({ type: THEME_ACTION_TYPES.TOGGLE_THEME })}
            type={'checkbox'}
          />
        </ThemeToggle>
      </NavBarContainer>
      <SettingsGear />
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
