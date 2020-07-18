// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------------------>GLOBAL VARIABLES<--------------------
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
      for (var i = 0; i < 1; i++){
            var randomValue = arr[Math.floor(Math.random() * arr.length)];
            console.log(randomValue);
            console.log("---------")
            return randomValue;
      }
}


// This variable grabs a random uppercase letter from the array
getRandom(lowerCaseCharactersArray);
// This variable grabs a random uppercase letter from the array
getRandom (upperCaseCharactersArray);
// This variable grabs a random special character from the list of array
getRandom (specialCharactersArray);
// This variable grabs a random numeric character
getRandom(numberCharacterArray);

// Output Loop to validate that atleast one character type is selected
// if (lowerCase==false && upperCase==false && specialCharacter==false){
//     var undefined = confirm ("Unable to create characters without chosing one character");
//     break;
// }
//   // Output loop to validate users choices



// This ensures that one type of character is chosen to make the password
// function validity (){
//       if ((lowerCase=== true) || (upperCase===true) || (specialCharacter===true) || (numericCharacter===true)) {
//             var confirmLowerUpperSpecialNumeric = confirm ("You would like to use lowercase letters, uppercase letters, and special characters");
//       console.log(confirmLowerUpperSpecialNumeric);
//       } else {
//             alert("There are not any characters selected to make your password");
//       }
// }


// function userArray() {
//       for (i = 0; i<1; i++) {
//             var userCharacterArray = [];
//             if (lowerCase === true){
//                   userCharacterArray.push (lowerCaseCharactersArray);
//                   return userCharacterArray;
//             } 
//             if (upperCase === true){
//                   userCharacterArray.push(upperCaseCharactersArray);
//                   return userCharacterArray;
//             }
//             if (specialCharacter === true) {
//                   userCharacterArray.push (specialCharactersArray);
//                   return userCharacterArray;
//             } 
//             if (numericCharacter=== true) {
//                   userCharacterArray.push(numberCharacterArray);
//                   return userCharacterArray;
//             }
//             for (i = 0; i<userCharacterArray.length1; i++){
//                   console.log(userCharacterArray[i]);
//                   return userCharacterArray;
//             }
//             return userCharacterArray;
//       }
// }

// //     // This variables holds an array of the chosen random characters from all four character arrays --to randomized further
// console.log("These are the characters chosen if the user wanted a lower, upper, special, and numberic character");
// var randomLowerUpperSpecialNumeric = [getRandom(lowerCaseCharactersArray), getRandom(upperCaseCharactersArray), getRandom (specialCharactersArray), getRandom(numberCharacterArray)];

// // This variable holds an array of the chosen random characters from lower, uppper, and special charcters
// console.log("These are the characters chosen if the user wanted a lower, upper, and special character");
// var randomLowerUpperSpecial = [getRandom(lowerCaseCharactersArray), getRandom(upperCaseCharactersArray), getRandom (specialCharactersArray)];









//     // This variable chooses from the character from the above array
// getRandom(randomLowerUpperSpecialNumeric)
 
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

// function generatePassword(){
//       for (i = 0; i<passwordLength; i++) {
//             var password = passord + getRandom(userCharacterArray());
//             return password;
//             console.log(password);
//       }
//       return password;
// }


// function generatePassword(){
//   for (i=0; i<passwordLength-1; i++){ 
//     var password = password + random3; 
//   }
// }


// Add event listener to generate button

// >>ATTENTION<< generate password button does not work
// document.getElementById("generate").addEventListener("click", writePassword());
// document.getElementById("password").innerHTML= ""+ password;


