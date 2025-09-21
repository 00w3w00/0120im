import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../sprinkles.css";
export const themeToggleButton = style([
  {
    padding: "4px",
    margin: "4px",
    scale: 1,
    transition: "scale 0.25s ",

    ":hover": {
      scale: 1.1,
    },
    ":active": {
      scale: 0.85,
    },
  },
]);
