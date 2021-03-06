const store = require('./store.js')
const config = require('./config.js')
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// change Password
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // same as data: data
  })
}
// create art piece
const createNewArtPiece = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/artPieces',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { art: data }
  })
}
// update art piece
const updateArtPiece = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/artPieces/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}
// index - show all art pieces
const showAllArtPieces = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/artPieces/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const showAllArtPiecesAllUsers = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/artPieces/allUsers',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const deleteArtPiece = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/artPieces/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createNewArtPiece,
  updateArtPiece,
  showAllArtPieces,
  showAllArtPiecesAllUsers,
  // showSingleArtPiece,
  deleteArtPiece
  // changePassword,
  // signOut,
}
