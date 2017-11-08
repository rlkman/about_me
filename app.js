'use strict';


var points = 0;

var yesCorrect = function(results) {
  if (results.toLowerCase() === "yes" || results.toLowerCase() === "y") {
    points += 10;
    alert('Woo! Way to go! You have ' + points + ' points, you rock!');
  } else if (results.toLowerCase() === "no" || results.toLowerCase() === "n") {
    alert('You really don\'t know me at all, do you? Keep going! Better luck next question!');
  } else {
    alert('Excuse me! That is not a valid answer! Please try harder next time.');
  }
}

var noCorrect = function(results) {
  if (results.toLowerCase() === "no" || results.toLowerCase() === "n") {
    points += 10;
    alert('Woo! Way to go! You have ' + points + ' points, you rock!');
  } else if (results.toLowerCase() === "yes" || results.toLowerCase() === "y") {
    alert('You really don\'t know me at all, do you? Keep going! Better luck next question!');
  } else {
    alert('Excuse me! That is not a valid answer! Please try harder next time.');
  }
}

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
