import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const csharpTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'C# punctuation and generics',
        scope: [
          'punctuation.cs',
          'punctuation.accessor.cs',
          'punctuation.definition.typeparameters.begin',
          'punctuation.definition.typeparameters.end',
          'keyword.operator.arrow.cs',
        ],
        settings: { foreground: syntax('dark').keyword },
      },
      {
        name: 'C# types',
        scope: ['storage.type.cs', 'storage.type.generic.cs', 'storage.type.modifier.cs', 'storage.type.variable.cs'],
        settings: { foreground: syntax('dark').type },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'C# punctuation and generics',
        scope: [
          'punctuation.cs',
          'punctuation.accessor.cs',
          'punctuation.definition.typeparameters.begin',
          'punctuation.definition.typeparameters.end',
          'keyword.operator.arrow.cs',
        ],
        settings: { foreground: syntax('light').keyword },
      },
      {
        name: 'C# types',
        scope: ['storage.type.cs', 'storage.type.generic.cs', 'storage.type.modifier.cs', 'storage.type.variable.cs'],
        settings: { foreground: syntax('light').type },
      },
    ],
  },
}
