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


const login = document.getElementById('login');
login.addEventListener("click", function(event){
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password).then(function (userCredential) {
    const user = userCredential.user;
    window.location.href = 'success.html';
  })
  .catch(function (error) {
    let error_code = error.code;
    let error_message = error.message;
    alert(error_message);
  });
})

