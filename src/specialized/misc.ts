import type { ThemeModeFragment } from "../types";

export const miscTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [],
  },
  light: {
    tokenColors: [
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: "#4E7FA8",
          foreground: "#F7F9FA",
          content: "^M",
        },
      },
      {
        scope: "string variable",
        settings: { foreground: "#6A8094" },
      },
      {
        scope: "support.constant",
        settings: { foreground: "#2F86AD" },
      },
      {
        scope: "support.variable",
        settings: { foreground: "#404A53" },
      },
      {
        scope: "meta.module-reference",
        settings: { foreground: "#75808C" },
      },
    ],
  },
};
