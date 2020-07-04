const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  // no default refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  store.credentials = data.credentials
  // sumbit the event info to the api
  api.signUp(data)

  // create a success or failure response for the user
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // no default refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  // sumbit the event info to the api
  api.signIn(data)

  // create a success or failure response for the user
    .then(ui.signInSuccess)
    .then(onGetHouses)
    .catch(ui.signInFailure)
}

const onChangePWD = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePWD(data)
    .then(ui.changePWDSuccess)
    .catch(ui.changePWDFailure)
}

const onCreate = function (event) {
  console.log('made it to create')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onGetHouses = function () {
  console.log('made it here')
  $('.sign-in-hide').hide()
  api.getHouses()
    .then(ui.getHousesSuccess)
    .catch(ui.getHousesFailure)
}

const onGetMyHouses = function () {
  console.log('made it to get my houses')
  // $('.house-block').hide()
  api.getMyHouses()
    .then(ui.getMyHousesSuccess)
    .catch(ui.getMyHousesFailure)
}

const populateForm = function (event) {
  event.preventDefault()
  $('.house-block-parent').hide()
  $('.edit-hide').show()
  const id = $(event.target).attr('data-id')
  $('#editform').attr('data-id', id)
  $('#editsubmit').attr('data-id', id)
  api.getHouses(event)
    .then(ui.populateFormSuccess)
}

const onHouseUpdate = function (event) {
  event.preventDefault()
  console.log('made it to update in events')
  const form = event.target
  const data = getFormFields(form)
  console.log(event.target)
  console.log(data)
  api.update(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const populateModal = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  $('#yesdelete').attr('data-id', id)
  api.getHouses(event)
    .then(ui.populateModalSuccess)
}

const populateDescModal = function (event) {
  event.preventDefault()
  api.getHouse(event)
    .then(ui.populateDescModalSuccess)
}

const onDeleteHouse = function (event) {
  event.preventDefault()
  api.deleteHouse(event)
    .then(() => ui.deleteHouseSuccess(event))
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePWD,
  onGetHouses,
  onGetMyHouses,
  onCreate,
  populateForm,
  onHouseUpdate,
  populateModal,
  onDeleteHouse,
  populateDescModal
}
