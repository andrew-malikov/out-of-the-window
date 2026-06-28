import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const embeddedTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
        settings: { foreground: syntax('dark').accentGray },
      },
      {
        scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
        settings: { foreground: syntax('dark').accentBlue },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: { foreground: syntax('dark').string },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: { foreground: syntax('dark').accentGreen },
      },
      {
        scope: ['string', 'meta.embedded.assembly'],
        settings: { foreground: syntax('dark').string },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: { foreground: syntax('dark').accentBlue },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: { foreground: syntax('dark').accentGray },
      },
      {
        scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
        settings: { foreground: syntax('dark').accentBlue },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ['punctuation.section.embedded'],
        settings: { foreground: syntax('light').keyword },
      },
    ],
  },
}
