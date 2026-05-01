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
        settings: { foreground: '#DCDCAA' },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
