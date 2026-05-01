import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const htmlTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'entity.name.tag',
        settings: { foreground: syntax('dark').accentBlue },
      },
      {
        name: 'brackets of XML/HTML tags',
        scope: 'punctuation.definition.tag',
        settings: { foreground: '#808080' },
      },
      {
        scope: 'string.tag',
        settings: { foreground: syntax('dark').string },
      },
      {
        scope: 'string.value',
        settings: { foreground: syntax('dark').string },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
