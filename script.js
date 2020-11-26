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
  let customPassword = [];
  let availableChar = [];
  let neededChar = [];

  // prompts and confirmations
  let input = prompt("How long would you like your password to be?\n(please pick a value from 8 - 128)");
  let uppercase = confirm("Would you like any uppercase letters in your password?");
  let lowercase = confirm("Would you like any lowercase letters in your password?");
  let numbers = confirm("Would you like numbers in your password?");
  let special = confirm("Would you like special characters?");

    if (!uppercase && !lowercase && !numbers && !special){
      alert('Please confirm at least one character type')
    } 
     
  
  
  // gathering random item from arrays
  let abcCapArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let abcLowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  let specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '\\', '^', '_', '`', '{', '|', '}', '~', ' ']
  

    if (uppercase) {
      neededChar = neededChar.concat(abcCapArr[Math.floor(Math.random() * abcCapArr.length)])
      availableChar = availableChar.concat(abcCapArr)

    }

    if (lowercase) {
      neededChar = neededChar.concat(abcLowArr[Math.floor(Math.random() * abcLowArr.length)])
      availableChar = availableChar.concat(abcLowArr)
    }

    if (numbers) {
      neededChar = neededChar.concat(arrNum[Math.floor(Math.random() * arrNum.length)])
      availableChar = availableChar.concat(arrNum)
    }

    if (special) {
      neededChar = neededChar.concat(specialArr[Math.floor(Math.random() * specialArr.length)])
      availableChar = availableChar.concat(specialArr)
    }

    for (let i = 0; i < input; i++) {
      let randomChar = availableChar[Math.floor(Math.random() * availableChar.length)];
      customPassword.push(randomChar)
  
    }

  return customPassword.join('')

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
