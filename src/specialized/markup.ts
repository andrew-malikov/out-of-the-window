import type { ThemeModeFragment } from '../types'

export const markupTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'markup.italic',
        settings: { foreground: '#ADBAC7', fontStyle: 'italic' },
      },
      {
        scope: 'markup.bold',
        settings: { foreground: '#ADBAC7', fontStyle: 'bold' },
      },
      {
        scope: ['markup.underline'],
        settings: { fontStyle: 'underline' },
      },
      {
        scope: ['markup.strikethrough'],
        settings: { fontStyle: 'strikethrough' },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: 'markup.italic',
        settings: { foreground: '#2C3135', fontStyle: 'italic' },
      },
      {
        scope: 'markup.bold',
        settings: { foreground: '#2C3135', fontStyle: 'bold' },
      },
      {
        scope: ['markup.underline'],
        settings: { fontStyle: 'underline' },
      },
      {
        scope: ['markup.strikethrough'],
        settings: { fontStyle: 'strikethrough' },
      },
    ],
  },
}
