"use client";

import { useState, useEffect, useCallback } from "react";
import { darkTheme, lightTheme } from "../themes/globalThemes.css";

export type Theme = "light" | "dark";

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  isLight: boolean;
  isHydrating: boolean;
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isHydrating, setIsHydrating] = useState(true);

  const applyTheme = useCallback((newTheme: Theme) => {
    const html = document.documentElement;

    html.classList.remove(lightTheme, darkTheme);

    html.classList.add(newTheme === "dark" ? darkTheme : lightTheme);

    localStorage.setItem("theme", newTheme);
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme, setTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setThemeState(initialTheme);
    applyTheme(initialTheme);

    setIsHydrating(false);
  }, [applyTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setThemeState(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyTheme]);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isHydrating,
  };
}
