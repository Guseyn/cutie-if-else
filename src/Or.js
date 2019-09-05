'use strict'

const {
  AsyncObject
} = require('@cuties/cutie')

class Or extends AsyncObject {
  constructor (...statements) {
    super(...statements)
  }

  syncCall () {
    return (...statements) => {
      return statements.some(s => s)
    }
  }
}

module.exports = Or
