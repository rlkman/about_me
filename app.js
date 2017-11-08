'use strict';


var points = 0;

var winningMessage = function() {
  points += 10;
  alert('Woo! Way to go! You have ' + points + ' points, you rock!');
}
var losingMessage = function() {
  alert('You really don\'t know me at all, do you? Keep going! Better luck next question!');
}

var wrongInputMessage = function() {
  alert('Excuse me! That is not a valid answer! Please try harder next time.');
}

var yesCorrect = function(results) {
  if (results.toLowerCase() === "yes" || results.toLowerCase() === "y") {
    winningMessage();
  } else if (results.toLowerCase() === "no" || results.toLowerCase() === "n") {
    losingMessage();
  } else {
    wrongInputMessage();
  }
}

var noCorrect = function(results) {
  if (results.toLowerCase() === "no" || results.toLowerCase() === "n") {
    winningMessage();
  } else if (results.toLowerCase() === "yes" || results.toLowerCase() === "y") {
    losingMessage();
  } else {
    wrongInputMessage();
  }
}

alert('Welcome! By visiting this webpage you have unknowingly subjected yourself to my guessing game. Nobody cares if you want to play or not, you are here now. Let the games begin! You will receive 10 points for a correct answer, and no points for a wrong answer (duh). Lets see how many points you can get before the game is over!')

var questionOne = prompt('Do I like pina coladas?')
yesCorrect(questionOne);
console.log("user points after question one", points);

var questionTwo = prompt('Do I like getting lost in the rain?')
noCorrect(questionTwo);
console.log("user points after question two", points);

var questionThree = prompt('Am I into yoga?')
noCorrect(questionThree);
console.log("user points after question three", points);

var questionFour = prompt('Do I have half a brain?')
yesCorrect(questionFour);
console.log("user points after question four", points);

var questionFive = prompt('Do I actually like this song?')
yesCorrect(questionFive);
console.log("user points after question five", points);

if (points === 50) {
  alert('Congratulations! You finished with ' + points + "!");
} else if (points >= 30) {
  alert('Maybe try again. I could play this game all day.');
} else {
  alert('You suck. We\'re not friends anymore. Bye!');
}
