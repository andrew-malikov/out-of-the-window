import type { ThemeModeFragment } from '../types'

export const rubyTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ['punctuation.separator.namespace.ruby'],
        settings: { foreground: '#4EC9B0' },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
