"use client";

import { useColorTheme } from "@0120/ui/hooks/use-color-theme";

export function ThemeToggleButton() {
    const { theme, toggleTheme } = useColorTheme({
        defaultTheme: "light",
        storageKey: "color-theme",
        syncWithSystem: true,
    });

    return (
        <button onClick={toggleTheme}>
            현재 테마: {theme === "light" ? "라이트" : "다크"}
        </button>
    );
}
