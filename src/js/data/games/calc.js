import searchIcon from '../../../images/calc_img.svg';
export const timeCalculator = () => {
  const gamesContainer = document.querySelector('.game-id_5');

  const calculatorHtml = `
    <h3 class="time-calculator-title">Калькулятор часу</h3>

    <div class="time-calculator">

      <div class="time-input-wrapper">
        <input
          type="number"
          class="time-input"
          placeholder="Введіть число"
        />

        <button type="button" class="time-search-btn">
        <img src="${searchIcon}" class="calc-img" alt="button" />
        </button>
      </div>

      <div class="time-divider"></div>

      <p class="time-result"></p>

    </div>
    <div class="line"></div>
  `;

  gamesContainer.innerHTML = calculatorHtml;

  const input = document.querySelector('.time-input');
  const button = document.querySelector('.time-search-btn');
  const result = document.querySelector('.time-result');
  result.textContent = '0 дн. 00:00:00';
  button.addEventListener('click', () => {
    const value = Number(input.value);

  

    const days = Math.floor(value / 24);
    const hours = value % 24;

    result.textContent =
      `${days} дн. ${String(hours).padStart(2, '0')}:00:00`;
  });
};