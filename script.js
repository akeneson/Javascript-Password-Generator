// Assignment Code
// This variable gets the element "generate" which is a button, and becomes a string.
var generateBtn = document.querySelector("#generate");

// This variable holds an array of lower case letters
var lowerCaseCharactersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// This variable holds an array of upper case letters
var upperCaseCharactersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// This variable holds an array of special characters
var specialCharactersArray = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", "/", "?", ":", ";", "{", "}", "[", "]"];
// This variable holds am array of numbers
var numberCharacterArray = ["0", "1", "2", "3", "4,", "5", "6", "7", "8", "9"];



// ------------------>Prompts <--------------------
function passwordOptions() {
      // This will be the variable for the prompt that will hold the desire length of the password (8-128 characters)
      var passwordLength = prompt("How many characters long would you like your password to be? (8-128 characters)");

      // checks for validity of passwordLength
      if (passwordLength<8){
            alert("Password has to be at least 8 characters long.");
            return;
      }
      if (passwordLength>128){
            alert("The Password has to be less than 128 characters long.");
            return;
      }
      if (isNaN(passwordLength)){
            alert("The password length must be a number.");
            return;
      }


      // This will be the boolean variable to confirm if the user would like to include lowercase characters
      var lowerCase = confirm("Would you like your password to contain lowercase letters?");
      console.log(lowerCase);

      // This will be the boolean variable to confirm if the user would like to include uppercase characters
      var upperCase = confirm("Would you like your password to contain uppercase letters?");
      console.log(upperCase);

      // This will be the boolean variable to confirm if the user would like to include special characters
      var specialCharacter = confirm("Would you like your password to contain special characters");
      console.log(specialCharacter);

      var numericCharacter = confirm("Would you like your password to contain a number");
      console.log(numericCharacter);

      var options = {
            passwordLength, lowerCase, upperCase, specialCharacter, numericCharacter
      }

      console.log(options);
      return options;
      }

// ------------------>Random Character <--------------------

function getRandom(arr) {

      //we loop through the array once
      var randomValue = arr[Math.floor(Math.random() * arr.length)];
      console.log(randomValue);
      console.log("---------")
      return randomValue;

}


function generatePassword() {
      // calls for the object obtions
      let options = passwordOptions();
      // variable concats adds strings together into an array
      var concats = [];
      // gets a character for the password
      var generateCharacter= [];
      // puts all the characters together in an array
      var finalPassword = [];

      // adds the arrays in which the user prefers
      if (options.lowerCase){
          concats = concats.concat(lowerCaseCharactersArray);
          generateCharacter.push(getRandom(lowerCaseCharactersArray));  
      }
      if (options.upperCase){
            concats = concats.concat(upperCaseCharactersArray);
            generateCharacter.push(getRandom(upperCaseCharactersArray));  
      }
      if (options.specialCharacter){
            concats = concats.concat(specialCharactersArray);
            generateCharacter.push(getRandom(specialCharactersArray));  
      }
      if (options.numericCharacter){
            concats = concats.concat(numberCharacterArray);
            generateCharacter.push(getRandom(numberCharacterArray));  
      }
      for (let i=0; i<parseInt(options.passwordLength);i++){
            finalPassword.push(getRandom(concats));
      }
      for (let i=0; i<generateCharacter.length; i++){
            finalPassword[i] = generateCharacter[i];
      }
      console.log(concats);
      console.log(generateCharacter);
      console.log(finalPassword.join(""));
      // returns the password!!!
      return finalPassword.join("");

}

// Write password to the #password input
function writePassword() {
      // calls the generatePassword function and stores into password
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
}

// addEventListener that runs the functions when the button is clicked.
generateBtn.addEventListener("click", function () {
      writePassword();
});

