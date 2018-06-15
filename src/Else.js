'use strict'

const {
  AsyncObject
} = require('@guseyn/cutie');

class Else extends AsyncObject {

  constructor(action) {
    super(() => {
      return action;
    });
  }

  definedSyncCall() {
    return (action) => {
      action().call();
    }
  }

}

module.exports = Else;
