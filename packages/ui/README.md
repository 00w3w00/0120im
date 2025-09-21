# @0120/ui design tokens

Vanilla Extract tokens for spacing, typography, and color themes shared across apps in the Turborepo.

## Built-in themes

```tsx
import { colorThemes } from "@0120/ui/tokens/theme";

export const Root = ({ children }: { children: React.ReactNode }) => (
  <html className={colorThemes.light}>
    <body>{children}</body>
  </html>
);
```

`colorThemes.light` and `colorThemes.dark` include the preset color palettes while reusing the shared spacing/typography tokens.

## Creating a custom color palette

Create additional themes in one of your project's `.css.ts` modules so Vanilla Extract can statically evaluate the styles.

```ts
// your-app/tokens/brand.css.ts
import { createColorTheme, colorTokenPresets } from "@0120/ui/tokens/theme";

export const brandTheme = createColorTheme({
  ...colorTokenPresets.light,
  brand: "#3b82f6",
});
```

## Runtime color overrides

When you want to adjust only the colors at render time (e.g. per-tenant branding), wrap your subtree with the provider:

```tsx
import { ColorThemeProvider } from "@0120/ui/color-theme-provider";

<ColorThemeProvider colors={{ brand: "#22c55e" }}>
  {children}
</ColorThemeProvider>
```

The provider applies the light preset by default and overrides any supplied color tokens inline. Pass `theme="dark"` to start from the dark preset before applying overrides.

## Toggling light/dark in React

```tsx
import { useColorTheme } from "@0120/ui/hooks/use-color-theme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useColorTheme();

  return <button onClick={toggleTheme}>현재 테마: {theme}</button>;
};
```

훅은 HTML 루트에 테마 클래스를 붙여 주고, 로컬 스토리지와 시스템 다크 모드 변화도 자동으로 처리합니다.

## Provider로 감싸기

루트에서 한 번 감싸두면 어디서든 컨텍스트로 접근할 수 있습니다.

```tsx
import "@0120/ui/global";
import { ThemeProvider, useThemeContext } from "@0120/ui/providers/theme-provider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  return <button onClick={toggleTheme}>현재 테마: {theme}</button>;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
```

If you want more control, use the base tokens directly:

```ts
import { createTheme } from "@vanilla-extract/css";
import {
  baseTokenValues,
  colorTokenPresets,
  vars,
  type ResolvedTokens,
} from "@0120/ui/tokens/theme.css";

const colors: ResolvedTokens["color"] = {
  ...colorTokenPresets.light,
  brand: "#3b82f6",
};

export const brandTheme = createTheme(vars, {
  ...baseTokenValues,
  color: colors,
});
```

Consume the generated class name on your layout component to apply the tokens.
