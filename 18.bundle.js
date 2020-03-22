(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js ***!
  \********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/'],\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '`', close: '`', notIn: ['string'] },\r\n        { open: '\"', close: '\"', notIn: ['string'] },\r\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '`', close: '`' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.go',\r\n    keywords: [\r\n        'break',\r\n        'case',\r\n        'chan',\r\n        'const',\r\n        'continue',\r\n        'default',\r\n        'defer',\r\n        'else',\r\n        'fallthrough',\r\n        'for',\r\n        'func',\r\n        'go',\r\n        'goto',\r\n        'if',\r\n        'import',\r\n        'interface',\r\n        'map',\r\n        'package',\r\n        'range',\r\n        'return',\r\n        'select',\r\n        'struct',\r\n        'switch',\r\n        'type',\r\n        'var',\r\n        'bool',\r\n        'true',\r\n        'false',\r\n        'uint8',\r\n        'uint16',\r\n        'uint32',\r\n        'uint64',\r\n        'int8',\r\n        'int16',\r\n        'int32',\r\n        'int64',\r\n        'float32',\r\n        'float64',\r\n        'complex64',\r\n        'complex128',\r\n        'byte',\r\n        'rune',\r\n        'uint',\r\n        'int',\r\n        'uintptr',\r\n        'string',\r\n        'nil',\r\n    ],\r\n    operators: [\r\n        '+', '-', '*', '/', '%', '&', '|', '^', '<<', '>>', '&^',\r\n        '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '&^=',\r\n        '&&', '||', '<-', '++', '--', '==', '<', '>', '=', '!', '!=', '<=', '>=', ':=', '...',\r\n        '(', ')', '', ']', '{', '}', ',', ';', '.', ':'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [/[a-zA-Z_]\\w*/, {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // [[ attributes ]].\r\n            [/\\[\\[.*\\]\\]/, 'annotation'],\r\n            // Preprocessor directive\r\n            [/^\\s*#\\w+/, 'keyword'],\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [/@symbols/, {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            // numbers\r\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex'],\r\n            [/0[0-7']*[0-7]/, 'number.octal'],\r\n            [/0[bB][0-1']*[0-1]/, 'number.binary'],\r\n            [/\\d[\\d']*/, 'number'],\r\n            [/\\d/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, 'string', '@string'],\r\n            [/`/, \"string\", \"@rawstring\"],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\r\n            [/'/, 'string.invalid']\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@doccomment'],\r\n            [/\\/\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment'],\r\n        ],\r\n        comment: [\r\n            [/[^\\/*]+/, 'comment'],\r\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\r\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\r\n            [/\\*\\//, 'comment', '@pop'],\r\n            [/[\\/*]/, 'comment']\r\n        ],\r\n        //Identical copy of comment above, except for the addition of .doc\r\n        doccomment: [\r\n            [/[^\\/*]+/, 'comment.doc'],\r\n            // [/\\/\\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(\r\n            [/\\/\\*/, 'comment.doc.invalid'],\r\n            [/\\*\\//, 'comment.doc', '@pop'],\r\n            [/[\\/*]/, 'comment.doc']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/\"/, 'string', '@pop']\r\n        ],\r\n        rawstring: [\r\n            [/[^\\`]/, \"string\"],\r\n            [/`/, \"string\", \"@pop\"]\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js?");

/***/ })

}]);