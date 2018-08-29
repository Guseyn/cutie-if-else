'use strict'

const {
  AsyncObject
} = require('@cuties/cutie');

class Else extends AsyncObject {

  constructor(action) {
    super(() => {
      return action;
    });
  }

  definedSyncCall() {
    return (action) => {
      let actionTree = action();
      this.propagateCache(actionTree);
      actionTree.call();
    }
  }

}

module.exports = Else;
