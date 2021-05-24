import { createContext } from 'react';
import { defaultTheme } from './defaultTheme';
import type { themeType } from './defaultTheme';

export const ThemeContext = createContext<themeType>(defaultTheme);
