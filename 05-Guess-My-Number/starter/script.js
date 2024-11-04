'use strict';

// console.log(document.querySelector('.message')
// .textContent);
// document.querySelector('.message').textContent = ':tada: Correct Number!';
// console.log(document.querySelector('.message')
// .textContent);
// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent =15;
// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const preditFunction = status => {
    console.log(scoreValue);
    if (scoreValue > 0) {
      document.querySelector('.message').textContent = `${status}`;
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = ' 💥You Loose the game';
    }
  };

  if (!guess) {
    document.querySelector('.message').textContent = '🛑  No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';

    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    preditFunction('📈 Too high');
  } else if (guess < secretNumber) {
    preditFunction('📈 Too Low');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
