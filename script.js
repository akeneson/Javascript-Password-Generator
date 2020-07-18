// Assignment Code
// This variable gets the element "generate" which is a button, and becomes a string.
var generateBtn = document.querySelector("#generate");

// This variable holds an array of lower case letters
var lowerCaseCharactersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
// This variable holds an array of upper case letters
var upperCaseCharactersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
// This variable holds an array of special characters
var specialCharactersArray = ["`","!","@","#","$","%","^","&","*","(",")","-","+","=","<",">","/","?",":",";","{","}","[","]"];
// This variable holds am array of numbers
var numberCharacterArray = ["0", "1", "2", "3", "4," , "5", "6", "7", "8", "9"];


// ------------------>Prompts <--------------------
// This will be the variable for the prompt that will hold the desire length of the password (8-128 characters)
var passwordLength = prompt("How many characters long would you lik your password to be? (8-128 characters)");

// ---------To ensure that password is between 8 and 128 (unsure if it will work)  ALSO need to see how to stop the code if an invalid number is entered again
// if (passwordLength < 8 || passwordLength > 128){
//   var passwordlength = prompt("Please enter a number between 8 and 128 for which you would like the length of your password to be")
// }


// This will be the boolean variable to confirm if the user would like to include lowercase characters
var lowerCase = confirm("Would you like your password to contain lowercase letters?");
console.log(lowerCase);

// This will be the boolean variable to confirm if the user would like to include uppercase characters
var upperCase = confirm("Would you like your password to contain uppercase letters?");
console.log(upperCase);

// This will be the boolean variable to confirm if the user would like to include special characters
var specialCharacter = confirm("Would you like your password to contain special characters");
console.log(specialCharacter);

var numericCharacter = confirm ("Would you like your password to contain a number");
console.log(numericCharacter);



// ------------------>Random Character <--------------------

function getRandom(arr){
      
      //we loop through the array once
      for (i = 0; i < 1; i++){
            var randomValue = arr[Math.floor(Math.random() * arr.length)];
            console.log(randomValue);
            console.log("---------")
            return randomValue;
      }
}

console.log("The password Length is "+ passwordLength + " characters.");
// This variable grabs a random uppercase letter from the array
getRandom(lowerCaseCharactersArray);
// This variable grabs a random uppercase letter from the array
getRandom (upperCaseCharactersArray);
// This variable grabs a random special character from the list of array
getRandom (specialCharactersArray);
// This variable grabs a random numeric character
getRandom(numberCharacterArray);


// I want to create a variable array called user array, and placed all the choices of characters that the user chose.




// Write password to the #password input
function writePassword() {
      console.log("generate button works");
      var password = generatePassword();
        
      var passwordText = document.querySelector("#password");
      
      passwordText.value = password;
      
}

// Add event listener to generate button

// >>ATTENTION<< generate password button does not work
// generateBtn.addEventListener("click", writePassword());
// document.getElementById("password").innerHTML= ""+ password;


generateBtn.addEventListener("click", function() {
      console.log("testing button");
      display = writePassword();
      console.log(display);
});

