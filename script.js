// Assignment Code
var generateBtn = document.querySelector("#generate");

// This will be the variable for the prompt that will hold the desire length of the password (8-128 characters)

var passwordLength = prompt("How many characters long would you lik your password to be? (8-128 characters)");

// This will be the boolean variable to confirm if the user would like to include lowercase characters

var lowerCase = confirm("Would you like your password to contain lowercase letters?");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
