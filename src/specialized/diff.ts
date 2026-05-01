import type { ThemeModeFragment } from '../types'

export const diffTokens: ThemeModeFragment = {
  dark: {
    tokenColors: [
      {
        scope: 'support.function.git-rebase',
        settings: { foreground: '#9cdcfe' },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: { foreground: '#b5cea8' },
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: { foreground: '#FF938A', background: '#5D0F12' },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { foreground: '#8DDB8C', background: '#113417' },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { foreground: '#F69D50', background: '#682D0F' },
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
        settings: { foreground: '#6CB6FF' },
      },
      {
        scope: 'meta.separator',
        settings: { foreground: '#6CB6FF', fontStyle: 'bold' },
      },
      {
        scope: 'meta.output',
        settings: { foreground: '#6CB6FF' },
      },
    ],
  },
  light: {
    tokenColors: [
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: { background: '#F7E7E3', foreground: '#476C8D' },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { background: '#E1F1E8', foreground: '#4F956A' },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { background: '#F2E0CF', foreground: '#587E9E' },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: { foreground: '#EEF3F6', background: '#3A94BC' },
      },
      {
        scope: 'meta.diff.range',
        settings: { foreground: '#75808C', fontStyle: 'bold' },
      },
      {
        scope: 'meta.diff.header',
        settings: { foreground: '#75808C' },
      },
      {
        scope: 'meta.separator',
        settings: { fontStyle: 'bold', foreground: '#75808C' },
      },
      {
        scope: 'meta.output',
        settings: { foreground: '#75808C' },
      },
    ],
  },
}
