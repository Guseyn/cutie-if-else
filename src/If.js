'use strict'

const {
  AsyncObject
} = require('@cuties/cutie');

class If extends AsyncObject {

  constructor(statement, action, nextStatement) {
    super(
      statement, () => {
        return action;
      }, nextStatement ? () => {
        return nextStatement;
      } : undefined
    );
  }

  definedSyncCall() {
    return (statement, action, nextStatement) => {
      let result = false;
      if (statement) {
        let actionTree = action();
        this.propagateCache(actionTree);
        actionTree.call();
        result = true;
      } else if (nextStatement) {
        let nextStatementTree = nextStatement();
        this.propagateCache(nextStatementTree);
        nextStatementTree.call();
      }
      return result;
    }
  }

}

module.exports = If;
