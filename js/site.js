/*referenced by CSS to add and remove the responsive class for mobile support. */
function addRespClass() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Pulls and houses contact form information
var fields = {};
document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.openings = document.getElementById('openings');
  fields.message = document.getElementById('message');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;
  return (value.length > 0);
 }

 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.message, isNotEmpty);
  valid &= arePasswordsEqual();
  return valid;
 }

 class User {
  constructor(firstName, lastName, email, openings, message) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.openings = openings;
  this.message = message;
  }
 }

 function sendMessage(){
   if (isValid()){
     let usr = new User(firstName.value, lastName.value, email.value, message.value, openings.checked)

     alert('${usr.firstName}, your message has been sent!')
   }
   else {
     alert('There was an error in the form.')
   }
 }