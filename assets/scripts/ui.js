const store = require('./store')
const showHousesTemplate = require('./templates/show-houses.handlebars')
const showMyHousesTemplate = require('./templates/show-my-houses.handlebars')

const signUpSuccess = function () {
  $('#messages').removeClass()
  $('#messages').text('You have successfully signed up. Sign in to Continue!')
  $('#messages').addClass('black')
  $('form').trigger('reset')
  $('.sign-up-hide').hide()
  $('.sign-in-hide').show()
}

const signUpFailure = function (data) {
  $('#messages').removeClass()
  $('#messages').text('Sign Up failed, try again.')
  $('#messages').addClass('black')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#messages').removeClass()
  $('#messages').text('All Active Listings')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
  $('form').trigger('reset')
  $('.hide-nav').show()
  // store the user object to access the token
  store.user = data.user
  console.log(data)
}

const signInFailure = function () {
  $('#messages').removeClass()
  $('#messages').text('Wrong user name or password. Try again.')
  $('#messages').addClass('black')
  $('form').trigger('reset')
}

const changePWDSuccess = function () {
  $('#messages').removeClass()
  $('#messages').text('Password successfully changed!')
  $('#messages').addClass('black')
  $('form').trigger('reset')
}

const changePWDFailure = function () {
  $('#messages').removeClass()
  $('#messages').text('Current password is not correct.')
  $('#messages').addClass('black')
  $('form').trigger('reset')
}

const getHousesSuccess = function (data) {
  console.log(data.houses)
  store.houses = data.houses
  const showHousesHtml = showHousesTemplate({ houses: data.houses })
  $('#messages').append(showHousesHtml)
}

const getMyHousesSuccess = function (data) {
  $('#messages').removeClass()
  $('#messages').text('My Listings')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
  console.log(data.houses)
  store.houses = data.houses
  const myHouses = data.houses.filter((arr) => { return store.user._id === arr.owner._id })
  console.log(myHouses)
  const showMyHousesHtml = showMyHousesTemplate({ houses: myHouses })
  $('#messages').append(showMyHousesHtml)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWDSuccess,
  changePWDFailure,
  getHousesSuccess,
  getMyHousesSuccess
}
