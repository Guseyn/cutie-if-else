'use strict'

const {
  AsyncObject
} = require('@guseyn/cutie');

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
      if (statement) {
        action().call();
        return true;
      } 
      if (nextStatement) {
        nextStatement().call();
      }
      return false;
    }
  }

}

module.exports = If;
