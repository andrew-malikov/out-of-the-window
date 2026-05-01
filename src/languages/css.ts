import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const cssTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: ['entity.name.tag.css', 'entity.name.tag.less'],
        settings: { foreground: syntax('dark').function },
      },
      {
        scope: [
          'entity.other.attribute-name.class.css',
          'source.css entity.other.attribute-name.class',
          'entity.other.attribute-name.id.css',
          'entity.other.attribute-name.parent-selector.css',
          'entity.other.attribute-name.parent.less',
          'source.css entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element.css',
          'source.css.less entity.other.attribute-name.id',
          'entity.other.attribute-name.scss',
        ],
        settings: { foreground: syntax('dark').function },
      },
      {
        scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'],
        settings: { foreground: syntax('dark').accentCyan },
      },
      {
        name: 'CSS property value',
        scope: [
          'support.constant.property-value',
          'support.constant.font-name',
          'support.constant.media-type',
          'support.constant.media',
          'constant.other.color.rgb-value',
          'constant.other.rgb-value',
          'support.constant.color',
        ],
        settings: { foreground: syntax('dark').string },
      },
    ],
  },
  light: {
    tokenColors: [],
  },
}
