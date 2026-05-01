import type { ThemeModeFragment } from '../types'

export const embeddedTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
        settings: { foreground: '#D4D4D4' },
      },
      {
        scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
        settings: { foreground: '#569cd6' },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: { foreground: '#ce9178' },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: { foreground: '#b5cea8' },
      },
      {
        scope: ['string', 'meta.embedded.assembly'],
        settings: { foreground: '#ce9178' },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: { foreground: '#569cd6' },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: { foreground: '#d4d4d4' },
      },
      {
        scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
        settings: { foreground: '#569cd6' },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ['punctuation.section.embedded'],
        settings: { foreground: '#75808C' },
      },
    ],
  },
}
