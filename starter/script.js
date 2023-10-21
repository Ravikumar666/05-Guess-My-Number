//difinig DOM elements
const messageClass = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreClass = function (score) {
  document.querySelector('.score').textContent = score;
};

const numberClass = function (number) {
  document.querySelector('.number').textContent = number;
};

const backgroundColor_body = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

//defing vaaraibles
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  //when there is no Input
  if (!guess) {
    messageClass('📝 Please choose your Number at input');

    // when we win the game
  } else if (guess === secretNumber) {
    messageClass('🎉Wow Correct Number');
    numberClass(secretNumber);
    backgroundColor_body('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //  when guess is went wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageClass(guess > secretNumber ? '⬆️ Too High' : '⬇️ Too Low');
      score--;
      scoreClass(score);
    } else {
      messageClass('😂 You lose the Game');
      scoreClass(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  backgroundColor_body('#222');
  scoreClass(score);
  messageClass('Start Guessing...');
  numberClass('?');
});
