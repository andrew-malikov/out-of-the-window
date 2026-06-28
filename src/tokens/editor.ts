import { color } from "../colors";
import { syntax } from "../palette";
import type { ThemeModeFragment } from "../types";

export const editorTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: { foreground: syntax("dark").keyword },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: { foreground: syntax("dark").invalidSoft },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: { foreground: syntax("dark").accentCyanSoft },
      },
      {
        scope: "token.info-token",
        settings: { foreground: color`oklch(67% 0.13 260.52)`.text },
      },
      {
        scope: "token.warn-token",
        settings: { foreground: color`oklch(71% 0.13 79.09)`.text },
      },
      {
        scope: "token.error-token",
        settings: { foreground: color`oklch(65% 0.21 25.22)`.text },
      },
      {
        scope: "token.debug-token",
        settings: { foreground: color`oklch(65% 0.19 309.32)`.text },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: { foreground: syntax("light").keyword },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: { foreground: syntax("light").invalid },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: { foreground: syntax("light").constant },
      },
    ],
  },
};
