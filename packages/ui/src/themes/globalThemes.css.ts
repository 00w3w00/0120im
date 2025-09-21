import { createThemeContract, createTheme } from "@vanilla-extract/css";
import { baseTokens } from "../tokens/base.css";

const theme = createThemeContract({
  color: {
    background: null,
    font: null,
    borderColor: null,
  },
});

export const lightTheme = createTheme(theme, {
  color: {
    background: "#ffffff",
    font: "#000000",
    borderColor: "#e2e8f0",
  },
});

export const darkTheme = createTheme(theme, {
  color: {
    background: "#1a1a1a",
    font: "#ffffff",
    borderColor: "#374151",
  },
});

export const vars = { ...baseTokens, color: theme.color };
