'use strict'

const {
  AsyncObject
} = require('@cuties/cutie')

class If extends AsyncObject {
  constructor (statement, action, nextStatement) {
    super(
      statement, () => {
        return action
      }, nextStatement ? () => {
        return nextStatement
      } : undefined
    )
  }

  definedSyncCall () {
    return (statement, action, nextStatement) => {
      if (!statement) {
        let actionTree = action()
        this.propagateCache(actionTree)
        actionTree.call()
      } else if (nextStatement) {
        let nextStatementTree = nextStatement()
        this.propagateCache(nextStatementTree)
        nextStatementTree.call()
      }
      return !statement
    }
  }
}

module.exports = If
