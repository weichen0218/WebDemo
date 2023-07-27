'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2glgvEZJyBN3q1l3sec_mAkxtiTsXvko",
  authDomain: "login-demo-424ba.firebaseapp.com",
  databaseURL: "https://login-demo-424ba-default-rtdb.firebaseio.com",
  projectId: "login-demo-424ba",
  storageBucket: "login-demo-424ba.appspot.com",
  messagingSenderId: "1048017875639",
  appId: "1:1048017875639:web:14a6fd1adfe3ca47489332",
  measurementId: "G-S7NNY7FSG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const emailField = document.querySelector('.email'),
emailInput = emailField.querySelector('input'),
passwordField = document.querySelector('.password'),
passwordInput = passwordField.querySelector('input');

const login = document.getElementById('login');
login.addEventListener("click", function(event){
  
  if (emailInput.value == ''){
    emailField.classList.add('error');
  }

  if (passwordInput.value == ''){
    passwordField.classList.add('error');
  }

  // signInWithEmailAndPassword(auth, email, password).then(function (userCredential) {
  //   const user = userCredential.user;
  //   window.location.href = 'success.html';
  // })
  // .catch(function (error) {
  //   let error_code = error.code;
  //   let error_message = error.message;
  //   alert(error_message);
  // });
})

emailField.onkeyup = () =>{
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  const isValidEmail = emailRegex.test(emailInput.value);
  if (isValidEmail){
    emailField.classList.remove('error');
   
  }else{
    emailField.classList.add('error');
    let errorTxt = emailField.querySelector('.error-text');
    (errorTxt.value != '') ? errorTxt.innerText = 'Enter a valid email address' : errorTxt.innerText = "Email can't be blank";
  }
}

passwordField.onkeyup = () =>{
  const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
  const isValidPassword = passwordRegex.test(passwordInput.value);
  if (isValidPassword){
    passwordField.classList.remove('error');
  }else{
    passwordField.classList.add('error');
    let errorTxt = passwordField.querySelector('.error-text');
    // bug
    (errorTxt.value != '') ? errorTxt.innerText = 'Please enter atleast 6 charatcer with number and letter.' : errorTxt.innerText = "Password can't be blank";
    console.log(errorTxt.value);
  }
}

// function validate_email(email){
//   const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
//   const isValidEmail = emailRegex.test(email);
  
//   if (isValidEmail == true){
//     return true;
//   }else {
//     return false;
//   }
// }

// function validate_password(password) {
//   if (password < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }