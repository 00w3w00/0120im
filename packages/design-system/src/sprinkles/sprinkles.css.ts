import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { colors, spacing, fontSizes, fontWeights, lineHeights } from '../tokens';

// 반응형 속성 정의
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1280px)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop', 'wide'],
  properties: {
    // 레이아웃
    display: ['none', 'flex', 'block', 'inline', 'grid', 'inline-flex', 'inline-block'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    gap: spacing,
    padding: spacing,
    paddingTop: spacing,
    paddingRight: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    margin: spacing,
    marginTop: spacing,
    marginRight: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    width: { ...spacing, full: '100%', auto: 'auto', screen: '100vw', half: '50%' },
    height: { ...spacing, full: '100%', auto: 'auto', screen: '100vh', half: '50%' },
    maxWidth: {
      none: 'none',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    top: spacing,
    right: spacing,
    bottom: spacing,
    left: spacing,

    // 타이포그래피
    fontSize: fontSizes,
    fontWeight: fontWeights,
    lineHeight: lineHeights,
    textAlign: ['left', 'center', 'right', 'justify'],
    fontStyle: ['normal', 'italic'],
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'],
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    inset: ['top', 'right', 'bottom', 'left'],
  },
});

// 색상 관련 속성 정의
const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'light',
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    boxShadowColor: colors,
    outlineColor: colors,
    fill: colors,
    stroke: colors,
  },
});

// 인터랙션 관련 속성 정의
const interactionProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' },
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
  properties: {
    opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    transform: {
      none: 'none',
      grow: 'scale(1.05)',
      shrink: 'scale(0.95)',
      rotate5: 'rotate(5deg)',
      rotateNeg5: 'rotate(-5deg)',
    },
    cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'not-allowed'],
  },
});

// 보더 및 쉐도우 관련 속성 정의
const decorationProperties = defineProperties({
  properties: {
    borderWidth: {
      none: '0',
      thin: '1px',
      normal: '2px',
      thick: '4px',
    },
    borderStyle: ['none', 'solid', 'dashed', 'dotted', 'double'],
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },
    outlineWidth: {
      none: '0',
      thin: '1px',
      normal: '2px',
      thick: '4px',
    },
    outlineStyle: ['none', 'solid', 'dashed', 'dotted', 'double'],
    outlineOffset: {
      none: '0',
      sm: '1px',
      md: '2px',
      lg: '4px',
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  interactionProperties,
  decorationProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
