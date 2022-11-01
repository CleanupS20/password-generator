
var generateBtn = document.querySelector("#generate");
// // Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable Declaration

var characterNumber = "";
var specialCharacters;
var numCharacters;
var upcaseCharacters;
var locaseCharacters;

// Select number of characters restricting non-characters and range from 0-128 characters.


function generatePassword() {
  var characterNumber = window.prompt("Please enter the number of characters to be generated.");

  while (characterNumber <= 0 || characterNumber >= 129) {
    window.alert("Password length must be between 1-128 characters. Please type a number between 1 and 128.");
    var characterNumber = (prompt("How many character would you like your password to contain?"));
  }

  // User selects if they want special characters.
  var specialCharacters = window.confirm("Please confirm you wish to use special characters in your password.")
  //User selects if they want numeric characters.
  var numCharacters = window.confirm("Please confirm you wish to use numbers in our password.")

  //User selects if they want lower case characters.
  var lcaseCharacters = window.confirm("Please confirm you wish to use lower case characters in your password")

  //User selects if they want upper case characters.
  var ucaseCharacters = window.confirm("Please confirm you wish to use upper case characters in your password")

  // If none are selected, prompt and return.
  while (!specialCharacters && !numCharacters && !lcaseCharacters && !ucaseCharacters) {
    alert("At least one parameter must be selected.");
  return
  }
// Var to store generatePassword results for use elsewhere.

  var options = {
    characterNumber,
    specialCharacters,
    lcaseCharacters,
    ucaseCharacters
  }
  console.log(options)
  return options
  
}
// Generate random password using user input.
function passwordText() {
  var userAns = generatePassword()
  var mask = '';
  if (userAns.lcaseCharacters === true) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (userAns.ucaseCharacters === true) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (userAns.numCharacters === true) mask += '0123456789';
  if (userAns.specialCharacters === true) mask += '~!@#$%^&';
  var result = '';
  for (var i = userAns.characterNumber; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
  console.log(result)
  return result;
}

// Display password for user.
function writePassword() {
  console.log("click")
  var password = passwordText();
  var pwdText = document.querySelector("#password");
  pwdText.textContent = password
}












