// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const artEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', artEvents.onSignUp)
  $('#sign-in-form').on('submit', artEvents.onSignIn)
  $('#sign-out-button').on('click', artEvents.onSignOut)
  $('#hide-new-art').on('click', artEvents.onArtIsNew)
  $('#new-art').on('click', artEvents.onNewArt)
  $('#sign-in-button').on('click', artEvents.onSignUpFormReveal)
  $('#change-password-button').on('click', artEvents.onShowChangePasswordForm)
  $('#hide-change-password-button').on('click', artEvents.onHideChangePasswordForm)
  $('#change-password-form').on('submit', artEvents.onChangePassword)
  $('#create-new-art-piece').on('click', artEvents.onShowArtForm)
  $('#hide-sign-in-button').on('click', artEvents.onHideSignUpForm)
  $('#create-your-art').on('submit', artEvents.onCreateNewArt)
  $('#show-index-art-pieces').on('click', '.art-destroy-dynamic', artEvents.onDeleteArtPiece)
  $('#show-index-art-pieces').on('submit', '.art-update-dynamic', artEvents.onUpdateArtPiece)
  $('#art-sign-out, #user-art-form, #change-password-form').hide()
  $('#art-success-display, #art-error-display, #sign-up, #hide-new-art, #create-new-art-piece, #change-password-success-display, #change-password-error-display, #art-sign-in-form, #hide-sign-in-button, #hide-change-password-button, #show-index-art-pieces, #index-art-error-message').hide()
  $('#new-art').on('click', artEvents.onNewArtist)
})
