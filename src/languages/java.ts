import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const javaTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Java import and package identifiers',
        scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
        settings: { foreground: syntax('dark').foreground },
      },
      {
        name: 'Java types',
        scope: [
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
        ],
        settings: { foreground: syntax('dark').type },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'Java import and package identifiers',
        scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
        settings: { foreground: syntax('light').foreground },
      },
      {
        name: 'Java types',
        scope: [
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
        ],
        settings: { foreground: syntax('light').type },
      },
    ],
  },
}
