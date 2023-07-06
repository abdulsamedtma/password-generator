// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("Awsome you clicked the button");
  // 1. Prompt the user for the password criteria
  // i. Password length 8 < 128 characters
  // ii. Lowercase, uppercase, numbers, special characters
  // 2.  Validate the input
  // 3.  Generate password based on criteria
  // 4. Display password on the page.
  return "Generate password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate a random password
function generatePassword() {
  // Define character sets for different types of characters
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+\-=[]{}~;':><.?/`|";


  // Ask for password length and validate the input
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(
      prompt("Please enter the desired password length (8 to 128 characters):")
    );
  }

  // Ask for character types to include
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("You must select at least one character type.");
    return;
  }

  // Generate the character set based on selected character types
  let characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;
  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}

// Function to update the password textarea with the generated password
function updatePassword() {
  const generatedPassword = generatePassword();
  const passwordTextArea = document.getElementById("password");
  passwordTextArea.value = generatedPassword;
}

// // Add event listener to the Generate Password button
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", updatePassword);
