import { syntax } from '../palette'
import type { ThemeModeFragment } from "../types";

export const textmateTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: "constant.language",
        settings: {
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        scope: [
          "constant.numeric",
          "variable.other.enummember",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent",
        ],
        settings: {
          foreground: syntax('dark').accentGreen,
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: syntax('dark').accentCyan,
        },
      },
      {
        scope: ["punctuation.terminator.statement"],
        settings: {
          foreground: syntax('dark').keyword,
        },
      },
      {
        scope: ["storage.modifier", "keyword.operator.noexcept"],
        settings: {
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: syntax('dark').accentRed,
        },
      },
      {
        scope: [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike",
        ],
        settings: {
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        scope: "keyword.other.unit",
        settings: {
          foreground: syntax('dark').accentGreen,
        },
      },
      {
        name: "this.self",
        scope: "variable.language",
        settings: {
          foreground: syntax('dark').accentBlue,
        },
      },
      {
        name: "Control flow / Special keywords",
        scope: [
          "keyword.control",
          "source.cpp keyword.operator.new",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.directive.using",
          "keyword.other.operator",
          "entity.name.operator",
        ],
        settings: {
          foreground: syntax('dark').storage,
        },
      },
      {
        name: "Constants and enums",
        scope: ["variable.other.constant", "variable.other.enummember"],
        settings: {
          foreground: syntax('dark').accentSky,
        },
      },
      {
        scope: [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp",
        ],
        settings: {
          foreground: syntax('dark').accentRed,
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: syntax('dark').function,
        },
      },
      {
        scope: "entity.name.label",
        settings: {
          foreground: syntax('dark').accentGray,
        },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
};
