'use strict'

const {
  AsyncObject
} = require('@cuties/cutie')

class And extends AsyncObject {
  constructor (...statements) {
    super(...statements)
  }

  syncCall () {
    return (...statements) => {
      return statements.every(s => s)
    }
  }
}

module.exports = And
