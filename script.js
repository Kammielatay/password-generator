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
      return "Try again! Please confirm at least one character type next time."
      
    } else if (input < 8 || input > 128) {
      return "Try again! Pick a value between 8 - 128 next time."
  
    }

    
  
  // gathering random item from arrays
  let abcCapArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let abcLowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  let specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '\\', '^', '_', '`', '{', '|', '}', '~']
  
  // items to include in password based on users choice
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
    // loop through available characters and pick out random elements 
    for (let i = 0; i < input; i++) {
      let randomChar = availableChar[Math.floor(Math.random() * availableChar.length)];
      customPassword.push(randomChar)
  
    }
  // loop through needed characters to ensure at least one element is included each time
  for (let j = 0; j < neededChar.length; j++) {
    customPassword[j + 2] = neededChar[j]
  }

  // join array into one string
  return customPassword.join('')

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
