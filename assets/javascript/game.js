$(document).ready(function() {
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var compChoice ="";

var userGuess= [];


	
var letters = ["a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// when user chooses a key
	document.onkeyup = function(event){
	 var letter = String.fromCharCode(event.keyCode).toLowerCase(); //userGuess = "n";
	 userGuess.push(letter);
	 document.getElementById("lettersGuessed").innerHTML = ("Your guesses so far: " + userGuess);
}
	
 //Computer makes a choice 
	var compChoice = letters[Math.floor(Math.random() * letters.length)];{
}
	console.log(compChoice);

// subtrack each guess from the total of 9
	function charCount(event){
		var guessesLeft, charDisplay, counter, lastkey;
		textEntered =document.getElementById(userGuess).value;
		charDisplay = document.getElementById("guessesLeft");
		counter = (9 - (userGuess.length));
		charDisplay.userGuess = counter;
	}
function addscore(){
	if (userGuess === compChoice){
		document.getElementById("wins").innerHTML = (+1)
	}
	else (userGuess == compChoice){
	document.getElementById("losses").innerHTML = (-1)
	}



};