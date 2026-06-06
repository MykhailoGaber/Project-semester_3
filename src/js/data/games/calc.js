export const timeCalculator = () => {
    const gamesContainer = document.querySelector('.game-id_5');

    const gameHtml = `
    <h3 class="game__title">Калькулятор часу</h3>

    <div class="time-calc">
      <input
        type="number"
        class="time-input"
        placeholder="Введіть число"
      >

      <button type="button" class="time-btn">
      </button>

      <div class="time-line"></div>

      <span class="time-result">
        3 дн. 15:45:01
      </span>
    </div>
  `;

    gamesContainer.innerHTML = gameHtml;

    const input = document.querySelector('.time-input');
    const button = document.querySelector('.time-btn');
    const result = document.querySelector('.time-result');

    button.addEventListener('click', () => {
        const days = Number(input.value);

        if (isNaN(days) || input.value === '') {
            result.textContent = 'Помилка';
            return;
        }

        const totalSeconds = days * 86400;

        const d = Math.floor(totalSeconds / 86400);
        const h = Math.floor((totalSeconds % 86400) / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        result.textContent =
            `${d} дн. ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    });
};