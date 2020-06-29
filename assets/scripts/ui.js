const store = require('./store')

const signUpSuccess = function () {
  $('#messages').text('You have successfully signed up. Sign in to Continue!')
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('#messages').text('Sign Up failed, try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#messages').text('You are now signed in!')
  $('form').trigger('reset')
  // store the user object to access the token
  store.user = data.user
  console.log(data)
}
const signInFailure = function () {
  $('#messages').text('Wrong user name or password. Try again.')
  $('form').trigger('reset')
}

const changePWDSuccess = function () {
  $('#messages').text('Password successfully changed!')
  $('form').trigger('reset')
}

const changePWDFailure = function () {
  $('#messages').text('Current password is not correct.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWDSuccess,
  changePWDFailure
}
