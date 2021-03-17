// Assignment Code
var generateBtn = document.querySelector("#generate");



var background = document.getElementById('container')
background.style.backgroundImage = 'url(https://picsum.photos/200/300)'

background.style.backgroundSize = 'cover'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {

 

  //Make sure that the lenght is between 8 and 128
 
   var numCharacters = window.prompt("How many characters do you want");
    if (numCharacters < 8 || numCharacters > 128) {
      window.alert("length of at least should be 8 characters and no more than 128 characters")
      generatePassword();
    }

  //Define types of characters and at least one character type should be selected

  var lowercase = window.confirm("Do you want lowercase characters?");
  //console.log(lowercase);
  var uppercase = window.confirm("Do you want uppercase characters?");
  //console.log(uppercase);
  var numeric = window.confirm("Do you want numeric characters?");
  //console.log(numeric);
  var special = window.confirm("Do you want special characters?");
  //console.log(special);
  if(lowercase==false && uppercase==false && numeric==false && special==false){
    window.alert("at least one character type should be selected");
    generatePassword()
  }

  //Generate the password with the type of characters selected
  var conditions = [lowercase, uppercase, numeric, special];
  var charactersr =["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789",'!@#$%^&*()_+{}:"<>?\|[];\',./`~'];
  for (var i = 0; i < conditions.length; i++) {
    if(conditions[i]==false){
      delete charactersr[i];
    }
  };
  //console.log(charactersr);
  var str =charactersr.join('');
  //console.log(str);
  
  var result = '';
   var characters = str;
   var charactersLength = characters.length;
   for ( var i = 0; i < numCharacters; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

