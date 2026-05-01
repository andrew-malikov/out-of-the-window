import type { ThemeRule } from '../types'

export const darkLegacyTokenColors: ThemeRule[] = [
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded",
      "string meta.image.inline.markdown",
      "variable.legacy.builtin.python"
    ],
    "settings": {
      "foreground": "#D4D4D4"
    }
  },
  {
    "scope": "emphasis",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "strong",
    "settings": {
      "fontStyle": "bold"
    }
  },
  {
    "scope": "header",
    "settings": {
      "foreground": "#000080"
    }
  },
  {
    "scope": "comment",
    "settings": {
      "foreground": "#6A9955"
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": [
      "constant.numeric",
      "variable.other.enummember",
      "keyword.operator.plus.exponent",
      "keyword.operator.minus.exponent"
    ],
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "constant.regexp",
    "settings": {
      "foreground": "#646695"
    }
  },
  {
    "scope": "entity.name.tag",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": [
      "entity.name.tag.css",
      "entity.name.tag.less"
    ],
    "settings": {
      "foreground": "#d7ba7d"
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": [
      "entity.other.attribute-name.class.css",
      "source.css entity.other.attribute-name.class",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.parent.less",
      "source.css entity.other.attribute-name.pseudo-class",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.scss"
    ],
    "settings": {
      "foreground": "#d7ba7d"
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": "#f44747"
    }
  },
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#C586C0"
    }
  },
  {
    "scope": "markup.strikethrough",
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": [
      "punctuation.squarebracket.open",
      "punctuation.squarebracket.close",
      "punctuation.curlybrace.open",
      "punctuation.curlybrace.close",
      "punctuation.parenthesis.open",
      "punctuation.parenthesis.close",
      "punctuation.anglebracket.open",
      "punctuation.anglebracket.close",
      "punctuation.definition.typeparameters.begin",
      "punctuation.definition.typeparameters.end",
      "punctuation.definition.interpolation.begin",
      "punctuation.definition.interpolation.end",
      "punctuation.cs",
      "source.cs"
    ],
    "settings": {
      "foreground": "#6E88A6"
    }
  },
  {
    "scope": [
      "punctuation.terminator.statement"
    ],
    "settings": {
      "foreground": "#6E88A6"
    }
  },
  {
    "scope": [
      "punctuation.accessor.cs",
      "punctuation.separator.comma",
      "source.cs"
    ],
    "settings": {
      "foreground": "#6E88A6"
    }
  },
  {
    "scope": [
      "keyword.operator.arrow.cs",
      "source.cs"
    ],
    "settings": {
      "foreground": "#6E88A6"
    }
  },
  {
    "scope": "punctuation.definition.quote.begin.markdown",
    "settings": {
      "foreground": "#6A9955"
    }
  },
  {
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": "#6796e6"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": "#808080"
    }
  },
  {
    "scope": [
      "meta.preprocessor",
      "entity.name.function.preprocessor"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "storage",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": [
      "storage.modifier",
      "keyword.operator.noexcept"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": [
      "string",
      "meta.embedded.assembly"
    ],
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "string.tag",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "string.value",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": "#d16969"
    }
  },
  {
    "name": "String interpolation",
    "scope": [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  {
    "scope": [
      "support.type.vendored.property-name",
      "support.type.property-name",
      "source.css variable",
      "source.coffee.embedded"
    ],
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "keyword.control",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  {
    "scope": [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.cast",
      "keyword.operator.sizeof",
      "keyword.operator.alignof",
      "keyword.operator.typeid",
      "keyword.operator.alignas",
      "keyword.operator.instanceof",
      "keyword.operator.logical.python",
      "keyword.operator.wordlike"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "support.function.git-rebase",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "constant.sha.git-rebase",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars",
      "source.powershell variable.other.member",
      "entity.name.operator.custom-literal"
    ],
    "settings": {
      "foreground": "#DCDCAA"
    }
  },
  {
    "name": "Types declaration and references",
    "scope": [
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.namespace",
      "entity.other.attribute",
      "entity.name.scope-resolution",
      "entity.name.class",
      "storage.type.numeric.go",
      "storage.type.byte.go",
      "storage.type.boolean.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
      "storage.type.error.go",
      "storage.type.rune.go",
      "storage.type.cs",
      "storage.type.generic.cs",
      "storage.type.modifier.cs",
      "storage.type.variable.cs",
      "storage.type.annotation.java",
      "storage.type.generic.java",
      "storage.type.java",
      "storage.type.object.array.java",
      "storage.type.primitive.array.java",
      "storage.type.primitive.java",
      "storage.type.token.java",
      "storage.type.groovy",
      "storage.type.annotation.groovy",
      "storage.type.parameters.groovy",
      "storage.type.generic.groovy",
      "storage.type.object.array.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.groovy"
    ],
    "settings": {
      "foreground": "#b3e3d9"
    }
  },
  {
    "name": "Types declaration and references, TS grammar specific",
    "scope": [
      "meta.type.cast.expr",
      "meta.type.new.expr",
      "support.constant.math",
      "support.constant.dom",
      "support.constant.json",
      "entity.other.inherited-class",
      "punctuation.separator.namespace.ruby"
    ],
    "settings": {
      "foreground": "#4EC9B0"
    }
  },
  {
    "name": "Control flow / Special keywords",
    "scope": [
      "keyword.control",
      "source.cpp keyword.operator.new",
      "keyword.operator.delete",
      "keyword.other.using",
      "keyword.other.directive.using",
      "keyword.other.operator",
      "entity.name.operator"
    ],
    "settings": {
      "foreground": "#647D97"
    }
  },
  {
    "name": "Variable and parameter name",
    "scope": [
      "variable",
      "meta.definition.variable.name",
      "support.variable",
      "entity.name.variable",
      "constant.other.placeholder"
    ],
    "settings": {
      "foreground": "#9CDCFE"
    }
  },
  {
    "name": "Constants and enums",
    "scope": [
      "variable.other.constant",
      "variable.other.enummember"
    ],
    "settings": {
      "foreground": "#4FC1FF"
    }
  },
  {
    "name": "Object keys, TS grammar specific",
    "scope": [
      "meta.object-literal.key"
    ],
    "settings": {
      "foreground": "#9CDCFE"
    }
  },
  {
    "name": "CSS property value",
    "scope": [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value",
      "support.constant.color"
    ],
    "settings": {
      "foreground": "#CE9178"
    }
  },
  {
    "name": "Regular expression groups",
    "scope": [
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "keyword.operator.negation.regexp",
      "support.other.parenthesis.regexp"
    ],
    "settings": {
      "foreground": "#CE9178"
    }
  },
  {
    "scope": [
      "constant.character.character-class.regexp",
      "constant.other.character-class.set.regexp",
      "constant.other.character-class.regexp",
      "constant.character.set.regexp"
    ],
    "settings": {
      "foreground": "#d16969"
    }
  },
  {
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": "#DCDCAA"
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": "#d7ba7d"
    }
  },
  {
    "scope": [
      "constant.character",
      "constant.other.option"
    ],
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": "#d7ba7d"
    }
  },
  {
    "scope": "entity.name.label",
    "settings": {
      "foreground": "#C8C8C8"
    }
  },
  {
    "scope": [
      "comment",
      "punctuation.definition.comment",
      "string.comment"
    ],
    "settings": {
      "foreground": "#768390"
    }
  },
  {
    "scope": [
      "constant.other.placeholder",
      "constant.character"
    ],
    "settings": {
      "foreground": "#F47067"
    }
  },
  {
    "scope": [
      "constant",
      "entity.name.constant",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.language",
      "entity"
    ],
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": [
      "entity.name",
      "meta.export.default",
      "meta.definition.variable"
    ],
    "settings": {
      "foreground": "#F69D50"
    }
  },
  {
    "scope": [
      "variable.parameter.function",
      "meta.jsx.children",
      "meta.block",
      "meta.tag.attributes",
      "entity.name.constant",
      "meta.object.member",
      "meta.embedded.expression"
    ],
    "settings": {
      "foreground": "#ADBAC7"
    }
  },
  {
    "scope": "entity.name.function",
    "settings": {
      "foreground": "#DCBDFB"
    }
  },
  {
    "scope": [
      "entity.name.tag",
      "support.class.component"
    ],
    "settings": {
      "foreground": "#8DDB8C"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": "#F47067"
    }
  },
  {
    "scope": [
      "storage",
      "storage.type"
    ],
    "settings": {
      "foreground": "#F47067"
    }
  },
  {
    "scope": [
      "storage.modifier.package",
      "storage.modifier.import",
      "storage.type.java"
    ],
    "settings": {
      "foreground": "#647D97"
    }
  },
  {
    "scope": [
      "string",
      "string punctuation.section.embedded source"
    ],
    "settings": {
      "foreground": "#96D0FF"
    }
  },
  {
    "scope": "support",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "meta.property-name",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "variable",
    "settings": {
      "foreground": "#F69D50"
    }
  },
  {
    "scope": "variable.other",
    "settings": {
      "foreground": "#ADBAC7"
    }
  },
  {
    "scope": "invalid.broken",
    "settings": {
      "foreground": "#FF938A",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": "#FF938A",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.illegal",
    "settings": {
      "foreground": "#FF938A",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.unimplemented",
    "settings": {
      "foreground": "#FF938A",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "carriage-return",
    "settings": {
      "foreground": "#CDD9E5",
      "background": "#F47067",
      "fontStyle": "italic underline",
      "content": "^M"
    }
  },
  {
    "scope": "message.error",
    "settings": {
      "foreground": "#FF938A"
    }
  },
  {
    "scope": "string variable",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": [
      "source.regexp",
      "string.regexp"
    ],
    "settings": {
      "foreground": "#96D0FF"
    }
  },
  {
    "scope": [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition"
    ],
    "settings": {
      "foreground": "#96D0FF"
    }
  },
  {
    "scope": "string.regexp constant.character.escape",
    "settings": {
      "foreground": "#8DDB8C",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "support.constant",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "support.variable",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": "#8DDB8C"
    }
  },
  {
    "scope": "meta.module-reference",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": "#F69D50"
    }
  },
  {
    "scope": [
      "markup.heading",
      "markup.heading entity.name"
    ],
    "settings": {
      "foreground": "#6CB6FF",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "markup.quote",
    "settings": {
      "foreground": "#8DDB8C"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "foreground": "#ADBAC7",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "foreground": "#ADBAC7",
      "fontStyle": "bold"
    }
  },
  {
    "scope": [
      "markup.underline"
    ],
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": [
      "markup.strikethrough"
    ],
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted"
    ],
    "settings": {
      "foreground": "#FF938A",
      "background": "#5D0F12"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": "#F47067"
    }
  },
  {
    "scope": [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted"
    ],
    "settings": {
      "foreground": "#8DDB8C",
      "background": "#113417"
    }
  },
  {
    "scope": [
      "markup.changed",
      "punctuation.definition.changed"
    ],
    "settings": {
      "foreground": "#F69D50",
      "background": "#682D0F"
    }
  },
  {
    "scope": [
      "markup.ignored",
      "markup.untracked"
    ],
    "settings": {
      "foreground": "#2D333B",
      "background": "#6CB6FF"
    }
  },
  {
    "scope": "meta.diff.range",
    "settings": {
      "foreground": "#DCBDFB",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": "meta.separator",
    "settings": {
      "foreground": "#6CB6FF",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "meta.output",
    "settings": {
      "foreground": "#6CB6FF"
    }
  },
  {
    "scope": [
      "brackethighlighter.tag",
      "brackethighlighter.curly",
      "brackethighlighter.round",
      "brackethighlighter.square",
      "brackethighlighter.angle",
      "brackethighlighter.quote"
    ],
    "settings": {
      "foreground": "#768390"
    }
  },
  {
    "scope": "brackethighlighter.unmatched",
    "settings": {
      "foreground": "#FF938A"
    }
  },
  {
    "scope": [
      "constant.other.reference.link",
      "string.other.link"
    ],
    "settings": {
      "foreground": "#96D0FF"
    }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": "#6796E6"
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": "#CD9731"
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": "#F44747"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "#B267E6"
    }
  },
  {
    "name": "README palette override: base foreground",
    "scope": [
      "source",
      "meta.embedded",
      "meta.block",
      "meta.object.member",
      "variable.other",
      "variable.parameter.function"
    ],
    "settings": {
      "foreground": "#D8DEE9"
    }
  },
  {
    "name": "README palette override: comments",
    "scope": [
      "comment",
      "punctuation.definition.comment",
      "string.comment"
    ],
    "settings": {
      "foreground": "#616E88"
    }
  },
  {
    "name": "README palette override: keywords / control flow",
    "scope": [
      "keyword",
      "keyword.control"
    ],
    "settings": {
      "foreground": "#6E88A6"
    }
  },
  {
    "name": "README palette override: storage / declarations",
    "scope": [
      "storage",
      "storage.type",
      "storage.modifier"
    ],
    "settings": {
      "foreground": "#647D97"
    }
  },
  {
    "name": "README palette override: types / classes / interfaces",
    "scope": [
      "entity.name.type",
      "entity.name.class",
      "entity.name.namespace",
      "support.class",
      "support.type"
    ],
    "settings": {
      "foreground": "#8FBCBB"
    }
  },
  {
    "name": "README palette override: functions / methods",
    "scope": [
      "entity.name.function",
      "support.function"
    ],
    "settings": {
      "foreground": "#D9BE84"
    }
  },
  {
    "name": "README palette override: variables / parameters",
    "scope": [
      "variable",
      "variable.parameter",
      "meta.definition.variable.name"
    ],
    "settings": {
      "foreground": "#D8DEE9"
    }
  },
  {
    "name": "README palette override: properties / fields",
    "scope": [
      "meta.property-name",
      "variable.other.property",
      "support.type.property-name",
      "meta.object-literal.key"
    ],
    "settings": {
      "foreground": "#88C0D0"
    }
  },
  {
    "name": "README palette override: strings",
    "scope": [
      "string",
      "string.quoted",
      "string.template"
    ],
    "settings": {
      "foreground": "#BC8A77"
    }
  },
  {
    "name": "README palette override: numbers",
    "scope": [
      "constant.numeric"
    ],
    "settings": {
      "foreground": "#B48EAD"
    }
  },
  {
    "name": "README palette override: constants / enum members",
    "scope": [
      "constant",
      "variable.other.constant",
      "variable.other.enummember",
      "entity.name.constant"
    ],
    "settings": {
      "foreground": "#8EA885"
    }
  },
  {
    "name": "README palette override: operators / punctuation",
    "scope": [
      "keyword.operator",
      "punctuation",
      "meta.brace",
      "meta.delimiter"
    ],
    "settings": {
      "foreground": "#C0C8D6"
    }
  },
  {
    "name": "README palette override: regex",
    "scope": [
      "source.regexp",
      "string.regexp",
      "constant.regexp"
    ],
    "settings": {
      "foreground": "#88C0D0"
    }
  },
  {
    "name": "README palette override: invalid / error tokens",
    "scope": [
      "invalid",
      "invalid.illegal",
      "invalid.broken",
      "invalid.deprecated",
      "message.error"
    ],
    "settings": {
      "foreground": "#BF616A"
    }
  }
]

export const lightLegacyTokenColors: ThemeRule[] = [
  {
    "scope": [
      "comment",
      "punctuation.definition.comment",
      "string.comment"
    ],
    "settings": {
      "foreground": "#6F7B88"
    }
  },
  {
    "scope": [
      "constant.other.placeholder",
      "constant.character"
    ],
    "settings": {
      "foreground": "#4E7FA8"
    }
  },
  {
    "scope": [
      "constant",
      "entity.name.constant",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.language",
      "entity"
    ],
    "settings": {
      "foreground": "#2F86AD"
    }
  },
  {
    "scope": [
      "entity.name",
      "meta.export.default",
      "meta.definition.variable"
    ],
    "settings": {
      "foreground": "#2C3135"
    }
  },
  {
    "scope": [
      "variable.parameter.function",
      "meta.jsx.children",
      "meta.block",
      "meta.tag.attributes",
      "entity.name.constant",
      "meta.object.member",
      "meta.embedded.expression"
    ],
    "settings": {
      "foreground": "#2C3135"
    }
  },
  {
    "scope": "entity.name.function",
    "settings": {
      "foreground": "#2C3135"
    }
  },
  {
    "scope": [
      "entity.name.tag",
      "support.class.component"
    ],
    "settings": {
      "foreground": "#4F956A"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "storage",
      "storage.type"
    ],
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "storage.modifier.package",
      "storage.modifier.import",
      "storage.type.java"
    ],
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "string",
      "string punctuation.section.embedded source"
    ],
    "settings": {
      "foreground": "#6A8094"
    }
  },
  {
    "scope": "support",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": "meta.property-name",
    "settings": {
      "foreground": "#404A53"
    }
  },
  {
    "scope": "variable",
    "settings": {
      "foreground": "#2C3135"
    }
  },
  {
    "scope": "variable.other",
    "settings": {
      "foreground": "#2C3135"
    }
  },
  {
    "scope": "invalid.broken",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#476C8D"
    }
  },
  {
    "scope": "invalid.deprecated",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#476C8D"
    }
  },
  {
    "scope": "invalid.illegal",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#476C8D"
    }
  },
  {
    "scope": "invalid.unimplemented",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#476C8D"
    }
  },
  {
    "scope": "carriage-return",
    "settings": {
      "fontStyle": "italic underline",
      "background": "#4E7FA8",
      "foreground": "#F7F9FA",
      "content": "^M"
    }
  },
  {
    "scope": "message.error",
    "settings": {
      "foreground": "#476C8D"
    }
  },
  {
    "scope": "string variable",
    "settings": {
      "foreground": "#6A8094"
    }
  },
  {
    "scope": [
      "source.regexp",
      "string.regexp"
    ],
    "settings": {
      "foreground": "#2F86AD"
    }
  },
  {
    "scope": [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition"
    ],
    "settings": {
      "foreground": "#2F86AD"
    }
  },
  {
    "scope": "string.regexp constant.character.escape",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#4F956A"
    }
  },
  {
    "scope": "support.constant",
    "settings": {
      "foreground": "#2F86AD"
    }
  },
  {
    "scope": "support.variable",
    "settings": {
      "foreground": "#404A53"
    }
  },
  {
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": "#404A53"
    }
  },
  {
    "scope": "meta.module-reference",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "markup.heading",
      "markup.heading entity.name"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#404A53"
    }
  },
  {
    "scope": "markup.quote",
    "settings": {
      "foreground": "#4F956A"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#2C3135"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#2C3135"
    }
  },
  {
    "scope": [
      "markup.underline"
    ],
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": [
      "markup.strikethrough"
    ],
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#404A53"
    }
  },
  {
    "scope": [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted"
    ],
    "settings": {
      "background": "#F7E7E3",
      "foreground": "#476C8D"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted"
    ],
    "settings": {
      "background": "#E1F1E8",
      "foreground": "#4F956A"
    }
  },
  {
    "scope": [
      "markup.changed",
      "punctuation.definition.changed"
    ],
    "settings": {
      "background": "#F2E0CF",
      "foreground": "#587E9E"
    }
  },
  {
    "scope": [
      "markup.ignored",
      "markup.untracked"
    ],
    "settings": {
      "foreground": "#EEF3F6",
      "background": "#3A94BC"
    }
  },
  {
    "scope": "meta.diff.range",
    "settings": {
      "foreground": "#75808C",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": "meta.separator",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#75808C"
    }
  },
  {
    "scope": "meta.output",
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": [
      "brackethighlighter.tag",
      "brackethighlighter.curly",
      "brackethighlighter.round",
      "brackethighlighter.square",
      "brackethighlighter.angle",
      "brackethighlighter.quote"
    ],
    "settings": {
      "foreground": "#75808C"
    }
  },
  {
    "scope": "brackethighlighter.unmatched",
    "settings": {
      "foreground": "#476C8D"
    }
  },
  {
    "scope": [
      "constant.other.reference.link",
      "string.other.link"
    ],
    "settings": {
      "foreground": "#2F86AD"
    }
  }
]
