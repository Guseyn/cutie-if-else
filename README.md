# cutie-if-else

[![NPM Version](https://img.shields.io/npm/v/@cuties/if-else.svg)](https://npmjs.org/package/@cuties/if-else)
[![Build Status](https://travis-ci.org/Guseyn/cutie-if-else.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-if-else)
[![codecov](https://codecov.io/gh/Guseyn/cutie-if-else/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-if-else)

[Cutie](https://github.com/Guseyn/cutie) extension for work with if-else statements. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-if-else/tree/master/test).

## Install

`npm install @cuties/if-else`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  If, ElseIf, Else
} = require('@cuties/if-else');

new If(
 asyncTreeThatRepresentsBooleanStatement, asyncTreeThatIsBeingInvokedIfFirstArgumentIsTrue,   
 new ElseIf(
   anotherAsyncTreeThatRepresentsBooleanStatement, 
   anotherAsyncTreeThatIsBeingInvokedIfFirstArgumentIsTrue,
   new ElseIf(..., 
    new Else(otherwiseThisAsyncTreeIsBeingInvoked)
   )
 )
).call();
```

| Async Object | Parameters(description) | Representation result |
| ------------- | ----------------| ---------- |
| `If` | `statement, action, next(ElseIf or Else)` | boolean value of `statement` |
| `IfNot` | `statement, action, next(ElseIf or Else)` | boolean value of `!statement` |
| `ElseIf` | `statement, action, next(ElseIf or Else)` | boolean value of `statement` |
| `Else` | `action` | `true` |
| `And` | `...statements` | `statements.every(s => s)` |
| `Or` | `...statements` | `statements.some(s => s)` |
| `Not` | `...statements` | `statements.map(s => !s)` |
