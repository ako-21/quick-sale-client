const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const changePWD = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}

const create = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/houses',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      house: {
        address: data.house.address,
        description: data.house.description,
        beds: data.house.beds,
        baths: data.house.baths,
        sqft: data.house.sqft,
        askingprice: data.house.askingprice,
        closingdate: data.house.closingdate,
        closingattorney: data.house.closingattorney,
        emdeposit: data.house.emdeposit,
        listingphone: data.house.listingphone
        // owner: data.house.owner
      }
    }
  })
}

const update = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/houses/' + $(event.target).attr('data-id'),
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      house: {
        description: data.house.description,
        beds: data.house.beds,
        baths: data.house.baths,
        sqft: data.house.sqft,
        askingprice: data.house.askingprice,
        closingdate: data.house.closingdate,
        closingattorney: data.house.closingattorney,
        emdeposit: data.house.emdeposit,
        listingphone: data.house.listingphone
        // owner: data.house.owner
      }
    }
  })
}

const getHouses = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/houses',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMyHouses = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/houses',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHouse = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/houses/' + $(event.target).attr('data-id'),
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getHouse = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/houses/' + $(event.target).parent().attr('data-id'),
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePWD,
  getHouses,
  getMyHouses,
  create,
  update,
  deleteHouse,
  getHouse,
  signOut
}
