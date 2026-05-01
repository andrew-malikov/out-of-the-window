import { syntax } from '../palette'
import type { ThemeModeFragment } from "../types";

export const markupTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: "emphasis",
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: "strong",
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: "header",
        settings: {
          foreground: "#000080",
        },
      },
      {
        scope: "markup.heading",
        settings: {
          fontStyle: "bold",
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: syntax('dark').accentGreen,
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: syntax('dark').string,
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        scope: "markup.italic",
        settings: { foreground: syntax('dark').mutedForeground, fontStyle: "italic" },
      },
      {
        scope: "markup.bold",
        settings: { foreground: syntax('dark').mutedForeground, fontStyle: "bold" },
      },
      {
        scope: ["markup.underline"],
        settings: { fontStyle: "underline" },
      },
      {
        scope: ["markup.strikethrough"],
        settings: { fontStyle: "strikethrough" },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: "markup.italic",
        settings: { foreground: syntax('light').foreground, fontStyle: "italic" },
      },
      {
        scope: "markup.bold",
        settings: { foreground: syntax('light').foreground, fontStyle: "bold" },
      },
      {
        scope: ["markup.underline"],
        settings: { fontStyle: "underline" },
      },
      {
        scope: ["markup.strikethrough"],
        settings: { fontStyle: "strikethrough" },
      },
    ],
  },
};
