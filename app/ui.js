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
  $('#art-sign-up-form, #art-sign-in-form, #art-error-display, #new-art, #sign-in-button, #hide-sign-in-button').hide()
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
  $('#sign-out-button, #sign-out-text, #art-sign-up-error-display, #art-sign-up-success-display, #art-sign-in-error-display, #sign-up, #user-art-form, #change-password-button, #change-password-success-display, #change-password-error-display, #create-new-art-piece, #hide-change-password-button, #show-index-art-pieces').hide()
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
const onCreateArtSuccess = function (response) {
  const artHtml = `
                      <div>
                        <h4>Artist: ${response.art.artistName}</h4>
                        <p>Title of Art Piece: ${response.art.artPieceTitle}</p>
                        <p>When Art Piece Was Created: ${response.art.dateArtPieceCreated}</p>
                        <img src=${response.art.artPieceImageLink} style="max-width:75%;max-height:75%;object-fit:cover"> 
                        <br>
                      </div>
                    `

  $('#show-create-art-pieces').html(artHtml)
  $('#art-success-display').html('<p>You have successfully added your new art piece</p>')
  $('form').trigger('reset')
  $('#art-success-display').show()
}

const onCreateArtFailure = function () {
  $('#art-error-display').html('<p>You wer unable to create your new art piece </p>')
  $('#art-success-display').hide()
}

const onShowAllArtPiecesSuccess = function (response) {
  // string to represent the html of our books display
  // initialize as empty
  let artHtml = ''

  // use forEach to display every book
  response.art.forEach((art) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    artHtml += `
                      <div>
                        <br>
                        <br>
                        <h4>Artist: ${art.artistName}</h4>
                        <p>Title of Art Piece: ${art.artPieceTitle}</p>
                        <p>When Art Piece Was Created: ${art.dateArtPieceCreated}</p>
                        <img src=${art.artPieceImageLink} style="max-width:75%;max-height:75%;object-fit:cover">
                        <div class="please-hide">
                        <form class="art-update-dynamic" data-id=${art._id}>
                        <input type="text" name="art[artistName]" placeholder="Artist Name Required" required>
                        <input type="text" name="art[artPieceTitle]" placeholder="Art Title Required" required>
                        <input type="date" name="art[dateArtPieceCreated]" placeholder="Date created mm/dd/yyyy required" required>
                        <input type="url" name="art[artPieceImageLink]" placeholder="Url link to your Piece required" required>
                        <button type="submit">Update Art Piece</button>
                        </form>
                        <button class='art-destroy-dynamic' data-id=${art._id}>Delete Art Piece</button>
                        </div>
                        <br>
                        <br>
                      </div>
                `
  })
  $('#show-index-art-pieces').html(artHtml)
  $('#show-index-art-pieces').show()
}

const onDeleteArtPieceSuccess = function () {
  // add success message to our books-destroy-message element
  $('#art-destroy-message').html('Art Piece Successfully Deleted!')

  // empty out the books-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  // add class for success messaging
  $('#art-destroy-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#books-destroy-message').html('')
    $('#books-destroy-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
const onUpdateArtPieceSuccess = function (responseData) {
  // add success message to our books-update-message element
  $('#art-update-message').html('You successfully updated the book')
  $('#art-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#art-update-message').html('')
    $('#art-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

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
  onSignOutFailure,
  onShowAllArtPiecesSuccess,
  onDeleteArtPieceSuccess,
  onUpdateArtPieceSuccess
}
