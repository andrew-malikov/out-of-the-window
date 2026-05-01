import type { ThemeModeFragment } from '../types'

export const groovyTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: [
          'storage.type.groovy',
          'storage.type.annotation.groovy',
          'storage.type.parameters.groovy',
          'storage.type.generic.groovy',
          'storage.type.object.array.groovy',
          'storage.type.primitive.array.groovy',
          'storage.type.primitive.groovy',
        ],
        settings: { foreground: '#b3e3d9' },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
