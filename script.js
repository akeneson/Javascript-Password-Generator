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

// This variable holds an array of lower case letters
var lowerCaseCharactersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// This will be the boolean variable to confirm if the user would like to include uppercase characters

var upperCase = confirm("Would you like your password to contain uppercase letters?");

// This variable holds an array of upper case letters
var upperCaseCharactersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

// This will be the boolean variable to confirm if the user would like to include special characters

var specialCharacter = confirm("Would you like your password to contain special characters");

// This variable holds an array of special characters
var specialCharactersArray = ["`","!","@","#","$","%","^","&","*","(",")","-","+","=","<",">","/","?",":",";","{","}","[","]"];


// Output Loop to validate that atleast one character type is selected
while (lowerCase==true || upperCase==true || specialCharacter==true){
  if (lowerCase==false && upperCase==false && specialCharacter==false){
    var undefined = confirm ("Unable to create characters without chosing one character")
    break;
  }
  // Output loop to validate users choices
  // If all 3 are true
  if (lowerCase== true && upperCase==true && specialCharacter==true); {
    var confirmLowerUpperSpecial = confirm ("You would like to use lowercase letters, uppercase letters, and special characters");
    break;
  }
}
// --------------------------
// If the user wants lower and upper case only
//   if(lowerCase==true && upperCase==true && specialCharacter==false); {
//       var confirmLowerUpper = confirm("You would like to use lowercase and upper case letters only");
//     }
// }
// ---------------------------
// If the user wants lower case only
// else (lowerCase==true && upperCase==false && specialCharacter==false);{
//   var confirmLower = confirm ("You only want lower case letters used");
// }
// ----------------------------
// If the user wants upper case only
// else (lowerCase==false && upperCase==true && specialCharacter==false); {
//   var confirmUpper = confirm (" You only like to use upper case letters");
// }
// -----------------------------
// If the user wants special characters only
// else (lowerCase==false && upperCase==false && specialCharacter==true); {
//   var confirmSpecial = confirm ("You only like to use special characters");
// }
// ------------------------------
// If the user wants to use lower case letters and special characters
// else (lowerCase==true && upperCase==false && specialCharacter==true);{
//   var confirmLowerSpecial = confirm ("You want to use lower case letters and special characters");
// }
// -------------------------------
// If the user wants to use upper case letters and special characters
// else (lowerCase==false && upperCase==true && specialCharacter==true);{
//   var confirmUpperSpecial = comfirm("You want to use uppercase letters and special characters");
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
