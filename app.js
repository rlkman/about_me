'use strict';


var points = 0;

var winningMessage = function() {
  points += 10;
  console.log('User earned 10 points');
  alert('Woo! 10 points for you Glen Coco! You go Glen Coco!');
};
var losingMessage = function() {
  console.log('User got no points');
  alert('You really don\'t know me at all, do you? Keep going! Better luck next question!');
};

var wrongInputMessage = function() {
  console.log('User input an answer that was invalid');
  alert('Excuse me! That is not a valid answer! Please try harder next time.');
};

var yesCorrect = function(results) {
  if (results.toLowerCase() === 'yes' || results.toLowerCase() === 'y') {
    winningMessage();
  } else if (results.toLowerCase() === 'no' || results.toLowerCase() === 'n') {
    if (results === questionFive) {
      alert('Nope, wrong answer. And bummer, that was the last question!');
    } else {
      losingMessage();
    }
  } else {
    wrongInputMessage();
  }
};

var noCorrect = function(results) {
  if (results.toLowerCase() === 'no' || results.toLowerCase() === 'n') {
    winningMessage();
  } else if (results.toLowerCase() === 'yes' || results.toLowerCase() === 'y') {
    losingMessage();
  } else {
    wrongInputMessage();
  }
};


var userName = prompt('Welcome! By visiting this webpage you have unknowingly subjected yourself to my guessing game. Nobody cares if you want to play or not, you are here now. Let the games begin! You will receive 10 points for a correct answer, and no points for a wrong answer (duh). Lets see how many points you can get before the game is over! But first, I\'m going to need to know your name.');
console.log('name of user', userName);
alert('Welcome ' + userName + '! Thanks for playing. We may now continue.');

var questionOne = prompt('Do I have a puppy named Chloe?');
yesCorrect(questionOne);
console.log('user points after question one', points);

var questionTwo = prompt('Do I love to play baseball?');
noCorrect(questionTwo);
console.log('user points after question two', points);

var questionThree = prompt('Have I worked as a hostess in a restaurant?');
noCorrect(questionThree);
console.log('user points after question three', points);

var questionFour = prompt('Am I a wedding photographer on the side?');
yesCorrect(questionFour);
console.log('user points after question four', points);

var questionFive = prompt('Did I move to Seattle from Bremerton?');
yesCorrect(questionFive);
console.log('user points after question five', points);

if (points === 50) {
  alert('Congratulations! You finished with ' + points + '!');
} else if (points >= 30) {
  alert('Only ' + points + ' points.... Maybe try again. I could play this game all day.');
} else {
  alert('You suck. Only ' + points + ' points, really?! We\'re not friends anymore. Bye!');
}
