$("#checkEye").click(function () {
  if($(this).hasClass('fa-eye-slash')){
     $(".password input").attr('type', 'text');
  }else{
     $(".password input").attr('type', 'password');
  }
  $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye');
}); 

// const rmCheck = document.getElementById("rememberMe"),
//     emailInput = document.getElementById("email");

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rmCheck.setAttribute("checked", "checked");
//   emailInput.value = localStorage.username;
// } else {
//   rmCheck.removeAttribute("checked");
//   emailInput.value = "";
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = rmCheck.value;
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//   }
// }