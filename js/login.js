'use strict'

import { signInWithEmailAndPassword, auth } from './firebase.js';
import { checkEmail, checkPassword } from './function.js'

const emailField = document.querySelector('.email'),
emailInput = emailField.querySelector('input'),
passwordField = document.querySelector('.password'),
passwordInput = passwordField.querySelector('input'),
login = document.querySelector('#login'),
register = document.querySelector('#register');
// rememberForget = $('.remember-forget');

if (login){
  login.addEventListener("click", function(event){
    // rememberForget.show();
    checkEmail(emailInput, emailField);
    checkPassword(passwordInput, passwordField);
    if ($(emailField).hasClass("error") || $(passwordField).hasClass("error")){
      return;
    }
    signInWithEmailAndPassword(auth, emailInput.value , passwordInput.value).then(function (userCredential) {
      const user = userCredential.user;
      window.location.href = 'success.html';
    })
    .catch(function (error) {
      let error_code = error.code;
      let error_message = error.message;
      alert(error_message);
    });
  })
}

// register.addEventListener("click", function(event){
//   rememberForget.hide();
//   console.log(rememberForget);
// })

emailField.onkeyup = () =>{
  checkEmail(emailInput, emailField);
}
passwordField.onkeyup = () =>{
  checkPassword(passwordInput, passwordField);
}