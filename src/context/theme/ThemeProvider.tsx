import type { ReactElement } from 'react';
import { ThemeContext } from './ThemeContext';
import { defaultTheme } from './defaultTheme';

type Props = {
  children: ReactElement;
};
export const ThemeProvider = ({ children }: Props) => (
  <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
);
