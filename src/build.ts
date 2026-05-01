import {
  darkLegacyTokenColors,
  lightLegacyTokenColors,
} from "./legacy/token-colors";
import { darkUiColors, lightUiColors } from "./ui/colors";
import { csharpTokens } from "./languages/csharp";
import { cssTokens } from "./languages/css";
import { goTokens } from "./languages/go";
import { groovyTokens } from "./languages/groovy";
import { htmlTokens } from "./languages/html";
import { javaTokens } from "./languages/java";
import { jsonTokens } from "./languages/json";
import { markdownTokens } from "./languages/markdown";
import { pythonTokens } from "./languages/python";
import { rubyTokens } from "./languages/ruby";
import { typescriptTokens } from "./languages/typescript";
import { sharedSemanticTokens } from "./semantic/shared";
import { diffTokens } from "./specialized/diff";
import { embeddedTokens } from "./specialized/embedded";
import { functionTokens } from "./specialized/functions";
import { regexTokens } from "./specialized/regex";
import { typeExtensionTokens } from "./specialized/type-extensions";
import { variableTokens } from "./specialized/variables";
import { sharedTokens } from "./tokens/shared";
import type {
  ThemeDocument,
  ThemeFragment,
  ThemeMode,
  ThemeModeFragment,
  ThemeRule,
} from "./types";

const specializedFragments: ThemeModeFragment[] = [
  embeddedTokens,
  diffTokens,
  regexTokens,
  functionTokens,
  typeExtensionTokens,
  variableTokens,
];

const languageFragments: ThemeModeFragment[] = [
  csharpTokens,
  cssTokens,
  goTokens,
  groovyTokens,
  htmlTokens,
  javaTokens,
  jsonTokens,
  markdownTokens,
  pythonTokens,
  rubyTokens,
  typescriptTokens,
];

const baseDocuments: Record<
  ThemeMode,
  Omit<ThemeDocument, "colors" | "tokenColors" | "semanticTokenColors">
> = {
  dark: {
    $schema: "vscode://schemas/color-theme",
    name: "Window dark",
    type: "dark",
    semanticHighlighting: true,
  },
  light: {
    $schema: "vscode://schemas/color-theme",
    name: "Window Light",
    semanticHighlighting: true,
  },
};

const legacyTokenColors: Record<ThemeMode, ThemeRule[]> = {
  dark: darkLegacyTokenColors.filter((rule: ThemeRule) =>
    keepLegacyTokenRule("dark", rule),
  ),
  light: lightLegacyTokenColors.filter((rule: ThemeRule) =>
    keepLegacyTokenRule("light", rule),
  ),
};

const uiColorsByMode: Record<ThemeMode, Record<string, string>> = {
  dark: darkUiColors,
  light: lightUiColors,
};

function mergeFragments(
  mode: ThemeMode,
  fragments: ThemeModeFragment[],
): ThemeFragment {
  return fragments.reduce<ThemeFragment>((acc, fragment) => {
    const current = fragment[mode];

    if (current.tokenColors) {
      acc.tokenColors ??= [];
      acc.tokenColors.push(...current.tokenColors);
    }

    if (current.semanticTokenColors) {
      acc.semanticTokenColors = {
        ...(acc.semanticTokenColors ?? {}),
        ...current.semanticTokenColors,
      };
    }

    if (current.colors) {
      acc.colors = {
        ...(acc.colors ?? {}),
        ...current.colors,
      };
    }

    return acc;
  }, {});
}

function getScopes(rule: ThemeRule): string[] {
  return Array.isArray(rule.scope) ? rule.scope : [rule.scope];
}


function matchesScopes(rule: ThemeRule, scopes: string[]): boolean {
  const currentScopes = getScopes(rule);
  return (
    currentScopes.length === scopes.length &&
    currentScopes.every((scope, index) => scope === scopes[index])
  );
}


function keepLegacyTokenRule(mode: ThemeMode, rule: ThemeRule): boolean {
  if (rule.name?.startsWith("README palette override:")) {
    return false;
  }

  const duplicateNames = new Set([
    "String interpolation",
    "Reset JavaScript string interpolation expression",
    "Function declarations",
    "Types declaration and references",
    "Types declaration and references, TS grammar specific",
    "Variable and parameter name",
    "CSS property value",
    "coloring of the Java import and package identifiers",
    "Regular expression groups",
  ]);

  if (rule.name && duplicateNames.has(rule.name)) {
    return false;
  }

  const duplicateScopeLists = [
    [
      "meta.embedded",
      "source.groovy.embedded",
      "string meta.image.inline.markdown",
      "variable.legacy.builtin.python",
    ],
    ["entity.name.tag.css", "entity.name.tag.less"],
    [
      "entity.other.attribute-name.class.css",
      "source.css entity.other.attribute-name.class",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.parent.less",
      "source.css entity.other.attribute-name.pseudo-class",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.scss",
    ],
    ["meta.preprocessor", "entity.name.function.preprocessor"],
    ["string", "meta.embedded.assembly"],
    [
      "support.type.vendored.property-name",
      "support.type.property-name",
      "source.css variable",
      "source.coffee.embedded",
    ],
    [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php",
    ],
    [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java",
    ],
    ["source.regexp", "string.regexp"],
    [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition",
    ],
    ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
    ["constant.character", "constant.other.option"],
    ["markup.heading", "markup.heading entity.name"],
    [
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.quote.begin.markdown",
    ],
    [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted",
    ],
    [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted",
    ],
    ["markup.changed", "punctuation.definition.changed"],
    ["markup.ignored", "markup.untracked"],
  ];

  if (duplicateScopeLists.some((scopes) => matchesScopes(rule, scopes))) {
    return false;
  }

  const duplicateScopes = new Set([
    "entity.name.tag",
    "punctuation.definition.tag",
    "meta.preprocessor.string",
    "meta.preprocessor.numeric",
    "meta.structure.dictionary.key.python",
    "support.function.git-rebase",
    "constant.sha.git-rebase",
    "string.tag",
    "string.value",
    "constant.regexp",
    "keyword.operator.quantifier.regexp",
    "string.regexp constant.character.escape",
    "meta.diff.range",
    "meta.diff.header",
    "meta.separator",
    "meta.output",
    "support.type.property-name.json",
    "markup.quote",
    "markup.inline.raw",
    "punctuation.definition.quote.begin.markdown",
  ]);

  if (duplicateScopes.has(getScopes(rule)[0]) && getScopes(rule).length === 1) {
    return false;
  }

  if (mode === "light") {
    if (matchesScopes(rule, ["markup.heading", "markup.heading entity.name"])) {
      return false;
    }
  }

  return true;
}

export function buildTheme(mode: ThemeMode): ThemeDocument {
  const merged = mergeFragments(mode, [
    ...specializedFragments,
    sharedTokens,
    ...languageFragments,
    sharedSemanticTokens,
  ]);

  return {
    ...baseDocuments[mode],
    colors: {
      ...uiColorsByMode[mode],
      ...(merged.colors ?? {}),
    },
    tokenColors: [...legacyTokenColors[mode], ...(merged.tokenColors ?? [])],
    semanticTokenColors: merged.semanticTokenColors ?? {},
  };
}
