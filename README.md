# cutie-if-else
[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for work with if-else statements. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-if-else/tree/master/test).

# Usage

```js
const {
  If, ElseIf, Else
} = require('@guseyn/cutie-if-else');

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
| `ElseIf` | `statement, action, next(ElseIf or Else)` | boolean value of `statement` |
| `Else` | `action` | `void` |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-if-else.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-if-else
