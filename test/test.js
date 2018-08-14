'use strict'

const {
  AsyncObject, as
} = require('@guseyn/cutie');
const {
  Assertion,
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  Else,
  ElseIf,
  If
} = require('./../index');

class Statement extends AsyncObject {

  constructor(val1, val2) {
    super(val1, val2);
  }

  definedSyncCall() {
    return (val1, val2) => {
      return val1 === val2;
    }
  }

}

class Action extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return true;
    }
  }

}

new Assertion(
  new If(
    new Statement(7, 7),
    new Action()
  )
).call();

new EqualAssertion(
  new If(
    new Statement(7, 8),
    new Action()
  ), false
).call();

new Assertion(
  new If(
    new Statement(7, 7), 
    new Action(),
    new ElseIf(
      new Statement(7, 8),
      new Action()
    )
  )
).call();

new EqualAssertion(
  new If(
    new Statement(7, 8),
    new Action(),
    new Assertion(
      new ElseIf(
        new Statement(7, 7),
        new Action()
      )
    )
  ), false
).call();

new EqualAssertion(
  new If(
    new Statement(7, 8),
    new Action(),
    new EqualAssertion(
      new ElseIf(
        new Statement(7, 8),
        new Action(),
        new EqualAssertion(
          new ElseIf(
            new Statement(7, 8),
            new Action(),
            new Else(
              new Assertion(
                new Action()
              )
            )
          ), false
        )
      ), false
    )
  ), false
).call();

new Statement(1, 1).as('s').after(
  new Assertion(
    new If(as('s'), new Action())
  )
).call();


