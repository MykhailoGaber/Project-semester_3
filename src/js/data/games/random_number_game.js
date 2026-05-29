import searchIcon from '../../../images/search-icon.png';

export const randomGame = () => {
  const gamesContainer = document.querySelector('.game-id_2');
  const gameHtml = `
    <h3 class="random_number__title">вгадай число,яке загадав комп'ютер</h3>
         <div class="random_number__inputTextContainer">
           <div class="random_number__input-container">
      <input type="number" id="random_number__input" placeholder="Введіть число " />
    <button class="random_number__button">
      <img src="${searchIcon}" class="random_number__img" alt="button" />
    </button>
        </div>
    <h3 class="random_number__gues"></h3>
        </div>
            <div class="random_number__line"></div>
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
  const text = document.querySelector('.random_number__gues');
  const button = document.querySelector('.random_number__button');
  const handleClick = () => {
    const userGuessRandomNumber = Number(input.value);
    if (userGuessRandomNumber === numberToGuess) {
      text.style.color = 'var(--color-text-success)';
      text.textContent = `Вітаю, ви вгадали число! (${numberToGuess})`;
      numberToGuess = randomInt(min, max);
    } else if (userGuessRandomNumber === Number('')) {
      text.style.color = 'var( --color-text-fail)';
      text.textContent = `Ви не ввели число ,спробуйте ще раз`;
      numberToGuess = randomInt(min, max);
    } else if (userGuessRandomNumber > 10 || userGuessRandomNumber < 1) {
      text.style.color = 'var( --color-text-fail)';
      text.textContent = `числа лише від 1 до 10`;
      numberToGuess = randomInt(min, max);
    } else {
      text.style.color = 'var( --color-text-fail)';
      text.textContent = `Ви не вгадали число(${numberToGuess}),спробуйте ще раз`;
      numberToGuess = randomInt(min, max);
    }
  };
  button.addEventListener('click', handleClick);
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
