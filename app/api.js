const store = require('./store.js')
const config = require('./config.js')
const signUp = function (data) {
  console.log(store)
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
const updateArtPiece = function (questionNumber, answerValue, gameOver, score) {
  // console.log(data)

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/artPieces/' + store.art._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { art: data }
  })
}
// show art piece
const showArtPiece = function (data) {
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/artPieces/' + store.art._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// delete art piece
const deleteBook = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/artPieces/' + store.art._id,
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
  showArtPiece,
  deleteBook
  // changePassword,
  // signOut,
}
