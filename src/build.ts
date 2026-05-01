import { darkLegacyTokenColors, lightLegacyTokenColors } from './legacy/token-colors'
import { darkUiColors, lightUiColors } from './ui/colors'
import { csharpTokens } from './languages/csharp'
import { javaTokens } from './languages/java'
import { jsonTokens } from './languages/json'
import { markdownTokens } from './languages/markdown'
import { typescriptTokens } from './languages/typescript'
import { sharedSemanticTokens } from './semantic/shared'
import { sharedTokens } from './tokens/shared'
import type { ThemeDocument, ThemeFragment, ThemeMode, ThemeModeFragment, ThemeRule } from './types'

const languageFragments: ThemeModeFragment[] = [
  csharpTokens,
  javaTokens,
  jsonTokens,
  markdownTokens,
  typescriptTokens,
]

const baseDocuments: Record<ThemeMode, Omit<ThemeDocument, 'colors' | 'tokenColors' | 'semanticTokenColors'>> = {
  dark: {
    $schema: 'vscode://schemas/color-theme',
    name: 'Window dark',
    type: 'dark',
    semanticHighlighting: true,
  },
  light: {
    $schema: 'vscode://schemas/color-theme',
    name: 'Window Light',
    semanticHighlighting: true,
  },
}

const legacyTokenColors: Record<ThemeMode, ThemeRule[]> = {
  dark: darkLegacyTokenColors.filter((rule: ThemeRule) => !rule.name?.startsWith('README palette override:')),
  light: lightLegacyTokenColors,
}

const uiColorsByMode: Record<ThemeMode, Record<string, string>> = {
  dark: darkUiColors,
  light: lightUiColors,
}

function mergeFragments(mode: ThemeMode, fragments: ThemeModeFragment[]): ThemeFragment {
  return fragments.reduce<ThemeFragment>((acc, fragment) => {
    const current = fragment[mode]

    if (current.tokenColors) {
      acc.tokenColors ??= []
      acc.tokenColors.push(...current.tokenColors)
    }

    if (current.semanticTokenColors) {
      acc.semanticTokenColors = {
        ...(acc.semanticTokenColors ?? {}),
        ...current.semanticTokenColors,
      }
    }

    if (current.colors) {
      acc.colors = {
        ...(acc.colors ?? {}),
        ...current.colors,
      }
    }

    return acc
  }, {})
}

export function buildTheme(mode: ThemeMode): ThemeDocument {
  const merged = mergeFragments(mode, [sharedTokens, ...languageFragments, sharedSemanticTokens])

  return {
    ...baseDocuments[mode],
    colors: {
      ...uiColorsByMode[mode],
      ...(merged.colors ?? {}),
    },
    tokenColors: [...legacyTokenColors[mode], ...(merged.tokenColors ?? [])],
    semanticTokenColors: merged.semanticTokenColors ?? {},
  }
}
