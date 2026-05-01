import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const pythonTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: { foreground: syntax('dark').accentCyan },
      },
      {
        scope: ['keyword.operator.logical.python'],
        settings: { foreground: syntax('dark').accentBlue },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
