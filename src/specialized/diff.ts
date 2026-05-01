import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const diffTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'support.function.git-rebase',
        settings: { foreground: syntax('dark').accentCyan },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: { foreground: syntax('dark').accentGreen },
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: { foreground: syntax('dark').invalidSoft, background: '#5D0F12' },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { foreground: syntax('dark').accentGreenBright, background: '#113417' },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { foreground: syntax('dark').accentOrange, background: '#682D0F' },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: { foreground: '#2D333B', background: '#6CB6FF' },
      },
      {
        scope: 'meta.diff.range',
        settings: { foreground: '#DCBDFB', fontStyle: 'bold' },
      },
      {
        scope: 'meta.diff.header',
        settings: { foreground: syntax('dark').accentSky },
      },
      {
        scope: 'meta.separator',
        settings: { foreground: syntax('dark').accentSky, fontStyle: 'bold' },
      },
      {
        scope: 'meta.output',
        settings: { foreground: syntax('dark').accentSky },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: { background: '#F7E7E3', foreground: syntax('light').invalid },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { background: '#E1F1E8', foreground: syntax('light').accentGreen },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { background: '#F2E0CF', foreground: syntax('light').number },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: { foreground: '#EEF3F6', background: '#3A94BC' },
      },
      {
        scope: 'meta.diff.range',
        settings: { foreground: syntax('light').keyword, fontStyle: 'bold' },
      },
      {
        scope: 'meta.diff.header',
        settings: { foreground: syntax('light').keyword },
      },
      {
        scope: 'meta.separator',
        settings: { fontStyle: 'bold', foreground: syntax('light').keyword },
      },
      {
        scope: 'meta.output',
        settings: { foreground: syntax('light').keyword },
      },
    ],
  },
}
