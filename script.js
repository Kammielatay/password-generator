// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// make a function generatePassword below here 
function generatePassword() {
  // prompts and confirmations
  let input = prompt("How long would you like your password to be? \n(please pick a value from 8 - 128)");
  let upperCase = confirm("Would you like any uppercase letters in your password?");
  let numbers = confirm("Would you like numbers in your password?");
  let specialChar = confirm("Would you like special characters?")











}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
