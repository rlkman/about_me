'use strict';

var points = 0;

var userName = prompt('Welcome! By visiting this webpage you have unknowingly subjected yourself to my guessing game. Nobody cares if you want to play or not, you are here now. Let the games begin! You will receive 10 points for a correct answer, and no points for a wrong answer (duh). Lets see how many points you can get before the game is over! But first, I\'m going to need to know your name.');
console.log('name of user', userName);
alert('Welcome ' + userName + '! Thanks for playing. We may now continue.');

var questionOne = prompt('Do I have a puppy named Chloe?').toLowerCase();
if (questionOne === 'y' || questionOne === 'yes') {
  points += 10;
  alert('Way to go, ' + userName + '! You have earned 10 points! Chloe is an Australian Shepherd/Pitbull mix and goes by Clubby for short.');
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('Ooh, not so good. Better luck next time, ' + userName);
} else {
  alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
}
console.log('user points after question one', points);

var questionTwo = prompt('Do I love to play baseball?').toLowerCase();
if (questionTwo === 'n' || questionTwo === 'no') {
  points += 10;
  alert('Woop woop! ' + userName + '! You have earned 10 points! I have never liked baseball, but I do love basketball!');
} else if (questionTwo === 'y' || questionTwo === 'yes') {
  if (points === 0) {
    alert('Ugh, ' + userName + ', you really need to study up. At this rate you won\'t get any right!');
  } else {
    alert('Ooh, not your best. Better luck next time, ' + userName);
  }
} else {
  alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
}
console.log('user points after question two', points);

var questionThree = prompt('Have I worked as a hostess in a restaurant?').toLowerCase();
if (questionThree === 'n' || questionThree === 'no') {
  points += 10;
  alert('Ohhh yeah, ' + userName + '! You have earned 10 points! I started as a waitress, not a hostess.');
} else if (questionThree === 'y' || questionThree === 'yes') {
  if (points === 0) {
    alert('Ugh, ' + userName + ', you really need to study up. At this rate you won\'t get any right!');
  } else {
    alert('Ooh, not your best. Better luck next time, ' + userName);
  }
} else {
  alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
}
console.log('user points after question three', points);

var questionFour = prompt('Am I a wedding photographer on the side?').toLowerCase();
if (questionFour === 'y' || questionFour === 'yes') {
  points += 10;
  alert('Way to go, ' + userName + '! You have earned 10 points! You need photos taken? I\'m your gal!');
} else if (questionFour === 'n' || questionFour === 'no') {
  alert('Ooh, not so good. Better luck next time, ' + userName);
} else {
  alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
}
console.log('user points after question four', points);

var questionFive = prompt('Did I move to Seattle from Bremerton?').toLowerCase();
if (questionFive === 'y' || questionFive === 'yes') {
  points += 10;
  alert('Way to go, ' + userName + '! You have earned 10 points! I moved to Seattle to attend UW in 2010.');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert('Ooh, not so good. Better luck next time, ' + userName);
} else {
  alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
}
console.log('user points after question five', points);

if (points === 50) {
  alert('Congratulations! You finished with ' + points + '!');
} else if (points >= 30) {
  alert('Only ' + points + ' points.... Maybe try again. I could play this game all day.');
} else {
  alert('You suck. Only ' + points + ' points, really?! We\'re not friends anymore. Bye!');
}
