import type { ThemeModeFragment } from '../types'

export const pythonTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: { foreground: '#9cdcfe' },
      },
      {
        scope: ['keyword.operator.logical.python'],
        settings: { foreground: '#569cd6' },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
