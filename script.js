let userCvv = document.getElementById("userCvv");
let userValid = document.getElementById("userValid");
let cardHolder = document.getElementById("cardHolder");
let cardNumber = document.getElementById("cardNumber");

flag = 1;
function validForm() {
  if (userCvv.value == "") {
    document.getElementById("cvvError").innerHTML = "*";
    flag = 0;
  } else if (userCvv.value.length < 3) {
    document.getElementById("cvvError").innerHTML = "***";
    flag = 0;
  } else if (isNaN(userCvv.value)) {
    document.getElementById("cvvError").innerHTML = "***";
    flag = 0;
  } else {
    document.getElementById("cvvError").innerHTML = "";
    flag = 1;
  }

  if (userValid.value == "") {
    document.getElementById("validError").innerHTML = "*";
    flag = 0;
  } else if (userValid.value.length < 5) {
    document.getElementById("validError").innerHTML = "***";
    flag = 0;
  } else {
    document.getElementById("validError").innerHTML = "";
    flag = 1;
  }

  if (cardHolder.value == "") {
    document.getElementById("cardError").innerHTML = "*";
    flag = 0;
  } else {
    document.getElementById("cardError").innerHTML = "";
    flag = 1;
  }

  if (isNaN(cardNumber.value)) {
    document.getElementById("noError").innerHTML = "***";
    flag = 0;
  } else if (cardNumber.value == "") {
    document.getElementById("noError").innerHTML = "*";
    flag = 0;
  } else if (cardNumber.value.length < 19) {
    document.getElementById("noError").innerHTML = "***";
    flag = 0;
  } else {
    document.getElementById("noError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    alert("Payment Done !!");
  } else {
    alert("Transaction Faild !!");
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
