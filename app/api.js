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

const createNewArtPiece = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateArtPiece = function (questionNumber, answerValue, gameOver, score) {
  // console.log(data)

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    user: {
      artPiece: {
        artistName: text,
        nameOfPiece: text,
        over: gameOver,
        score: num
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  createNewGame,
  updateGame
  // changePassword,
  // signOut,
}
