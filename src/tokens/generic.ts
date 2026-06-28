import { color } from "../colors";
import { syntax } from "../palette";
import type { ThemeModeFragment } from "../types";

export const genericTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: { foreground: color`oklch(70% 0.16 26.07)`.text },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity",
        ],
        settings: { foreground: syntax("dark").accentSky },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable",
        ],
        settings: { foreground: syntax("dark").mutedForeground },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression",
        ],
        settings: { foreground: syntax("dark").mutedForeground },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: { foreground: syntax("dark").accentGreenBright },
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: { foreground: syntax("dark").accentCyanSoft },
      },
      {
        scope: "support",
        settings: { foreground: syntax("dark").accentSky },
      },
      {
        scope: "variable.other",
        settings: { foreground: syntax("dark").mutedForeground },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: { foreground: syntax("light").number },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity",
        ],
        settings: { foreground: syntax("light").constant },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable",
        ],
        settings: { foreground: syntax("light").foreground },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression",
        ],
        settings: { foreground: syntax("light").foreground },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: { foreground: syntax("light").accentGreen },
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: { foreground: syntax("light").string },
      },
      {
        scope: "support",
        settings: { foreground: syntax("light").keyword },
      },
      {
        scope: "variable.other",
        settings: { foreground: syntax("light").foreground },
      },
    ],
  },
};
