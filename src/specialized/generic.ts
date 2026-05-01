import type { ThemeModeFragment } from "../types";

export const genericTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: { foreground: "#F47067" },
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
        settings: { foreground: "#6CB6FF" },
      },
      {
        scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
        settings: { foreground: "#F69D50" },
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
        settings: { foreground: "#ADBAC7" },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: { foreground: "#8DDB8C" },
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: { foreground: "#96D0FF" },
      },
      {
        scope: "support",
        settings: { foreground: "#6CB6FF" },
      },
      {
        scope: "variable.other",
        settings: { foreground: "#ADBAC7" },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: { foreground: "#4E7FA8" },
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
        settings: { foreground: "#2F86AD" },
      },
      {
        scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
        settings: { foreground: "#2C3135" },
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
        settings: { foreground: "#2C3135" },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: { foreground: "#4F956A" },
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: { foreground: "#6A8094" },
      },
      {
        scope: "support",
        settings: { foreground: "#75808C" },
      },
      {
        scope: "variable.other",
        settings: { foreground: "#2C3135" },
      },
    ],
  },
};
