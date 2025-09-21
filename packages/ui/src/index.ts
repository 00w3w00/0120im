import "./global.css";

export { vars, lightTheme, darkTheme } from "./themes/globalThemes.css";

export { useTheme } from "./hooks/useTheme";
export { ThemeProvider, useThemeContext } from "./providers/ThemeProvider";
export { ThemeToggle } from "./components/ThemeToggle";
export { themeScript } from "./utils/themeScript";

export type { Theme } from "./hooks/useTheme";
