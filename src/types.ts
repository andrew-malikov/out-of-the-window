export type ThemeMode = 'dark' | 'light'

export type ThemeSettings = {
  foreground?: string
  background?: string
  fontStyle?: string
  content?: string
}

export type ThemeRule = {
  name?: string
  scope: string | string[]
  settings: ThemeSettings
}

export type SemanticTokenRule =
  | string
  | {
      foreground: string
      fontStyle?: string
      bold?: boolean
      italic?: boolean
      underline?: boolean
      strikethrough?: boolean
    }

export type ThemeFragment = {
  tokenColors?: ThemeRule[]
  semanticTokenColors?: Record<string, SemanticTokenRule>
  colors?: Record<string, string>
}

export type ThemeModeFragment = Record<ThemeMode, ThemeFragment>

export type ThemeDocument = {
  $schema: string
  name: string
  type?: 'dark' | 'light'
  semanticHighlighting: boolean
  colors: Record<string, string>
  tokenColors: ThemeRule[]
  semanticTokenColors: Record<string, SemanticTokenRule>
}
