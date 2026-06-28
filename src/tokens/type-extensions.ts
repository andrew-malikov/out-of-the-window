import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const typeExtensionTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Types declaration and references',
        scope: [
          'support.class',
          'support.type',
          'entity.name.type',
          'entity.name.namespace',
          'entity.other.attribute',
          'entity.name.scope-resolution',
          'entity.name.class',
          'storage.type.numeric.go',
          'storage.type.byte.go',
          'storage.type.boolean.go',
          'storage.type.string.go',
          'storage.type.uintptr.go',
          'storage.type.error.go',
          'storage.type.rune.go',
          'storage.type.cs',
          'storage.type.generic.cs',
          'storage.type.modifier.cs',
          'storage.type.variable.cs',
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
          'storage.type.groovy',
          'storage.type.annotation.groovy',
          'storage.type.parameters.groovy',
          'storage.type.generic.groovy',
          'storage.type.object.array.groovy',
          'storage.type.primitive.array.groovy',
          'storage.type.primitive.groovy',
        ],
        settings: { foreground: syntax('dark').accentGreenSoft },
      },
      {
        name: 'Types declaration and references, TS grammar specific',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
          'punctuation.separator.namespace.ruby',
        ],
        settings: { foreground: syntax('dark').accentTeal },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
