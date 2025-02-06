import React from 'react';
import { useState, useCallback, createContext, useContext } from 'react';
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

// Get initial theme without hooks
const getInitialTheme = (): Theme => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    return (stored === 'dark' || stored === 'light') ? stored : 'light';
  }
  return 'light';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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
};

export const useColorScheme = (): [Theme, () => void] => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return default values if used outside provider
    return [getInitialTheme(), () => {}];
  }
  return [context.theme, context.toggleTheme];
};
