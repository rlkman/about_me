'use strict';


var points = 0;

var yesCorrect = function(results) {
  if (results.toLowerCase() === "yes" || results.toLowerCase() === "y") {
    return true;
  } else if (results.toLowerCase() !== "no" || results.toLowerCase() !== "n") {
    return null;
  }
}

var questionOne = prompt('Do I like pina coladas?')
if (yesCorrect(questionOne) === true) {
  points +=10;
} else if (yesCorrect(questionOne) === null) {
  alert('Excuse me! That is not a valid answer! Please try harder next time.')
}
console.log("user points after question one", points);

var questionTwo = prompt('Do I like getting lost in the rain?')
if (yesCorrect(questionTwo) === false) {
  points +=10;
}
console.log("user points after question two", points);

var questionThree = prompt('Am I into yoga?')
if (yesCorrect(questionThree) === false) {
  points +=10;
}
console.log("user points after question three", points);

var questionFour = prompt('Do I have half a brain?')
if (yesCorrect(questionFour) === true) {
  points +=10;
}
console.log("user points after question four", points);

var questionFive = prompt('Do I actually like this song?')
if (yesCorrect(questionFive) === true) {
  points +=10;
}
console.log("user points after question five", points);
