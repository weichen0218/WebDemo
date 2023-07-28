'use strict'
import { createUserWithEmailAndPassword, auth } from './firebase.js';
import { checkEmail, checkPassword } from './function.js'

const emailField = document.querySelector('.email'),
emailInput = emailField.querySelector('input'),
passwordField = document.querySelector('.password'),
passwordInput = passwordField.querySelector('input'),
register = document.querySelector('#register');

register.addEventListener("click", function(event){
  checkEmail(emailInput, emailField);
  checkPassword(passwordInput, passwordField);
  if ($(emailField).hasClass("error") || $(passwordField).hasClass("error")){
    return;
  }
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value).then(function (userCredential) {
    const user = userCredential.user;
   
    alert('User Created!!');
    window.location.href = 'index.html';
  })
  .catch(function (error) {
    let error_code = error.code;
    let error_message = error.message;
    alert(error_message);
  });
})

emailField.onkeyup = () =>{
  checkEmail(emailInput, emailField);
}
passwordField.onkeyup = () =>{
  checkPassword(passwordInput, passwordField);
}