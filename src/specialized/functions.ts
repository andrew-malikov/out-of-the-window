import { color } from '../colors'
import type { ThemeModeFragment } from '../types'

export const functionTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Function declarations',
        scope: [
          'entity.name.function',
          'support.function',
          'support.constant.handlebars',
          'source.powershell variable.other.member',
          'entity.name.operator.custom-literal',
        ],
        settings: { foreground: color`oklch(88% 0.07 107.67)`.text },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
