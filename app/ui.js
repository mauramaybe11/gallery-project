const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#slug-sign-up-success-display').html(
    '<p>You have successfully signed in</p>'
  )
  $('form').trigger('reset')
  $('#slug-sign-up-error-display').hide()
  $('#slug-sign-up-success-display').show()
}

const onSignUpFailure = function () {
  $('#slug-sign-up-error-display').html(
    '<p>You did not log in successfully </p>'
  )
  $('#slug-sign-up-error-display').show()
  $('#slug-sign-up-success-display').hide()
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $(
    '#slug-sign-up-form, #slug-sign-in-form, #slug-error-display, #how-to-play, #new-slug'
  ).hide()
  $('#slug-success-display').html('<p>Your Slug is a GO!</p>')
  $(
    '#new-game, #sign-out-button, #Winner, #user-turn, #slug-sign-in-success-display, #slug-sign-up-success-display, #slug-sign-out'
  ).show()
  console.log(response)
  store.user = response.user
}

const onSignInFailure = function () {
  $('#slug-sign-in-error-display').html('<p>Error while signing in</p>')
  $('#slug-sign-in-error-display').show()
}

const onSignOutSuccess = function () {
  $('#slug-success-display').html('<p>Your Slug is OUT!</p>')
  $('#Winner').html('<p>Who Will Win?</p>')
  $('#user-turn').html('<p>Green Slug Goes First!</p>')
  $('form').trigger('reset')
  $(
    '#slug-sign-up-form, #slug-sign-in-form, #slug-sign-up-error-display, #slug-sign-up-success-display, #new-slug, #how-to-play'
  ).show()
  $(
    '#new-game, #tic-tac-toe-game, #Winner, #sign-out-button, #sign-out-text, #user-turn, #slug-sign-up-error-display, #slug-sign-up-success-display, #slug-sign-in-error-display, #sign-up'
  ).hide()
}

const onSignOutFailure = function () {
  $('#slug-error-display').html('<p>Error while signing out</p>')
}
const clearBoard = function () {
  // set value = to null
  $('.box').text('Click Me')
  $('#Winner').text('Who Will Win?')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  console.log(response)
  $('#tic-tac-toe-game').show()
  clearBoard()
}

const onStartGameFailure = function () {
  $('#slug-error-display').html('<p>Error while starting new game!</p>')
}

const onUpdateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
}
const onUpdateGameFailure = function (response) {
  console.log(response)
  $('#slug-error-display').html('<p>Error while updating the game!</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  // onChangePasswordSuccess,
  // onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onStartGameSuccess,
  onStartGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
