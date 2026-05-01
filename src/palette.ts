import type { ThemeMode } from './types'

export const syntaxPalette: Record<ThemeMode, Record<string, string>> = {
  dark: {
    foreground: '#D8DEE9',
    mutedForeground: '#ADBAC7',
    comment: '#616E88',
    keyword: '#6E88A6',
    storage: '#647D97',
    type: '#8FBCBB',
    function: '#D9BE84',
    variable: '#D8DEE9',
    property: '#88C0D0',
    string: '#BC8A77',
    number: '#B48EAD',
    constant: '#8EA885',
    operator: '#C0C8D6',
    regex: '#88C0D0',
    invalid: '#BF616A',
    accentBlue: '#569CD6',
    accentSky: '#6CB6FF',
    accentCyan: '#9CDCFE',
    accentCyanSoft: '#96D0FF',
    accentGreen: '#B5CEA8',
    accentGreenBright: '#8DDB8C',
    accentGreenSoft: '#B3E3D9',
    accentGray: '#D4D4D4',
    accentOrange: '#F69D50',
    accentRed: '#D16969',
    accentTeal: '#4EC9B0',
    invalidSoft: '#FF938A',
  },
  light: {
    foreground: '#2C3135',
    comment: '#6F7B88',
    keyword: '#75808C',
    storage: '#75808C',
    type: '#4F6B78',
    function: '#2C3135',
    variable: '#2C3135',
    property: '#404A53',
    string: '#6A8094',
    number: '#4E7FA8',
    constant: '#2F86AD',
    operator: '#75808C',
    regex: '#2F86AD',
    invalid: '#476C8D',
    accentGreen: '#4F956A',
  },
}

export function syntax(mode: ThemeMode) {
  return syntaxPalette[mode]
}
