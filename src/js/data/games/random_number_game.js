export const randomGame = () => {
  const gamesContainer = document.querySelector('.game-id_2');
  const gameHtml = `
    <h3 class="random_number__title">вгадай число,яке загадав комп'ютер</h3>
         <div class="label_text__container">
            <label class="random_number__label" for="random_number__input">
      <input type="number" id="random_number__input" placeholder="Введіть число" />
    </label>
    <h3 class="guess_number"></h3>
        </div>
`;
  gamesContainer.innerHTML = gameHtml;
  const min = 1;
  const max = 10;
  const randomInt = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  randomInt(1, 10);
  let numberToGuess = randomInt(min, max);
  const input = document.querySelector('#random_number__input');
  const text = document.querySelector('.guess_number');

  const handleClickEnter = event => {
    if (event.key === 'Enter') {
      const userGuessRandomNumber = Number(input.value);
      if (userGuessRandomNumber === numberToGuess) {
        text.style.color = '#039900';
        text.textContent = `Ви вгадали число(${numberToGuess})`;
        numberToGuess = randomInt(min, max);
      } else if (userGuessRandomNumber === Number('')) {
        text.style.color = 'rgb(190, 0, 0)';
        text.textContent = `Ви не ввели число ,спробуйте ще раз`;
        numberToGuess = randomInt(min, max);
      } else if (userGuessRandomNumber > 10 || userGuessRandomNumber < 1) {
        text.style.color = 'rgb(190, 0, 0)';
        text.textContent = `числа лише від 1 до 10`;
        numberToGuess = randomInt(min, max);
      } else {
        text.style.color = 'rgb(190, 0, 0)';
        text.textContent = `Ви не вгадали число(${numberToGuess}),спробуйте ще раз`;
        numberToGuess = randomInt(min, max);
      }
    }
  };
  document.addEventListener('keydown', handleClickEnter);
};
