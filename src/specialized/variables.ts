import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const variableTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Variable and parameter name',
        scope: [
          'variable',
          'meta.definition.variable.name',
          'support.variable',
          'entity.name.variable',
          'constant.other.placeholder',
        ],
        settings: { foreground: syntax('dark').accentCyan },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
