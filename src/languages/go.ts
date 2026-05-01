import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const goTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: [
          'storage.type.numeric.go',
          'storage.type.byte.go',
          'storage.type.boolean.go',
          'storage.type.string.go',
          'storage.type.uintptr.go',
          'storage.type.error.go',
          'storage.type.rune.go',
        ],
        settings: { foreground: syntax('dark').accentGreenSoft },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
