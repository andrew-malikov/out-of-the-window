import { syntax } from '../palette'
import type { ThemeModeFragment } from '../types'

export const sharedSemanticTokens: ThemeModeFragment = {
  dark: {
    semanticTokenColors: {
      variable: syntax('dark').variable,
      parameter: syntax('dark').variable,
      property: syntax('dark').property,
      function: syntax('dark').function,
      method: syntax('dark').function,
      keyword: syntax('dark').keyword,
      operator: syntax('dark').operator,
      namespace: syntax('dark').type,
      type: syntax('dark').type,
      newOperator: '#5E81AC',
      stringLiteral: syntax('dark').string,
      customLiteral: syntax('dark').constant,
      numberLiteral: syntax('dark').number,
    },
  },
  light: {
    semanticTokenColors: {
      variable: syntax('light').variable,
      parameter: syntax('light').variable,
      property: syntax('light').property,
      function: syntax('light').function,
      method: syntax('light').function,
      keyword: syntax('light').keyword,
      operator: syntax('light').operator,
      namespace: syntax('light').keyword,
      type: syntax('light').type,
      newOperator: syntax('light').keyword,
      stringLiteral: syntax('light').string,
      customLiteral: syntax('light').number,
      numberLiteral: syntax('light').number,
    },
  },
}
