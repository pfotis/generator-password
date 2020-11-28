// Assignment Code
var generateBtn = document.querySelector("#generate");


// Questions for the formula of the password
var lenghtOfArray = prompt("Choose the length of your password between 8 and 128 characters ?");
var isUpperCase = confirm("Do you want Upper Cases characters in your password ?");
var isLowerCase = confirm("Do you want Lower Cases characters in your password ?");
var isNumber = confirm("Do you want numeric characters in your password ?");
var isSpecial = confirm("Do you want special characters in your password ?");

// in case the user give us out the range 8 and 128
while(lenghtOfArray<8 || lenghtOfArray>128){
  lenghtOfArray = prompt("Choose the length of your password between 8 and 128 characters ?");
}

// in case the user didnt choose any of the division of characters
while(!isLowerCase && !isUpperCase && !isNumber && !isSpecial ){
  alert("You have to answer positive at least one of the next question to be able to create the password :");
  isUpperCase = confirm("Do you want Upper Cases characters in your password ?");
  isLowerCase = confirm("Do you want Lower Cases characters in your password ?");
  isNumber = confirm("Do you want numeric characters in your password ?");
  isSpecial = confirm("Do you want special characters in your password ?");
}


function generatePassword() {
  // Arrays
  var passwordArray = new Array();
  var categoriesOfKeys = new Array()
  var upperCaseArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "<", ">", "?", ";", ":", "/", "?", "|", "-", "+", "~", "`", "[", "]","{","}"];

  var counterType = 0;
  var checkTypes =0;
  var totalTypes = 0;

  // fuction creates  random numbers
  function random(x) {
    var result = Math.floor(Math.random()*x);
    return result;
  };


  // check how many differents types will include in the password
  if(isUpperCase){
    categoriesOfKeys[counterType] = 0;
    counterType++;
  }
  if(isLowerCase){
    categoriesOfKeys[counterType] = 1;
    counterType++;
  }
  if(isNumber){
    categoriesOfKeys[counterType] = 2;
    counterType++;
  }
  if(isSpecial){
    categoriesOfKeys[counterType] = 3;
    counterType++;
  }

  /* the while help to fill the password array and to check if at least 
    we have one time each categories of the user's choices */
  while (totalTypes != counterType){
    for (var i=0; i<lenghtOfArray; i++){
      passwordArray[i]=categoriesOfKeys[random(counterType)]; 
    }
    for ( var j=0; j<counterType; j++){
      for( i=0; i<lenghtOfArray; i++){
        if ( categoriesOfKeys[j] === passwordArray[i]){
          checkTypes=1;
        }
      }
      totalTypes=totalTypes+checkTypes;
    }
  }
  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 };

 // Add event listener to generate button
 generateBtn.addEventListener("click", function() {
   generatePassword();
});
