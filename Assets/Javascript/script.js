// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var passwordArray = new Array();
var upperCaseArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "<", ">", "?", ";", ":", "/", "?", "|", "-", "+", "~", "`", "[", "]","{","}"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
