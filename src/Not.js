'use strict'

const {
  AsyncObject
} = require('@cuties/cutie')

class Not extends AsyncObject {
  constructor (...statements) {
    super(...statements)
  }

  syncCall () {
    return (...statements) => {
      return statements.map(s => !s)
    }
  }
}

module.exports = Not
