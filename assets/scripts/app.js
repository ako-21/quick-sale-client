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
  $('#create').on('submit', events.onCreate)
  $('#mylistings').on('click', events.onGetMyHouses)
  $('#alllistings').on('click', events.onGetHouses)
  $('#messages').on('click', '#edit', events.populateForm)
  $('#messages').on('click', '#delete', events.populateModal)
  $('#messages').on('click', '#descriptionpar', events.populateDescModal)
  $('#yesdelete').on('click', events.onDeleteHouse)
  $('#editform').on('submit', events.onHouseUpdate)
  $('#tosignup').on('click', () => { $('.sign-in-hide').hide(); $('.sign-up-hide').show() })
  $('#tosignin').on('click', () => { $('.sign-up-hide').hide(); $('.sign-in-hide').show() })
  $('#changePWlink').on('click', () => { $('.sign-in-hide').hide(); $('.sign-up-hide').hide(); $('.house-block-parent').hide(); $('.change-pwd-hide').show(); $('#messages').hide(); $('.edit-hide').hide(); $('.create-hide').hide(); $('.create-listing-button-block').hide() })
  $('.createlisting').on('click', () => { $('.house-block-parent').hide(); $('.change-pwd-hide').hide(); $('#messages').hide(); $('.create-hide').show(); $('.edit-hide').hide(); $('.create-listing-button-block').hide() })
  $('#messages').on('click', '#createlisting', () => { $('.house-block-parent').hide(); $('.change-pwd-hide').hide(); $('#messages').hide(); $('.create-hide').show(); $('.edit-hide').hide() })
  $('.phonenumber').mask('(000) 000-0000')
  $('.mula').mask('000,000,000,000', {reverse: true})
  $('.comma').mask('000,000,000', {reverse: true})
})
