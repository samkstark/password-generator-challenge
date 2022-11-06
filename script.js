//pseudocode notes
//user going to click button to generate a secure password
//addEventListener DONE
//user asked how long, upper or lower case/numeric or special characters
//make prompt for how long password will be
//confirm for using upper or lower case, numbers, special characters
//password going to show up either on screen or window
//function: 
//need an array of characters computer can choose from
//need to randomly pull characters from array
//display random characters to user

//function test() {
  //console.log(document.getElementById.querySelector("#frank").checked);


// Assignment code here
function generatePassword() {

  var userInput = prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    alert("That is not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    alert("The password length must be between 8 and 128 characters!")
    return
}

var yesNumbers = confirm("Would you like your password to include numbers?")
var yesSymbols = confirm("Would you like your password to include symbols?")
var yesLower = confirm("Would you like your password to include lowercase letters?")
var yesUpper = confirm("Would you like your password to include uppercase letters?")

var numberList = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]  
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "="]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []

var optionsCart = []


for (var i = 0; i < numberList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (yesNumbers === true) {
optionsCart.push(numberList)
}

if (yesSymbols === true) {
optionsCart.push(symbolList)
}

if (yesLower === true) {
optionsCart.push(lowercaseList)
}

if (yesUpper === true) {
optionsCart.push(uppercaseList)
}

var generatedPassword = "" 
for (var i = 0; i < passwordLength; i++) {
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 