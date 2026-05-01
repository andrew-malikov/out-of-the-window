import { syntax } from '../palette'
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
        settings: { foreground: "#768390" },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: { foreground: syntax('dark').invalidSoft },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: { foreground: syntax('dark').accentCyanSoft },
      },
      {
        scope: "token.info-token",
        settings: { foreground: "#6796E6" },
      },
      {
        scope: "token.warn-token",
        settings: { foreground: "#CD9731" },
      },
      {
        scope: "token.error-token",
        settings: { foreground: "#F44747" },
      },
      {
        scope: "token.debug-token",
        settings: { foreground: "#B267E6" },
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
        settings: { foreground: syntax('light').keyword },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: { foreground: syntax('light').invalid },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: { foreground: syntax('light').constant },
      },
    ],
  },
};
