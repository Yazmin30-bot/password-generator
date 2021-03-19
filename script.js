// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  //Make sure that the lenght is between 8 and 128
  var lengthcorrect = true;
  var nextStep = true;
  while (lengthcorrect) {
    var numCharacters = window.prompt("How many characters would you like your password to contain?");
    console.log(numCharacters);
    if (numCharacters == null) {
      lengthcorrect = false;
      nextStep = false;
    } else {
      //Make sure that the character is numeric
      console.log("Es numerico " + !isNaN(numCharacters));
      if (!isNaN(numCharacters)) {
        //Make sura that the number is integer
        var isDecimal = numCharacters % 1 == 0;
        console.log("Es entero " + isDecimal);
        if (numCharacters % 1 == 0) {
          //Make sura that the number is between 8 and 128
          if (numCharacters < 8 || numCharacters > 128) {
            lengthcorrect = false;
            nextStep = false;
            if (numCharacters < 8) {
              window.alert("Password length must be at least 8 characters")
              nextStep = false;
            } else if (numCharacters > 128) {
              window.alert("Password length must be at most 128 characters")
              nextStep = false;
            }
          } else {
            lengthcorrect = false;
            nextStep = true;

          }

        } else {
          lengthcorrect = false;
          nextStep = false;
          window.alert("Number must be integer")
        }


      } else {
        lengthcorrect = false;
        nextStep = false;
        window.alert("Character must be numeric")
      }

    }
  }


  //Define types of characters and at least one character type should be selected
  var charcorrect = true;
  console.log("siguiente paso " + nextStep);
  if (numCharacters == null || nextStep == false) {
    charcorrect = false;
  } else {
    while (charcorrect) {
      var lowercase = window.confirm("Click OK to confirm including lowercase characters");
      console.log(lowercase);
      var uppercase = window.confirm("Click OK to confirm includingt uppercase characters");
      console.log(uppercase);
      var numeric = window.confirm("Click OK to confirm including numeric characters");
      console.log(numeric);
      var special = window.confirm("Click OK to confirm including special characters");
      console.log(special);
      if (lowercase == false && uppercase == false && numeric == false && special == false) {
        window.alert("At least one type of character should be selected");
        charcorrect = true;
      } else {
        charcorrect = false;
      }
    }
  }


  //Create a string with the characters and length selected
  if (nextStep == true) {
    var conditions = [lowercase, uppercase, numeric, special];
    var charactersr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", ' !@#$%^&*()-=_+{}:"<>?\\|[];\',./`~'];
    for (var i = 0; i < conditions.length; i++) {
      if (conditions[i] == false) {
        delete charactersr[i];
      }
    };
    console.log(charactersr);
    var str = charactersr.join('');
    console.log(str);


    //Generate the password with the type of characters selected
    var result = '';
    var characters = str;
    var charactersLength = characters.length;
    for (var i = 0; i < numCharacters; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }else{
    result="";
  }
  return result;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

