import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const jsonTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'JSON property names',
        scope: ['support.type.property-name.json'],
        settings: { foreground: syntax('dark').property },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'JSON property names',
        scope: ['support.type.property-name.json'],
        settings: { foreground: syntax('light').property },
      },
    ],
  },
}
