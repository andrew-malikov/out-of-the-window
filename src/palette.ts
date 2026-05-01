import type { ThemeMode } from './types'

export const syntaxPalette: Record<ThemeMode, Record<string, string>> = {
  dark: {
    foreground: '#D8DEE9',
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
    number: '#5A86AA',
    constant: '#2F86AD',
    operator: '#75808C',
    regex: '#2F86AD',
    invalid: '#476C8D',
  },
}

export function syntax(mode: ThemeMode) {
  return syntaxPalette[mode]
}
