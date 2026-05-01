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
        settings: { foreground: '#CE9178' },
      },
      {
        scope: [
          'constant.character.character-class.regexp',
          'constant.other.character-class.set.regexp',
          'constant.other.character-class.regexp',
          'constant.character.set.regexp',
        ],
        settings: { foreground: '#d16969' },
      },
      {
        scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
        settings: { foreground: '#DCDCAA' },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: { foreground: '#d7ba7d' },
      },
      {
        scope: ['constant.character', 'constant.other.option'],
        settings: { foreground: '#569cd6' },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: { foreground: '#96D0FF' },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: { foreground: '#96D0FF' },
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
        settings: { foreground: '#2F86AD' },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: { foreground: '#2F86AD' },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: { fontStyle: 'bold', foreground: '#4F956A' },
      },
    ],
  },
}
