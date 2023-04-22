import { useEffect, useReducer, createContext } from 'react';

export const themeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_THEME':
      console.log('toggling theme');
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      console.log('reducer failed');
  }
};

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });
  const { theme } = state;
  const setTheme = () => {
    console.log('setTheme called');
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value = { theme, setTheme };

  useEffect(() => {
    console.log('state was changed');
  }, [state]);

  console.log(state);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
