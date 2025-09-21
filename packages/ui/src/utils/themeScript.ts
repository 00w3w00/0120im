import { lightTheme, darkTheme } from "../themes/globalThemes.css";

export const themeScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      
      document.documentElement.classList.add(shouldBeDark ? '${darkTheme}' : '${lightTheme}');
    } catch (e) {
      console.warn('Failed to apply initial theme:', e);
    }
  })();
`;
