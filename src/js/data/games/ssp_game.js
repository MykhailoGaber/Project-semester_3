export const initSspGame = () => {
  const gameContainer = document.querySelector('.game-id_3');

  gameContainer.innerHTML = `
<h2>Камінь - ножиці - папір</h2>

<div class="area">
  <div class="btns-container">
    <button class="btn-ssp btn-stone">stone
    </button>
    <button class="btn-ssp btn-scissors">scissors
    </button>
    <button class="btn-ssp btn-paper">paper
    </button>
  </div>

  <div class="score-container">
    <p>Рахунок:</p>
    <p>Комп’ютер - <span class="computer-score">0</span></p>
    <p>Ви - <span class="user-score">0</span></p>
  </div>
</div>

<p class="result"></p>

<button class="btn-check">Варіант комп’ютера</button>
  `;

  const botChoices = ['stone', 'scissors', 'paper'];
  let userChoice = '';
  let computerScore = 0;
  let userScore = 0;

  const resultContainer = document.querySelector('.result');

  const buttonStone = document.querySelector('.btn-stone');
  const buttonScissors = document.querySelector('.btn-scissors');
  const buttonPaper = document.querySelector('.btn-paper');

  const btnCheck = document.querySelector('.btn-check');

  const botInfo = document.querySelector('.computer-score');
  const userInfo = document.querySelector('.user-score');

  buttonStone.addEventListener('click', () => {
    userChoice = 'stone';
  });

  buttonScissors.addEventListener('click', () => {
    userChoice = 'scissors';
  });

  buttonPaper.addEventListener('click', () => {
    userChoice = 'paper';
  });

  // Логіка
  btnCheck.addEventListener('click', () => {
    if (!userChoice) {
      resultContainer.textContent = 'Спочатку зробіть вибір!';
      return;
    }

    const botChoice = botChoices[Math.floor(Math.random() * botChoices.length)];
    // console.log(botChoice);

    let message = '';

    if (userChoice === botChoice) {
      message = 'Нічия!';
      resultContainer.textContent = message;
      resultContainer.style.color = '#000000';
    } else if (
      (userChoice === 'stone' && botChoice === 'scissors') ||
      (userChoice === 'scissors' && botChoice === 'paper') ||
      (userChoice === 'paper' && botChoice === 'stone')
    ) {
      message = 'Ви виграли раунд!';
      userScore++;
      userInfo.textContent = userScore;
      resultContainer.textContent = message;
      resultContainer.style.color = '#039900';
    } else {
      message = 'Комп’ютер виграв раунд!';
      computerScore++;
      botInfo.textContent = computerScore;
      resultContainer.textContent = message;
      resultContainer.style.color = '#990000';
    }
    console.log(userChoice);
  });
};
