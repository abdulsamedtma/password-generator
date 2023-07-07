//   Pseudo code
// 1. Prompt the user for the password criteria
  // i. Password length 8 < 128 characters
  // ii. Lowercase, uppercase, numbers, special characters
  // 2.  Validate the input
  // 3.  Generate password based on criteria
  // 4. Display password on the page.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//Function to generate random password
function generatePassword() {
    //Define charater set for different type of characters
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "@#!$%^&*()_+\-=[]{}~;':><.?/`";

    //Ask for the password length and validate the input
    let passwordLength = 0;
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(
            prompt("Please enter your desire password length (8 to 128 characters):")
        );
    }

    // Ask for character types to be include in password
    const includeUpppercase = confirm("Include uppercase letters?");
    const includeLowercase = confirm("Include lowercase letters?");
    const includenumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    // Validate that atleast one charater type is selection 
    if (
        !includeUpppercase&&
        !includeLowercase &&
        !includenumeric &&
        !includeSpecial
      ) {
        alert("Please You must select at least one character type.");
        return;
      }
// Generate the charaters set based on the user selected charater type 
let characterSet = "";
if (includeUpppercase) characterSet += uppercaseChars;
if (includeLowercase) characterSet += lowercaseChars;
if (includeUpppercase) characterSet += numericChars;
if (includeSpecial) characterSet += specialChars;
// Generate the Password
let password = "";
for (let i =0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
}
return password;
}

// Funtion to update the password textarea with the generated password
function updatePassword(){
    const generatedPassword= generatedPassword();
    const passwordTextArea = document.getElementById("password");
    passwordTextArea.value = generatedPassword;
}
    // Add event listener to generate button
    const generatebutton = document.getElementById("generate");
    generatebutton.addEventListener("click", writePassword);
