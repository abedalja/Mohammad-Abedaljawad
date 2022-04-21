'use strict';

// we are selecting elements

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const name0EL = document.getElementById('name--0');
const name1EL = document.getElementById('name--1');

// creating condiditions

// we set player 1 to 0 and player 2 to 1 because arrays are zero based which will come in handy to add
// final score

// function to add name
const addPlayerName = function () {
  let playerOne = prompt('Player one, Enter your name ');
  let player1 = (name0EL.textContent = playerOne);

  let playerTwo = prompt('Player two, Enter your name ');
  let player2 = (name1EL.textContent = playerTwo);
};

// function to start the game

let scores, currentScore, currentState, activePlayer;

const init = function () {
  addPlayerName();
  scores = [0, 0];
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  currentState = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

init();

// function to Switch player

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// we roll a dice now
// 1- generate the roll then display with the picture, if its one, switch player

btnRoll.addEventListener('click', function () {
  if (currentState) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //   console.log(dice);

    diceEL.classList.remove('hidden');

    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //   add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //   you lose the current score and player gets switched
      // before we do the switch we set the current value to zero beacuse it rolled one after
      // that we set the current score to 0
      // we can use toggle, adds something if it is not there, or remove something if it is there
      // player 0 defaultly starts with the class player active, once we switch to player one
      // Js chekcs if player 0 has the class which it does, so it gets removed, and checks if player
      // one has which it doesnt, gets added.
      switchPlayer();
    }
  }
});

// add current score to the active player score
// if score is more than 100 win the game else switch game

btnHold.addEventListener('click', function () {
  if (currentState) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      currentState = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      alert(`player ${activePlayer + 1}  has won game`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
