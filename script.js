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