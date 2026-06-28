import { color } from '../colors'
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
        settings: { foreground: syntax('dark').invalidSoft, background: color`oklch(31% 0.11 24.63)`.text },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { foreground: syntax('dark').accentGreenBright, background: color`oklch(29% 0.07 147.08)`.text },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { foreground: syntax('dark').accentOrange, background: color`oklch(37% 0.09 44.47)`.text },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: { foreground: color`oklch(32% 0.02 255.64)`.text, background: color`oklch(76% 0.13 249.58)`.text },
      },
      {
        scope: 'meta.diff.range',
        settings: { foreground: color`oklch(85% 0.09 307.26)`.text, fontStyle: 'bold' },
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
        settings: { background: color`oklch(94% 0.02 34.3)`.text, foreground: syntax('light').invalid },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: { background: color`oklch(94% 0.02 161.47)`.text, foreground: syntax('light').accentGreen },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: { background: color`oklch(92% 0.03 65.83)`.text, foreground: syntax('light').number },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: { foreground: color`oklch(96% 0.01 233.64)`.text, background: color`oklch(63% 0.1 230.9)`.text },
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
