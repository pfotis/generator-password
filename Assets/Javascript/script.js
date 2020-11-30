// Assignment Code
var generateBtn = document.querySelector("#generate");



// with the data the user insert and the following fuction we create the password 
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

// Question for the length of the password
var lenghtOfArray = prompt("Choose the length of your password between 8 and 128 characters ?");

// in case the user give us out the range 8 and 128
while(lenghtOfArray<8 || lenghtOfArray>128){
  lenghtOfArray = prompt("You need to choose the length of your password between 8 and 128 characters ?");
}

// Questions for the formula of the password
var isUpperCase = confirm("Do you want Upper Case characters in your password ?");
var isLowerCase = confirm("Do you want Lower Case characters in your password ?");
var isNumber = confirm("Do you want numeric characters in your password ?");
var isSpecial = confirm("Do you want special characters in your password ?");

// in case the user didnt choose any of the division of characters
while(!isLowerCase && !isUpperCase && !isNumber && !isSpecial ){
  alert("You need to answer positive at least one of the next questions and the webpage will be able to create the password :");
  isUpperCase = confirm("Do you want Upper Case characters in your password ?");
  isLowerCase = confirm("Do you want Lower Case characters in your password ?");
  isNumber = confirm("Do you want numeric characters in your password ?");
  isSpecial = confirm("Do you want special characters in your password ?");
}

  // fuction creates  random numbers
  function random(x) {
    var result = Math.floor(Math.random()*x);
    return result;
  };

  /* eash category represent with a number between 0 and 3 
    The list is 
    Upper case --> 0
    Lower Case --> 1
    Numeric --> 2
    Special --> 3 
  with the followong if the program create a array with the categories the user choose*/

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

  // the while loop will stop until the program check the passwordArray[] has at least one character from each category the user choose
  while (totalTypes != counterType){
    // this for loop fill the password array with the id of the categories user choose
    for (var i=0; i<lenghtOfArray; i++){
      passwordArray[i]=categoriesOfKeys[random(counterType)]; 
    }
    // the first for loop will run how many categories the user choose , could be max 4 or min 1 
    for ( var j=0; j<counterType; j++){
      // the second for loop will run the whole passwordArray[] and with the if statement check at least one character of each category exist.
      for( i=0; i<lenghtOfArray; i++){
        if ( categoriesOfKeys[j] === passwordArray[i]){
          checkTypes=1;
        }
      }
      // if the totalTypes will same with counterType the while loop will stop .
      totalTypes=totalTypes+checkTypes;
    }
  }
  /* this for loop will start read the numbers exist in the passwordArray[] and with the help of the if statment will 
  choose the right array to pick random character */ 
  for (i=0; i<lenghtOfArray; i++){
    if(passwordArray[i] === 0){
      passwordArray[i]=upperCaseArray[random(upperCaseArray.length)];
    }
    if(passwordArray[i] === 1){
      passwordArray[i]=upperCaseArray[random(upperCaseArray.length)].toLowerCase();
    }
    if(passwordArray[i] === 2){
      passwordArray[i]=numbersArray[random(numbersArray.length)];
    }
    if(passwordArray[i] === 3){
      passwordArray[i]=specialsArray[random(specialsArray.length)];
    }
  }
  // last step is the passwordArray to transfer in variable as string
  var keyword = passwordArray[0];
  for (i=1; i<lenghtOfArray; i++){
      keyword = keyword + passwordArray[i];
  }  
  document.getElementById("password").innerHTML = keyword;
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
