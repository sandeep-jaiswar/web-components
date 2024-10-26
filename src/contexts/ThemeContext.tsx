import { createContext } from 'react';
import { Theme } from '../types/Theme';
import defaultTheme from '../utils/theme';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export default ThemeContext;
