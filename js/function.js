'use strict'

function validate_email(email){
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  return emailRegex.test(email);
}

function validate_password(password) {
  const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
  return passwordRegex.test(password);
}

function checkEmail(emailInput, emailField){
  if(validate_email(emailInput.value)){
    emailField.classList.remove('error');
  }else{
    emailField.classList.add('error');
    let errorTxt = emailField.querySelector('.error-text');
    (emailInput.value != '') ? errorTxt.innerText = 'Enter a valid email address' : errorTxt.innerText = "Email can't be blank";
  }
}

function checkPassword(passwordInput, passwordField){
  if (validate_password(passwordInput.value)){
    passwordField.classList.remove('error');
  }else{
    passwordField.classList.add('error');
    let errorTxt = passwordField.querySelector('.error-text');
    (passwordInput.value != '') ? errorTxt.innerText = 'Please enter atleast 6 charatcer with number and letter.' : errorTxt.innerText = "Password can't be blank";
  };
}

export { validate_email, validate_password, checkEmail, checkPassword }