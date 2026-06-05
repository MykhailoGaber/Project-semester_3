import searchIcon from '../../../images/search-icon.png';

export const initLeapYear = () => {
  const gamesContainer = document.querySelector('.game-id_1');
  const gameHtml = `<h3 class="game__title">Перевір в який рік ти народився</h3>
           <div class="leap_year__inputTextContainer">
             <div class="leap_year__input-container">
        <input type="number" id="leap_year__input" placeholder="Введіть рік народження " />
      <button class="leap_year__button">
        <img src="${searchIcon}" class="leap_year__img" alt="button" />
      </button>
          </div>
      <h3 class="leap_year__verification"></h3>
          </div>
              <div class="leap_year__line"></div>`;
  gamesContainer.innerHTML = gameHtml;

  const input = document.querySelector('#leap_year__input');
  const text = document.querySelector('.leap_year__verification');
  const button = document.querySelector('.leap_year__button');

  button.addEventListener('click', () => {
    const userBirthday = Number(input.value);
    if (userBirthday % 4 === 0) {
      text.textContent = 'Ви народилися у високосний рік!';
      text.style.color = 'var(--color-text-success)';
    } else {
      text.textContent = 'Ви народилися не у високосний рік!';
      text.style.color = 'var(--color-text-fail)';
    }
  });
};
