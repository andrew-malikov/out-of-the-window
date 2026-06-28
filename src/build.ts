import { DarkUiTheme } from "./ui/dark";
import { LightUiTheme } from "./ui/light";
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
import { diffTokens } from "./tokens/diff";
import { embeddedTokens } from "./tokens/embedded";
import { editorTokens } from "./tokens/editor";
import { functionTokens } from "./tokens/functions";
import { genericTokens } from "./tokens/generic";
import { markupTokens } from "./tokens/markup";
import { miscTokens } from "./tokens/misc";
import { regexTokens } from "./tokens/regex";
import { textmateTokens } from "./tokens/textmate";
import { typeExtensionTokens } from "./tokens/type-extensions";
import { variableTokens } from "./tokens/variables";
import { sharedTokens } from "./tokens/shared";
import type {
  ThemeDocument,
  ThemeFragment,
  ThemeMode,
  ThemeModeFragment,
} from "./types";

const specializedFragments: ThemeModeFragment[] = [
  textmateTokens,
  embeddedTokens,
  diffTokens,
  regexTokens,
  editorTokens,
  miscTokens,
  genericTokens,
  markupTokens,
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

const uiColorsByMode: Record<ThemeMode, Record<string, string>> = {
  dark: DarkUiTheme,
  light: LightUiTheme,
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
    tokenColors: merged.tokenColors ?? [],
    semanticTokenColors: merged.semanticTokenColors ?? {},
  };
}
