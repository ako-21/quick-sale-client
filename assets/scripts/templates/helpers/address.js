// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

// find the length of the string
// return the first position all the way to the 5th from last position
const limitAddress = (str) => {
  const length = str.length - 5
  return str.substring(0, length)
}

module.exports = limitAddress
