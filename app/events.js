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
  $('#user-art-form, #hide-new-art-piece').show()
  $('#create-new-art-piece').hide()
}

const onHideShowArtForm = function () {
  $('#hide-new-art-piece, #user-art-form').hide()
  $('#create-new-art-piece').show()
}

const onShowChangePasswordForm = function () {
  $('#change-password-form, #hide-change-password-button').show()
  $('#change-password-button').hide()
}

const onHideChangePasswordForm = function () {
  $('#change-password-button').show()
  $('#hide-change-password-button, #change-password-form').hide()
}

const onAlreadyAnArtist = function () {
  $('#art-sign-in-form').show()
}

const onSignUp = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)

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

  artApi
    .signIn(data)
    .then((response) => artUi.onSignInSuccess(response))
    .then(onShowAllArt)
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

  artApi
    .changePassword(data)
    .then((response) => artUi.onChangePasswordSuccess(response))
    .catch(() => artUi.onChangePasswordFailure())
}
const onShowAllArt = () => {
  // get the art Pieces from the API
  // check the Network tab!
  artApi
    .showAllArtPieces()
  // JavaScript Promises
  // if the request/response is successful, run this callback
    .then((response) => artUi.onShowAllArtPiecesSuccess(response))
  // if the request/response has an error, run this callback
  // .catch(() => artUi.onIndexBooksFailure())
}

const onShowAllArtAllUsers = () => {
  // get the art Pieces from the API
  // check the Network tab!
  artApi
    .showAllArtPiecesAllUsers()
  // JavaScript Promises
  // if the request/response is successful, run this callback
    .then((response) => artUi.onShowAllArtPiecesAllUsersSuccess(response))
  // if the request/response has an error, run this callback
  // .catch(() => artUi.onIndexBooksFailure())
}

const onHideAllUserArt = () => {
  artApi
    .showAllArtPieces()
  // JavaScript Promises
  // if the request/response is successful, run this callback
    .then((response) => artUi.onShowAllArtPiecesSuccess(response))
}

/// Create this function got distracted just have this function call the only user art function

const onCreateNewArt = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)

  artApi
    .createNewArtPiece(data)
    .then((response) => artUi.onCreateArtSuccess(response))
    .then(onShowAllArt)
    .catch(() => artUi.onCreateArtFailure())
}
const onDeleteArtPiece = function (event) {
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const id = $(deleteButton).data('id')

  // make API call for destroying one pice of art with id of the art we grabbed from the form
  artApi.deleteArtPiece(id)

  // if the API call is successful then invoke the onDetroy Success function
    .then(artUi.onDeleteArtPieceSuccess)
    .then(onShowAllArt)

  // if the API call fails then run our onError function
    .catch(artUi.onError)
}
const onUpdateArtPiece = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // event.target is the update form that was submitted
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const id = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the art
  // information
  const formData = getFormFields(event.target)

  // make API call to update one art with the data we grabbed from the form
  artApi.updateArtPiece(id, formData)

  // if the API call is successful then invoke the onUpdateSuccess function
    .then(() => artUi.onUpdateArtPieceSuccess(id))

  // if the API call fails then run our onError function
    .catch(artUi.onError)
  setTimeout(() => {
    onShowAllArt()
  }, 2500)
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
  onShowChangePasswordForm,
  onHideChangePasswordForm,
  onSignUpFormReveal,
  onHideSignUpForm,
  onCreateNewArt,
  onShowAllArt,
  onDeleteArtPiece,
  onUpdateArtPiece,
  onShowAllArtAllUsers,
  onHideAllUserArt,
  onHideShowArtForm
}
