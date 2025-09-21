"use client"
import Button from './Button'
import { useTheme } from '../hooks/useTheme';
import { sprinkles } from '../utils/sprinkles.css';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({
    className = '',

}: ThemeToggleProps) {
    const { theme, toggleTheme, isHydrating } = useTheme();

    return (
        <Button
            iconOnly
            size='sm'
            variant='ghost'
            onClick={toggleTheme}
            className={` ${className} ${sprinkles({
                opacity: isHydrating ? 50 : 100
            })}`} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    );
}