import { syntax } from '../palette'
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
          background: syntax('light').number,
          foreground: "#F7F9FA",
          content: "^M",
        },
      },
      {
        scope: "string variable",
        settings: { foreground: syntax('light').string },
      },
      {
        scope: "support.constant",
        settings: { foreground: syntax('light').constant },
      },
      {
        scope: "support.variable",
        settings: { foreground: syntax('light').property },
      },
      {
        scope: "meta.module-reference",
        settings: { foreground: syntax('light').keyword },
      },
    ],
  },
};
