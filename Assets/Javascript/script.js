// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var passwordArray = new Array();
var upperCaseArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "<", ">", "?", ";", ":", "/", "?", "|", "-", "+", "~", "`", "[", "]","{","}"];

// Questions for the formula of the password
var counter = prompt("Choose the length of your password between 8 and 128 characters ?");
var isUpperCase = confirm("Do you want Upper Cases characters in your password ?");
var isLowerCase = confirm("Do you want Lower Cases characters in your password ?");
var isNumber = confirm("Do you want numeric characters in your password ?");
var isSpecial = confirm("Do you want special characters in your password ?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
