import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./themes/globalThemes.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  minHeight: "100vh",
  minWidth: "375px",
  maxWidth: "100vw",
  backgroundColor: vars.color.background,
  color: vars.color.font,
});

globalStyle("body", {
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.normal,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
});

globalStyle("p", {
  margin: 0,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input, textarea, select", {
  font: "inherit",
});

globalStyle("ul, ol", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});

globalStyle("button", {
  background: "none",
  outline: "none",
  cursor: "pointer",
  border: "none",
});
