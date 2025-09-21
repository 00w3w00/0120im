import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { baseTokens } from "../tokens/base.css";

export const colorPalette = createThemeContract({
  color: {
    background: null,
    font: null,
    borderColor: null,
    transparent: null,
    primary: {
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
    },

    gray: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
      950: null,
    },
  },
});

export const lightTheme = createTheme(colorPalette, {
  color: {
    background: "#ffffff",
    font: "#1f2937",
    borderColor: "#e5e7eb",
    transparent: "transparent",

    primary: {
      400: "#ff7875",
      500: "#ff6b6b",
      600: "#ff5252",
      700: "#e53e3e",
      800: "#c53030",
    },

    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },
  },
});

export const darkTheme = createTheme(colorPalette, {
  color: {
    background: "#111827",
    font: "#f9fafb",
    borderColor: "#374151",
    transparent: "transparent",
    primary: {
      400: "#ffa8a8",
      500: "#ff9999",
      600: "#ff8080",
      700: "#ff6b6b",
      800: "#ff5252",
    },
    gray: {
      50: "#030712",
      100: "#111827",
      200: "#1f2937",
      300: "#374151",
      400: "#4b5563",
      500: "#6b7280",
      600: "#9ca3af",
      700: "#d1d5db",
      800: "#e5e7eb",
      900: "#f3f4f6",
      950: "#f9fafb",
    },
  },
});

export const vars = { ...baseTokens, color: colorPalette.color };
