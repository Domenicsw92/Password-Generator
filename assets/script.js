// Assignment Code
var generateBtn = document.querySelector("#generate");
var Options = ""
var passwordlength = [];
var Upper_Case_Codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower_Case_Codes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Number_Char_Codes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var Special_Char_Codes = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input


// Add event listener to generate button

function generatePassword() {
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    passwordLength = parseInt(prompt("Enter a number between 8-128 for your password length"));
    passwordUpperchar = confirm("Would you like Uppercase Characters?")
    passwordLowerchar = confirm("Would you like Lowercase Characters?")
    passwordNumberchar = confirm("Would you like Numbers?")
    passwordSpecialchar = confirm("Would you like Special Characters?")


  }

  if (passwordUpperchar === false && passwordLowerchar === false && passwordNumberchar === false && passwordSpecialchar === false) {
    confirm("You must select at least one!")
    generatePassword();

  }

  if (passwordUpperchar === true) {
    console.log(Upper_Case_Codes)
    Options = Options.concat(Upper_Case_Codes)
  }

  if (passwordLowerchar === true) {
    console.log(Lower_Case_Codes)
    Options = Options.concat(Lower_Case_Codes)
  }

  if (passwordNumberchar === true) {
    console.log(Number_Char_Codes)
    Options = Options.concat(Number_Char_Codes)
  }

  if (passwordSpecialchar === true) {
    console.log(Special_Char_Codes)
    Options = Options.concat(Special_Char_Codes)
  }

  for (var i = 0; i < passwordlength; i++) {
    var index = Math.floor(Math.random() * Options.length);
    var pickedpassword = Options[index]
    password += Options[pickedpassword];
    console.log(pickedpassword)
  }

  return password

};


function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password)
  }


generateBtn.addEventListener("click", writePassword)