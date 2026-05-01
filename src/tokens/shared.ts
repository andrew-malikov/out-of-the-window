import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const sharedTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Base foreground',
        scope: ['source', 'meta.embedded', 'meta.block', 'meta.object.member', 'variable.other', 'variable.parameter.function'],
        settings: { foreground: syntax('dark').foreground },
      },
      {
        name: 'Comments',
        scope: ['comment', 'string.comment'],
        settings: { foreground: syntax('dark').comment },
      },
      {
        name: 'Comment punctuation',
        scope: ['punctuation.definition.comment'],
        settings: { foreground: syntax('dark').commentMuted },
      },
      {
        name: 'Keywords / control flow',
        scope: ['keyword', 'keyword.control'],
        settings: { foreground: syntax('dark').keyword },
      },
      {
        name: 'Storage / declarations',
        scope: ['storage', 'storage.type', 'storage.modifier'],
        settings: { foreground: syntax('dark').storage },
      },
      {
        name: 'Types / classes / interfaces',
        scope: ['entity.name.type', 'entity.name.class', 'entity.name.namespace', 'support.class', 'support.type'],
        settings: { foreground: syntax('dark').type },
      },
      {
        name: 'Functions / methods',
        scope: ['entity.name.function', 'support.function'],
        settings: { foreground: syntax('dark').function },
      },
      {
        name: 'Variables / parameters',
        scope: ['variable', 'variable.parameter', 'meta.definition.variable.name'],
        settings: { foreground: syntax('dark').variable },
      },
      {
        name: 'Properties / fields',
        scope: ['meta.property-name', 'variable.other.property', 'support.type.property-name', 'meta.object-literal.key'],
        settings: { foreground: syntax('dark').property },
      },
      {
        name: 'Strings',
        scope: ['string', 'string.quoted', 'string.template'],
        settings: { foreground: syntax('dark').string },
      },
      {
        name: 'Numbers',
        scope: ['constant.numeric'],
        settings: { foreground: syntax('dark').number },
      },
      {
        name: 'Constants / enum members',
        scope: ['constant', 'variable.other.constant', 'variable.other.enummember', 'entity.name.constant'],
        settings: { foreground: syntax('dark').constant },
      },
      {
        name: 'Operators / punctuation',
        scope: ['keyword.operator', 'punctuation', 'meta.brace', 'meta.delimiter'],
        settings: { foreground: syntax('dark').operator },
      },
      {
        name: 'Regex',
        scope: ['source.regexp', 'string.regexp', 'constant.regexp'],
        settings: { foreground: syntax('dark').regex },
      },
      {
        name: 'Invalid / error tokens',
        scope: ['invalid', 'invalid.illegal', 'invalid.broken', 'invalid.deprecated', 'message.error'],
        settings: { foreground: syntax('dark').invalid },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'Comments',
        scope: ['comment', 'string.comment'],
        settings: { foreground: syntax('light').comment },
      },
      {
        name: 'Comment punctuation',
        scope: ['punctuation.definition.comment'],
        settings: { foreground: syntax('light').commentMuted },
      },
      {
        name: 'Keywords / control flow',
        scope: ['keyword', 'keyword.control'],
        settings: { foreground: syntax('light').keyword },
      },
      {
        name: 'Storage / declarations',
        scope: ['storage', 'storage.type', 'storage.modifier'],
        settings: { foreground: syntax('light').storage },
      },
      {
        name: 'Types / classes / interfaces',
        scope: ['entity.name.type', 'entity.name.class', 'entity.name.namespace', 'support.class', 'support.type'],
        settings: { foreground: syntax('light').type },
      },
      {
        name: 'Functions / methods',
        scope: ['entity.name.function', 'support.function'],
        settings: { foreground: syntax('light').function },
      },
      {
        name: 'Variables / parameters',
        scope: ['variable', 'variable.parameter', 'meta.definition.variable.name'],
        settings: { foreground: syntax('light').variable },
      },
      {
        name: 'Properties / fields',
        scope: ['meta.property-name', 'variable.other.property', 'support.type.property-name', 'meta.object-literal.key'],
        settings: { foreground: syntax('light').property },
      },
      {
        name: 'Strings',
        scope: ['string', 'string.quoted', 'string.template'],
        settings: { foreground: syntax('light').string },
      },
      {
        name: 'Numbers',
        scope: ['constant.numeric'],
        settings: { foreground: syntax('light').number },
      },
      {
        name: 'Constants / enum members',
        scope: ['constant', 'variable.other.constant', 'variable.other.enummember', 'entity.name.constant'],
        settings: { foreground: syntax('light').constant },
      },
      {
        name: 'Operators / punctuation',
        scope: ['keyword.operator', 'punctuation', 'meta.brace', 'meta.delimiter'],
        settings: { foreground: syntax('light').operator },
      },
      {
        name: 'Regex',
        scope: ['source.regexp', 'string.regexp', 'constant.regexp'],
        settings: { foreground: syntax('light').regex },
      },
      {
        name: 'Invalid / error tokens',
        scope: ['invalid', 'invalid.illegal', 'invalid.broken', 'invalid.deprecated', 'message.error'],
        settings: { foreground: syntax('light').invalid },
      },
    ],
  },
}
