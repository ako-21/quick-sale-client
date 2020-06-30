'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#changePWD').on('submit', events.onChangePWD)
  $('#mylistings').on('click', events.onGetMyHouses)
  $('#tosignup').on('click', () => { $('.sign-in-hide').hide(); $('.sign-up-hide').show() })
  $('#tosignin').on('click', () => { $('.sign-up-hide').hide(); $('.sign-in-hide').show() })
})
