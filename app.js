'use strict';

var points = 0;

var userName = prompt('Welcome! By visiting this webpage you have unknowingly subjected yourself to my guessing game. Nobody cares if you want to play or not, you are here now. Let the games begin! You will receive 10 points for a correct answer, and no points for a wrong answer (duh). Lets see how many points you can get before the game is over! But first, I\'m going to need to know your name.');
console.log('name of user', userName);
alert('Welcome ' + userName + '! Thanks for playing. We may now continue.');

// var questionOne = prompt('Do I have a puppy named Chloe?').toLowerCase();
// if (questionOne === 'y' || questionOne === 'yes') {
//   points += 10;
//   alert('Way to go, ' + userName + '! You have earned 10 points! Chloe is an Australian Shepherd/Pitbull mix and goes by Clubby for short.');
// } else if (questionOne === 'n' || questionOne === 'no') {
//   alert('Ooh, not so good. Better luck next time, ' + userName);
// } else {
//   alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
// }
// console.log('user points after question one', points);
//
// var questionTwo = prompt('Do I love to play baseball?').toLowerCase();
// if (questionTwo === 'n' || questionTwo === 'no') {
//   points += 10;
//   alert('Woop woop! ' + userName + '! You have earned 10 points! I have never liked baseball, but I do love basketball!');
// } else if (questionTwo === 'y' || questionTwo === 'yes') {
//   if (points === 0) {
//     alert('Ugh, ' + userName + ', you really need to study up. At this rate you won\'t get any right!');
//   } else {
//     alert('Ooh, not your best. Better luck next time, ' + userName);
//   }
// } else {
//   alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
// }
// console.log('user points after question two', points);
//
// var questionThree = prompt('Have I worked as a hostess in a restaurant?').toLowerCase();
// if (questionThree === 'n' || questionThree === 'no') {
//   points += 10;
//   alert('Ohhh yeah, ' + userName + '! You have earned 10 points! I started as a waitress, not a hostess.');
// } else if (questionThree === 'y' || questionThree === 'yes') {
//   if (points === 0) {
//     alert('Ugh, ' + userName + ', you really need to study up. At this rate you won\'t get any right!');
//   } else {
//     alert('Ooh, not your best. Better luck next time, ' + userName);
//   }
// } else {
//   alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
// }
// console.log('user points after question three', points);
//
// var questionFour = prompt('Am I a wedding photographer on the side?').toLowerCase();
// if (questionFour === 'y' || questionFour === 'yes') {
//   points += 10;
//   alert('Way to go, ' + userName + '! You have earned 10 points! You need photos taken? I\'m your gal!');
// } else if (questionFour === 'n' || questionFour === 'no') {
//   alert('Ooh, not so good. Better luck next time, ' + userName);
// } else {
//   alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
// }
// console.log('user points after question four', points);
//
// var questionFive = prompt('Did I move to Seattle from Bremerton?').toLowerCase();
// if (questionFive === 'y' || questionFive === 'yes') {
//   points += 10;
//   alert('Way to go, ' + userName + '! You have earned 10 points! I moved to Seattle to attend UW in 2010.');
// } else if (questionFive === 'n' || questionFive === 'no') {
//   alert('Ooh, not so good. Better luck next time, ' + userName);
// } else {
//   alert('Hey! You didn\'t input a valid answer! Please try harder next time.');
// }
// console.log('user points after question five', points);

var questionSix = prompt('How many puppies do I want to have someday?');
var randomNumber = Math.floor(Math.random() * 100);
console.log('number they were supposed to guess', randomNumber);
for (var i = 0; i <4; i++) {
  console.log('number they guessed', questionSix);
  console.log('value of i', i);
  if (isNaN(questionSix)) {
    if (i === 3) {
      alert('That was your last try, sorry!');
    } else {
      questionSix = prompt('That is not a valid answer. Please try harder next time.');
    }
  } else if (questionSix < randomNumber) {
    if (i === 3) {
      alert('Ooh, that was your last try! Sorry!');
    } else if (i ===2) {
      questionSix = prompt('Careful! This is your last try!');
    } else {
      questionSix = prompt('Oooh, no cigar. You\'re a little bit too low. Try again!');
    }
  } else if (questionSix > randomNumber) {
    if (i === 3) {
      alert('Ooh, that was your last try! Sorry!');
    } else {
      questionSix = prompt('Too high!! Dial it back a little bit, crazy.');
    }
  } else {
    alert('WOW! I\'m impressed! I can\'t believe you guessed that. 10 points for you!');
    points +=10;
    i = 4;
  }
}












var placesAnswers = ['philippines', 'canada', 'new orleans', 'california', 'oregon'];
var questionSeven = prompt('What places have I visited?').toLowerCase();
for (i = 0; i < 5; i++) {
  if (questionSeven === placesAnswers[i]) {
    alert('Wow! Good for you, ' + userName + '.');
    i = 5;
    // NEED TO ADD CODE IN HERE THAT DISPLAYS ALL THE ANSWERS
  }
}















if (points === 70) {
  alert('Congratulations! You got 7/7 answers correct and finished with 70 points!');
} else if (points >= 40) {
  alert('Only ' + points + ' points.... Maybe try again, ' + userName + '. You only got ' + points/10 + '/10 answers correct. I could play this game all day.');
} else {
  alert('You suck. Only ' + points + ' points, really?! That\'s ' + points/10 + '/10 questions. We\'re not friends anymore. Bye!');
}
