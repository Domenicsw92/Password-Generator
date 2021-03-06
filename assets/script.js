// Assignment Code
var generateBtn = document.querySelector("#generate");
var Options = ""
var passWordlength = 0;
var Upper_Case_Codes = arrayFromlowtoHigh(65, 90);
var Lower_Case_Codes = arrayFromlowtoHigh(97, 122);
var Number_Char_Codes = arrayFromlowtoHigh(48, 57);
var Special_Char_Codes = arrayFromlowtoHigh(33, 47).concat(arrayFromlowtoHigh(33, 47)).concat(arrayFromlowtoHigh(58, 64))
  .concat(arrayFromlowtoHigh(91, 96)).concat(arrayFromlowtoHigh(123, 126));

// Write password to the #password input

function writePassword() {
  console.log(Upper_Case_Codes)

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
if (passWordlength < 8 || passWordlength > 128 || isNaN (passWordlength)) {
passWordlength = prompt("Enter a number between 8-128 for your password lenght");
passWordupperchar = confirm("Would you like Uppercase Characters?")
passWordlowerchar = confirm("Would you like Lowercase Characters?")
passWordnumberchar = confirm("Would you like Numbers?")
passWordspecialchar = confirm("Would you like Special Characters?")


}

if (!passWordupperchar === false && !passWordlowerchar === false && !passWordnumberchar === false && !passWordspecialchar === false) {
  confirm("You must select at least one!")
  generatePassword()

}

else if (passWordupperchar === true) {
  includeChar = includeChar.concat(Upper_Case_Codes)
}

else if (passWordlowerchar === true) {
  includeChar = includeChar.concat(Lower_Case_Codes)
}

else if (passWordnumberchar === true) {
  includeChar = includeChar.concat(Number_Char_Codes)
}

else if (passWordspecialchar === true) {
  includeChar = includeChar.concat(Special_Char_Codes)
}
 
for (var i=0; i < enter; i ++){
  var pickedpassword = [Math.floor(Math.random * Options.passWordlength)];
  password. push(pickedpassword)
}


};

