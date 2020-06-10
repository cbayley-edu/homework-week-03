// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  event.preventDefault();
  //prompt for the length of the password
  //accept at least 8 and no more than 128
  var pwLength = prompt("Enter the desired length of your password (8 to 128)");
  var pwLengthInt = parseInt(pwLength);
  if (pwLengthInt < 8 || pwLengthInt > 128 || isNaN(pwLengthInt)) {
    alert("You entered a number less than 8 or more than 128 or didn't enter a number. Please try again.");
    return;
  }
  alert("Please select one or more of the four options to follow...");
  //confirm lowercase
  var choseLowercase = confirm("Would you like to include lowercase letters?\nClick OK for Yes. Click Cancel for No.");
  //confirm uppercase
  var choseUppercase = confirm("Would you like to include uppercase letters?\nClick OK for Yes. Click Cancel for No.");
  //confirm numeric
  var choseNumeric = confirm("Would you like to include numbers?\nClick OK for Yes. Click Cancel for No.");
  //confirm special characters
  var choseSpecialChars = confirm("Would you like to include special characters?\nClick OK for Yes. Click Cancel for No.");

  //make sure at least one of the above is selected
  if (!choseLowercase && !choseUppercase && !choseNumeric && !choseSpecialChars) {
    alert("You did not select at least one of the four options. Please try again.")
    return;
  }

  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharsArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  //concatenate arrays based on prompts
  var passwordArray = [];
  if (choseLowercase) {
    passwordArray = passwordArray.concat(lowercaseArray);
  }
  if (choseUppercase) {
    passwordArray = passwordArray.concat(uppercaseArray);
  }
  if (choseNumeric) {
    passwordArray = passwordArray.concat(numericArray);
  }
  if (choseSpecialChars) {
    passwordArray = passwordArray.concat(specialCharsArray);
  }

  var password = generatePassword(pwLengthInt, passwordArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(intVar, arrayVar) {
  var randNumArray = [];
  
  //random number loop to populate randNumArray
  for (var rand = 0; rand < intVar; rand++) {
    // Generate random numbers 
    // Math.floor will round down, meaning we would get a number between 0 and arrayVar.length
    var num = Math.floor(Math.random() * arrayVar.length);
    randNumArray.push(num);
  }

  var newPassword = "";
  
  //pw length loop
  for (var i = 0; i < intVar; i++) {
    //set newPassword string using random number array values as index to pull random values from password array
    newPassword = newPassword + arrayVar[randNumArray[i]];
  }
  return newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
