/*
Language: CoffeeScript
Author: Dmytrii Nagirniak (@dnagir)
*/

hljs = remark.highlighter.hljs();

hljs.LANGUAGES.coffee = function() {
  var keywords = {
    'keyword': {
      // JS keywords
      'in': 1, 'if': 1, 'for': 1, 'while': 1, 'finally': 1,
      'new': 1, 'do': 1, 'return': 1, 'else': 1, 
      'break': 1, 'catch': 1, 'instanceof': 1, 'throw': 1, 
      'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'typeof': 1, 
      'delete': 1, 'return': 1, 'debugger': 1,
      'class': 1, 'extends': 1, 'super': 1, 'alert': 1,
      // Coffee
      'then': 1, 'unless': 1, 'until': 1, 'loop': 2, 'of': 2, 'by': 1, 'when': 2,
      'and': 1, 'or': 1, 'is': 1, 'isnt': 2, 'not': 1
    },
    'literal': {
      // JS
      'true': 1, 'false': 1, 'null': 1, 'undefined': 1,
      // Coffee
      'yes': 1, 'no': 1, 'on': 1, 'off': 1
    },
    'reserved': {
      'case': 1, 'default': 1, 'function': 1, 'var': 1, 'void': 1, 'with': 1,
      'const': 1, 'let': 1, 'enum': 1, 'export': 1, 'import': 1, 'native': 1,
      '__hasProp': 1 , '__extends': 1 , '__slice': 1 , '__bind': 1 , '__indexOf': 1
    }
  };
  var Variable = {
    cN: 'variable',
    b: "@",
    e: "\\w+",
    r: 0
  };
  var String1 = {
    cN: 'string',
    b: "'", e: "'",
    r: 0
  };

  var SUBST = {
    cN: 'subst',
    b: '#\\{', e: '}',
    k: keywords,
    c: [hljs.CNM ]
  };

  var String2 = {
    cN: 'string',
    b: '"', e: '"',
    r: 0,
    c: [hljs.BE, SUBST]
  };

  var Arrow = {
    cN: 'function',
    b: '(->|=>)', e: hljs.IMMEIDATE_RE,
    r: 10
  };

  var FormalArgs = {
    cN: 'params',
    b: "\\(",
    e: '\\)',
    // TODO: Do not use recursive keywords and contains here as it should be on formal args ONLY
    k: keywords,
    c: [hljs.CNM, String1, String2, Variable]
  };

  var CommentSharpMultiline = {
    cN: 'comment',
    b: '###',
    e: '###',
    r: 5
  };

  return {
    dM: {
      k: keywords,
      c: [
        CommentSharpMultiline,
        hljs.CNM,
        hljs.HCM,
        String1, String2, Variable,
        FormalArgs,
        Arrow
      ]
    }
  };
}();
