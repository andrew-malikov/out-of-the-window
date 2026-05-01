import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const regexTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'constant.regexp',
        settings: { foreground: '#646695' },
      },
      {
        name: 'Regular expression groups',
        scope: [
          'punctuation.definition.group.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.character-class.regexp',
          'punctuation.character.set.begin.regexp',
          'punctuation.character.set.end.regexp',
          'keyword.operator.negation.regexp',
          'support.other.parenthesis.regexp',
        ],
        settings: { foreground: syntax('dark').string },
      },
      {
        scope: [
          'constant.character.character-class.regexp',
          'constant.other.character-class.set.regexp',
          'constant.other.character-class.regexp',
          'constant.character.set.regexp',
        ],
        settings: { foreground: syntax('dark').accentRed },
      },
      {
        scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
        settings: { foreground: '#DCDCAA' },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: { foreground: syntax('dark').function },
      },
      {
        scope: ['constant.character', 'constant.other.option'],
        settings: { foreground: syntax('dark').accentBlue },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: { foreground: syntax('dark').accentCyanSoft },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: { foreground: syntax('dark').accentCyanSoft },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: { foreground: '#8DDB8C', fontStyle: 'bold' },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: { foreground: syntax('light').regex },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: { foreground: syntax('light').regex },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: { fontStyle: 'bold', foreground: syntax('light').accentGreen },
      },
    ],
  },
}
