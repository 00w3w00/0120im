import { globalStyle, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../utils/sprinkles.css";
import { vars } from "../../themes/globalThemes.css";

const buttonBase = style({
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",

  ":focus-visible": {
    outline: `1px solid ${vars.color.gray["400"]}`,
    outlineOffset: "1px",
  },
  ":active": {
    transform: "scale(0.95)",
  },
  ":disabled": {
    opacity: "0.5",
    cursor: "not-allowed",
    transform: "none",
  },
});
const iconOnlyStyle = style({
  aspectRatio: "1",
  padding: "0 !important",

  selectors: {
    '&[data-size="xs"]': {
      width: "24px",
      height: "24px",
    },
    '&[data-size="sm"]': {
      width: "32px",
      height: "32px",
    },
    '&[data-size="md"]': {
      width: "40px",
      height: "40px",
    },
    '&[data-size="lg"]': {
      width: "48px",
      height: "48px",
    },
  },
});

export const button = recipe({
  base: [
    sprinkles({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      outline: "none",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      borderRadius: "md",
      cursor: "pointer",
    }),
    buttonBase,
  ],

  variants: {
    size: {
      xs: sprinkles({
        paddingX: 2,
        paddingY: 1,
        fontSize: "xs",
        gap: 1,
      }),
      sm: sprinkles({
        paddingX: 3,
        paddingY: 2,
        fontSize: "sm",
        gap: 2,
      }),
      md: sprinkles({
        paddingX: 4,
        paddingY: 3,
        fontSize: "md",
        gap: 2,
      }),
      lg: sprinkles({
        paddingX: 6,
        paddingY: 4,
        fontSize: "lg",
        gap: 3,
      }),
    },

    variant: {
      solid: {
        backgroundColor: vars.color.primary[500],
        color: "#ffffff",
        border: "none",
      },
      outline: {
        backgroundColor: "transparent",
        color: vars.color.font,
        border: `1px solid ${vars.color.borderColor}`,
      },
      ghost: {
        backgroundColor: "transparent",
        color: vars.color.font,
        border: "none",
        ":hover": {
          background: vars.color.gray[100],
        },
      },
      danger: {
        backgroundColor: "#ef4444",
        color: "#ffffff",
        border: "none",
        ":hover:not(:disabled)": {
          backgroundColor: "#dc2626",
        },
      },
    },

    iconOnly: {
      true: iconOnlyStyle,
    },

    fullWidth: {
      true: sprinkles({
        width: "full",
      }),
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
