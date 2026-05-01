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
          foreground: "#569cd6",
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: "#b5cea8",
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: "#ce9178",
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: "#569cd6",
        },
      },
      {
        scope: "markup.italic",
        settings: { foreground: "#ADBAC7", fontStyle: "italic" },
      },
      {
        scope: "markup.bold",
        settings: { foreground: "#ADBAC7", fontStyle: "bold" },
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
        settings: { foreground: "#2C3135", fontStyle: "italic" },
      },
      {
        scope: "markup.bold",
        settings: { foreground: "#2C3135", fontStyle: "bold" },
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
