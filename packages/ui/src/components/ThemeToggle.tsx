"use client"

import { useTheme } from '../hooks/useTheme';
import { sprinkles } from '../sprinkles.css';
import { themeToggleButton } from './Button/button.css';

interface ThemeToggleProps {
    className?: string;
    lightIcon?: React.ReactNode;
    darkIcon?: React.ReactNode;
}

export function ThemeToggle({
    className = '',
    lightIcon = '☀️',
    darkIcon = '🌙'
}: ThemeToggleProps) {
    const { theme, toggleTheme, isHydrating } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`${themeToggleButton} ${className} ${sprinkles({
                opacity: isHydrating ? 50 : 100
            })}`} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}

        >
            {theme === 'light' ? darkIcon : lightIcon}
        </button>
    );
}