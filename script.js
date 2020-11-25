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
  let input = prompt("How long would you like your password to be?\n(please pick a value from 8 - 128)");
  let passwordLength = input;
  let upperCase = confirm("Would you like any uppercase letters in your password?");
  let numbers = confirm("Would you like numbers in your password?");
  let specialChar = confirm("Would you like special characters?");
  
  let customPassword = [];

  let abcCapArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let randomCapLetter = abcCapArr[Math.floor(Math.random() * 26)]

  let abcLowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let randomLowLetter = abcLowArr[Math.floor(Math.random() * 26)]

  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let randomNum = arrNum[Math.floor(Math.random() * 10)]

  let specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '\\', '^', '_', '`', '{', '|', '}', '~', ' ']
  let randomSpecialArr = specialArr[Math.floor(Math.random() * 32)]
  









}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
