import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const typescriptTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'TypeScript grammar-specific types',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
        ],
        settings: { foreground: syntax('dark').type },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'TypeScript grammar-specific types',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
        ],
        settings: { foreground: syntax('light').type },
      },
    ],
  },
}
