import { THEME_ACTION_TYPES } from './theme.types';

const INITIAL_THEME_STATE = {
  theme: 'dark',
};

export const themeReducer = (state = INITIAL_THEME_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case THEME_ACTION_TYPES.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
};
