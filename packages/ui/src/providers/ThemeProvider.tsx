'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useTheme, Theme } from '../hooks/useTheme';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
    isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const themeData = useTheme();

    return (
        <ThemeContext.Provider value={themeData}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }
    return context;
}