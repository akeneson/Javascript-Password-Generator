// Assignment Code
var generateBtn = document.querySelector("#generate");

// This will be the variable for the prompt that will hold the desire length of the password (8-128 characters)

var passwordLength = prompt("How many characters long would you lik your password to be? (8-128 characters)");

// ---------To ensure that password is between 8 and 128 (unsure if it will work)  ALSO need to see how to stop the code if an invalid number is entered again
// if (passwordLength < 8 || passwordLength > 128){
//   var passwordlength = prompt("Please enter a number between 8 and 128 for which you would like the length of your password to be")
// }

// This will be the boolean variable to confirm if the user would like to include lowercase characters

var lowerCase = confirm("Would you like your password to contain lowercase letters?");
var lowerCaseCharactersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// This will be the boolean variable to confirm if the user would like to include uppercase characters

var upperCase = confirm("Would you like your password to contain uppercase letters?");

// This will be the boolean variable to confirm if the user would like to include special characters

var specialCharacters = confirm("Would you like your password to contain special characters");

// Output loop to validate users choices

// Output Loop to validate that atleast one character type is selected



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
