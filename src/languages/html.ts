import type { ThemeModeFragment } from '../types'

export const htmlTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'entity.name.tag',
        settings: { foreground: '#569cd6' },
      },
      {
        name: 'brackets of XML/HTML tags',
        scope: 'punctuation.definition.tag',
        settings: { foreground: '#808080' },
      },
      {
        scope: 'string.tag',
        settings: { foreground: '#ce9178' },
      },
      {
        scope: 'string.value',
        settings: { foreground: '#ce9178' },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
