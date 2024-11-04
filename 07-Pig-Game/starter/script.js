'use strict';

//Select element from html
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');

const currentScorePlayer1E0 = document.getElementById('current--0');
const currentScorePlayer2E1 = document.getElementById('current--1');

diceEl.classList.add('hidden');

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

let globalScoreValue, currentScore, activePlayer, playing;

const init = () => {
  globalScoreValue = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScorePlayer1E0.textContent = 0;
  currentScorePlayer2E1.textContent = 0;

  diceEl.classList.add('hidden');
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
};

init();

//Rolling dice logic
buttonRoll.addEventListener('click', () => {
  if (playing) {
    const randomDice = Number(Math.trunc(Math.random() * 6) + 1);
    console.log(randomDice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', () => {
  if (playing) {
    globalScoreValue[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      globalScoreValue[activePlayer];

    if (globalScoreValue[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', init);
