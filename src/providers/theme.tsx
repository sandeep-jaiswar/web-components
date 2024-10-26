import { ReactNode, useState } from 'react';
import { Theme } from '../types/Theme';
import defaultTheme from '../utils/theme';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
