const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#art-sign-up-success-display').html(
    '<p>You have successfully signed up</p>'
  )
  $('form').trigger('reset')
  $('#art-sign-up-error-display, #new-art').hide()
  $('#art-sign-up-success-display').show()
}

const onSignUpFailure = function () {
  $('#art-sign-up-error-display').html(
    '<p>You did not sign up successfully </p>'
  )
  $('#art-sign-up-error-display').show()
  $('#art-sign-up-success-display').hide()
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#art-sign-up-form, #art-sign-in-form, #art-error-display, #new-art').hide()
  $('#art-success-display').html('<p>You have successfully signed in.</p>')
  $('#sign-out-button, #user-turn, #art-sign-in-success-display, #art-sign-up-success-display, #art-sign-out, #create-new-art-piece').show()
  console.log(response)
  store.user = response.user
}

const onSignInFailure = function () {
  $('#art-sign-in-error-display').html('<p>Error while signing in.</p>')
  $('#art-sign-in-error-display').show()
}

const onSignOutSuccess = function () {
  $('#art-success-display').html('<p>Your successfully signed out.</p>')
  $('form').trigger('reset')
  $('#art-sign-up-form, #art-sign-in-form, #art-sign-up-error-display, #art-sign-up-success-display, #art-success-display, #new-art').show()
  $('#sign-out-button, #sign-out-text, #art-sign-up-error-display, #art-sign-up-success-display, #art-sign-in-error-display, #sign-up, #user-art-form, #change-password-button, #change-password-success-display, #change-password-error-display, #create-new-art-piece').hide()
}

const onSignOutFailure = function () {
  $('#art-error-display').html('<p>Error while signing out</p>')
}
const onChangePasswordSuccess = function () {
  $('#change-password-success-display').html('<p>User changed password successfully</p>')
  $('#change-password-success-display').show()
  $('#change-password-form, #change-password-error-display').hide()
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#change-password-error-display').html('<p>Error while changing password</p>')
  $('#change-password-error-display').show()
}
const onCreateArtSuccess = function () {
  $('#art-success-display').html('<p>You have successfully added your new art piece</p>')
  $('form').trigger('reset')
  $('#art-success-display').show()
}

const onCreateArtFailure = function () {
  $('#art-error-display').html('<p>You wer unable to create your new art piece </p>')
  $('#art-success-display').hide()
}
// const onCreateNewArtPieceSuccess = function (response) {
//   // need to think about how clicking the submit button for the form will trigger the api to store the art
//   store.art = response.art
//   console.log(response)
// }

// const onCreateNewArtPieceFailure = function () {
//   $('#art-error-display').html('<p>Error while creating new art piece!</p>')
// }

// const onUpdateArtSuccess = function (response) {
//   console.log(response)
//   store.art = response.art
// }
// const onUpdateArtFailure = function (response) {
//   console.log(response)
//   $('#art-error-display').html('<p>Error while updating your art piece. </p>')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onCreateArtSuccess,
  onCreateArtFailure,
  // onShowArtForm,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
  // onCreateNewArtPieceSuccess,
  // onCreateNewArtPieceFailure,
  // onUpdateArtSuccess,
  // onUpdateArtFailure
}
