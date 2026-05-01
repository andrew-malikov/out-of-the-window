import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const rubyTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ['punctuation.separator.namespace.ruby'],
        settings: { foreground: syntax('dark').accentTeal },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
