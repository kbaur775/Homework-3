// Static variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//  Instructions to start

window.onload = alert("Press 'Generate password' ");

// Password Generator

function generatePass(){
 var allChars = [];
 var resultPass = "";

// Dynamic variables

 var Totlength = prompt("Choose a length of at least 8 characters and no more than 128 characters");

 if(Totlength <8 || Totlength > 128){
     alert("Remember no less than 8 and no more than 128\nStart over.");
 }

// Confirm conditions
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
         Array.prototype.push.apply(allChars, abcUpperArr);
     }

     if(confirm("Would you like your password to contain lower case letters?")){
         Array.prototype.push.apply(allChars, abcLowerArr);
     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allChars, numArr);
     }

     if(confirm("Would you like your password to contain symbols?")){
         Array.prototype.push.apply(allChars, symArr);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of condition to generate a password!\nStart over.");
     }

// Use confirmed information and generate password as a result

     else{
         for(var i=0; i<Totlength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

// Result

     document.getElementById("password").innerHTML = resultPass;
}