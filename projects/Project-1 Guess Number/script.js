'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👑 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '40rem';

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.highscore').value = 'dddd';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '😢 Number to High' : '😢 Number to Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '😱 You lost ';
  }
});

//     else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😢 Number to High';
//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😱 You lost ';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😢 Number to Low';
//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😱 You lost ';
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score = 20;

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
