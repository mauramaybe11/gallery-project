const artUi = require('./ui.js')
const artApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')
const store = require('./store.js')

const onSignUpFormReveal = function () {
  $('#art-sign-in-form, #hide-sign-in-button').show()
  $('#sign-in-button').hide()
}

const onHideSignUpForm = function () {
  $('#sign-in-button').show()
  $('#art-sign-in-form, #hide-sign-in-button').hide()
}

const onNewArtist = function () {
  $('#sign-up, #hide-new-art').show()
  $('#new-art').hide()
}

const onArtIsNew = function () {
  $('#sign-up, #hide-new-art, #art-sign-up-success-display, #art-sign-up-error-display').hide()
  $('#new-art').show()
}

const onShowArtForm = function () {
  $('#user-art-form').show()
}

const onShowSignOutForm = function () {
  $('#change-password-form').show()
}

const onAlreadyAnArtist = function () {
  $('#art-sign-in-form').show()
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  artApi
    .signUp(data)
    .then(() => artUi.onSignUpSuccess())
    .catch(() => artUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  artApi
    .signIn(data)
    .then((response) => artUi.onSignInSuccess(response))
    .catch(() => artUi.onSignInFailure())
}

const onSignOut = function () {
  artApi
    .signOut()
    .then((response) => artUi.onSignOutSuccess(response))
    .catch(() => artUi.onSignOutFailure())
}
const onChangePassword = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  artApi
    .changePassword(data)
    .then((response) => artUi.onChangePasswordSuccess(response))
    .catch(() => artUi.onChangePasswordFailure())
}
const onCreateNewArt = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  artApi
    .createNewArtPiece(data)
    .then((response) => artUi.onCreateArtSuccess(response))
    .catch(() => artUi.onCreateArtFailure())
}
module.exports = {
  onNewArtist,
  onAlreadyAnArtist,
  onArtIsNew,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onShowArtForm,
  onShowSignOutForm,
  onSignUpFormReveal,
  onHideSignUpForm,
  onCreateNewArt
  //   onCreateNewArt
  //   onBoxClick,
  //   onNewArt,
  //   onAlreadyAnArtist,
  //   onArtIsNew
  // // onShowGames
}
