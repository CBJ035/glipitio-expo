import React, { createContext, useContext, useState, useCallback } from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const getInitialTheme = (): Theme => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    return (stored === 'dark' || stored === 'light') ? stored : 'light';
  }
  return 'light';
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const toggleTheme = useCallback(() => {
    setTheme(current => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      if (Platform.OS === 'web') {
        localStorage.setItem('theme', newTheme);
        document.body.style.backgroundColor = Colors[newTheme].background;
        document.documentElement.style.backgroundColor = Colors[newTheme].background;
      }
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorScheme(): [Theme, () => void] {
  const context = useContext(ThemeContext);
  if (!context) {
    return [getInitialTheme(), () => {}];
  }
  return [context.theme, context.toggleTheme];
} 