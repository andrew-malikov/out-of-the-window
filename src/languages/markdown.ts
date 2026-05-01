import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const markdownTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        name: 'Markdown headings',
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: { foreground: syntax('dark').foreground, fontStyle: 'bold' },
      },
      {
        name: 'Markdown quote',
        scope: ['markup.quote'],
        settings: { foreground: syntax('dark').constant },
      },
      {
        name: 'Markdown inline code',
        scope: ['markup.inline.raw'],
        settings: { foreground: syntax('dark').function },
      },
      {
        name: 'Markdown list punctuation',
        scope: ['punctuation.definition.list.begin.markdown', 'punctuation.definition.quote.begin.markdown'],
        settings: { foreground: syntax('dark').keyword },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        name: 'Markdown headings',
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: { foreground: syntax('light').property, fontStyle: 'bold' },
      },
      {
        name: 'Markdown quote',
        scope: ['markup.quote'],
        settings: { foreground: syntax('light').accentGreen },
      },
      {
        name: 'Markdown inline code',
        scope: ['markup.inline.raw'],
        settings: { foreground: syntax('light').property },
      },
      {
        name: 'Markdown list punctuation',
        scope: ['punctuation.definition.list.begin.markdown', 'punctuation.definition.quote.begin.markdown'],
        settings: { foreground: syntax('light').keyword },
      },
    ],
  },
}
