import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css';

// 기본 컬러 스케일 정의 (고정값)
export const fixedColorTokens = {
  white: '#FFFFFF',
  black: '#000000',

  // 그레이 스케일
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // 다른 색상 팔레트들
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  yellow: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },

  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
    950: '#022C22',
  },

  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
};

export const colorContract = createGlobalThemeContract({
  primary: {
    50: 'color-primary-50',
    100: 'color-primary-100',
    200: 'color-primary-200',
    300: 'color-primary-300',
    400: 'color-primary-400',
    500: 'color-primary-500',
    600: 'color-primary-600',
    700: 'color-primary-700',
    800: 'color-primary-800',
    900: 'color-primary-900',
    950: 'color-primary-950',
  },
});

export const semanticColors = {
  text: {
    primary: fixedColorTokens.gray[900],
    secondary: fixedColorTokens.gray[700],
    tertiary: fixedColorTokens.gray[500],
    disabled: fixedColorTokens.gray[400],
    inverse: fixedColorTokens.white,
  },
  background: {
    default: fixedColorTokens.white,
    subtle: fixedColorTokens.gray[50],
    muted: fixedColorTokens.gray[100],
    strong: fixedColorTokens.gray[900],
  },
  border: {
    default: fixedColorTokens.gray[200],
    strong: fixedColorTokens.gray[400],
    focus: colorContract.primary[500],
  },
  status: {
    info: fixedColorTokens.blue[500],
    success: fixedColorTokens.green[500],
    warning: fixedColorTokens.yellow[500],
    error: fixedColorTokens.red[500],
  },
};

export const colors = {
  ...fixedColorTokens,
  primary: colorContract.primary,
  ...semanticColors,
};
