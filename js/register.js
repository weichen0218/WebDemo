'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
const database = getDatabase(app);

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const database = fiebase.database();

const register = document.getElementById('register');
register.addEventListener("click", function(event){
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password).then(function (userCredential) {
    const user = userCredential.user;
    // let database_ref = database.ref();
    // let user_data = { 
    //   email : email,
    //   password : password,
    //   last_login : Date.now()
    // };
    // database_ref.child('users/' + user.uid).update(user_data);
    alert('User Created!!');
    window.location.href = 'index.html';
  })
  .catch(function (error) {
    let error_code = error.code;
    let error_message = error.message;
    alert(error_message);
  });
})


function registera() {
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  console.log(email, password);
  if (validate_password(password) == false) {
    alert('password no good');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password).then(function () {
    const user = userCredential.user;
    let database_ref = database.ref();
    let user_data = { 
      email : email,
      password : password,
      last_login : Date.now()
    };
    database_ref.child('users/' + user.uid).update(user_data);
    alert('User Created!!');
  })
  .catch(function (error) {
    let error_code = error.code;
    let error_message = error.message;
    alert(error_message);
  });
}

function login() {
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  auth.signInWithEmailandPassword(email, password).then(function () {
      let user = auth.currentUser;
      let database_ref = database.ref();
      let user_data = { last_login: Date.now() };
      database_ref.child('users/' + user.uid).update(user_data);
      alert('User logged in!!');
    })
    .catch(function (error) {
      let error_code = error.code;
      let error_message = error.message;
      alert(error_message);
    });
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }
  if (field.lenght <= 0) {
    return false;
  } else {
    return true;
  }
}
