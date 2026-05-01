import type { ThemeModeFragment } from "../types";

export const textmateTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: "constant.language",
        settings: {
          foreground: "#569cd6",
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
          foreground: "#b5cea8",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#9cdcfe",
        },
      },
      {
        scope: ["punctuation.terminator.statement"],
        settings: {
          foreground: "#6E88A6",
        },
      },
      {
        scope: ["storage.modifier", "keyword.operator.noexcept"],
        settings: {
          foreground: "#569cd6",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#d16969",
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
          foreground: "#569cd6",
        },
      },
      {
        scope: "keyword.other.unit",
        settings: {
          foreground: "#b5cea8",
        },
      },
      {
        name: "this.self",
        scope: "variable.language",
        settings: {
          foreground: "#569cd6",
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
          foreground: "#647D97",
        },
      },
      {
        name: "Constants and enums",
        scope: ["variable.other.constant", "variable.other.enummember"],
        settings: {
          foreground: "#4FC1FF",
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
          foreground: "#d16969",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#d7ba7d",
        },
      },
      {
        scope: "entity.name.label",
        settings: {
          foreground: "#C8C8C8",
        },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
};
