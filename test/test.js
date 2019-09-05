'use strict'

const {
  AsyncObject, as
} = require('@cuties/cutie')
const {
  Assertion,
  StrictEqualAssertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  And,
  Else,
  ElseIf,
  If,
  IfNot,
  Not,
  Or
} = require('./../index')

class Statement extends AsyncObject {
  constructor (val1, val2) {
    super(val1, val2)
  }

  syncCall () {
    return (val1, val2) => {
      return val1 === val2
    }
  }
}

class Action extends AsyncObject {
  constructor (name) {
    super(name)
  }

  syncCall () {
    return (name) => {
      console.log(`action: ${name}`)
      return true
    }
  }
}

new Assertion(
  new If(
    new Statement(1, 1),
    new Action('1 === 1')
  )
).call()

new Assertion(
  new If(
    new Statement(2, 2),
    new Assertion(
      new If(
        new Statement(3, 3),
        new Action('3 === 3')
      )
    )
  )
).call()

new Assertion(
  new If(
    new Statement(2, 2),
    new StrictEqualAssertion(
      new If(
        new Statement(3, 4),
        new Action('3 !== 4')
      ), false
    )
  )
).call()

new StrictEqualAssertion(
  new If(
    new Statement(3, 4),
    new If(
      new Statement(4, 4),
      new Action('4 === 4')
    ),
    new Assertion(
      new Else(
        new Action('4 is 4')
      )
    )
  ), false
).call()

new Assertion(
  new If(
    new Statement(5, 5),
    new If(
      new Statement(6, 6),
      new Action('6 === 6')
    ),
    new Else(
      new Action('6 is 6')
    )
  )
).call()

new Assertion(
  new If(
    new Statement(7, 7),
    new If(
      new Statement(7, 8),
      new Action('7 !== 8'),
      new Assertion(
        new ElseIf(
          new Statement(8, 8),
          new Action('8 === 8')
        )
      )
    ),
    new Else(
      new Action('8 is 8')
    )
  )
).call()

new Assertion(
  new If(
    new Statement(7, 7),
    new If(
      new Statement(7, 8),
      new Action('7 !== 8'),
      new StrictEqualAssertion(
        new ElseIf(
          new Statement(8, 9),
          new Action('8 !== 9')
        ), false
      )
    ),
    new Else(
      new Action('8 is 8')
    )
  )
).call()

new Statement(10, 10).as('s').after(
  new Assertion(
    new If(as('s'), new Action('10 === 10'))
  )
).call()

new Statement(11, 10).as('s').after(
  new Assertion(
    new IfNot(as('s'), new Action('11 !== 10'))
  )
).call()

new Statement(10, 10).as('s').after(
  new IfNot(
    as('s'),
    new Action('10 !== 10'),
    new Else(
      new Action('10 === 10')
    )
  )
).call()

new Statement(10, 10).as('s').after(
  new IfNot(
    as('s'),
    new Action('10 !== 10')
  )
).call()

new StrictEqualAssertion(
  new And(true, false, true),
  false
).call()

new StrictEqualAssertion(
  new And(true, true, true),
  true
).call()

new StrictEqualAssertion(
  new Or(true, true, false),
  true
).call()

new StrictEqualAssertion(
  new Or(false, false, false),
  false
).call()

new DeepStrictEqualAssertion(
  new Not(false, true, false),
  [true, false, true]
).call()
