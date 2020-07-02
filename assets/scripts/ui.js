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
  // $('#messages').removeClass()
  // $('#messages').text('All Active Listings')
  // $('#messages').addClass('black')
  // $('#messages').addClass('headings')
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

const createSuccess = function (data) {
  console.log(data)
  $('.create-hide').hide()
  $('#messages').show()
  $('#messages').removeClass()
  $('#messages').text('You have Successfully Created a Listing')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
}

const createFailure = function () {
  $('#messages').show()
  $('#messages').removeClass()
  $('#messages').text('Something went wrong, try again')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
}

const getHousesSuccess = function (data) {
  $('.create-hide').hide()
  $('.change-pwd-hide').hide()
  $('.edit-hide').hide()
  $('#messages').show()
  $('#messages').removeClass()
  $('#messages').text('All Active Listings')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
  console.log(data.houses)
  store.houses = data.houses
//  data.houses.forEach((arr) => { if (store.user._id === arr.owner._id) { $('.house-block').addClass('blueout'); $('.image').css('border-color', '#c1c7c9') } else { $('.house-block').removeClass('blueout'); $('.image').css('border-color', '#38b6ff') } console.log(arr.owner._id + ' ' + store.user._id) })
  // const myHouses = data.houses.filter((arr) => { return store.user._id === arr.owner._id })
  // myHouses.forEach(() => { $('.house-block').addClass('blueout'); $('.image').css('border-color', '#c1c7c9') })
  const showHousesHtml = showHousesTemplate({ houses: data.houses })
  $('#messages').append(showHousesHtml)
  const myHouses = data.houses.filter((arr) => { return store.user._id === arr.owner._id })
  myHouses.forEach(() => { $('.house-block').addClass('blueout'); $('.image').css('border-color', '#c1c7c9') })
}

const getMyHousesSuccess = function (data) {
  $('.create-hide').hide()
  $('.change-pwd-hide').hide()
  $('.edit-hide').hide()
  $('#messages').show()
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

const populateFormSuccess = function (data) {
  store.houses = data.houses
  const myHouse = data.houses.filter((arr) => { return arr._id === $('#editform').attr('data-id') })
  console.log(myHouse)
  console.log(myHouse[0].address)
  $('#place1').val(myHouse[0].address)
  $('#place2').val(myHouse[0].description)
  $('#place3').val(myHouse[0].beds)
  $('#place4').val(myHouse[0].baths)
  $('#place5').val(myHouse[0].sqft)
  $('#place6').val(myHouse[0].askingprice)
  $('#place7').val(myHouse[0].closingdate)
  $('#place8').val(myHouse[0].closingattorney)
  $('#place9').val(myHouse[0].emdeposit)
  $('#place10').val(myHouse[0].listingphone)
}

const populateModalSuccess = function (data) {
  store.houses = data.houses
  const myHouse = data.houses.filter((arr) => { return arr._id === $('#yesdelete').attr('data-id') })
  console.log(myHouse)
  $('#deletemessage').text('Delete ' + myHouse[0].address + ' ?')
}

const updateSuccess = function () {
  $('.edit-hide').hide()
  $('#messages').show()
  $('#messages').removeClass()
  $('#messages').text('Updated Successfully')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
}

const updateFailure = function () {
  $('#messages').show()
  $('#messages').removeClass()
  $('#messages').text('Something went wrong, try again')
  $('#messages').addClass('black')
  $('#messages').addClass('headings')
}

const deleteHouseSuccess = function (event) {
  const id = $(event.target).attr('data-id')
  $(`#${id}`).remove()
  $('#deleteModal').removeClass('show')
  $('#deleteModal').attr('style', 'display: none')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWDSuccess,
  changePWDFailure,
  getHousesSuccess,
  getMyHousesSuccess,
  createSuccess,
  createFailure,
  populateFormSuccess,
  updateSuccess,
  updateFailure,
  populateModalSuccess,
  deleteHouseSuccess
}
