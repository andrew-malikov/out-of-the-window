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
import { editorTokens } from "./specialized/editor";
import { functionTokens } from "./specialized/functions";
import { genericTokens } from "./specialized/generic";
import { markupTokens } from "./specialized/markup";
import { miscTokens } from "./specialized/misc";
import { regexTokens } from "./specialized/regex";
import { textmateTokens } from "./specialized/textmate";
import { typeExtensionTokens } from "./specialized/type-extensions";
import { variableTokens } from "./specialized/variables";
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
