export const maxNumberGame = () => {
  const gameContainer = document.querySelector('.game-id_9');
  const gameHtml = `
  <div class="maxNumber__container">
  <h1 class="maxNumber__title">Введіть 3 числа</h1>
  
  <div class="maxNumber__input-group">
    <input type="number" class="maxNumber__input" placeholder="Введіть число">
    <input type="number" class="maxNumber__input" placeholder="Введіть число">
    <input type="number" class="maxNumber__input" placeholder="Введіть число">
  </div>

  <p class="maxNumber__result">
    Найбільше число, яке ви ввели - <span id="max-result">(число)</span>
  </p>
  </div>
  <div class="random_number__line"></div>
`;
  gameContainer.innerHTML = gameHtml;
  const inputs = document.querySelectorAll('.maxNumber__input');
  const resultSpan = document.getElementById('max-result');

  function calculateMax() {
    const values = [];

    inputs.forEach(input => {
      if (input.value !== '') {
        values.push(parseFloat(input.value));
      }
    });

    if (values.length > 0) {
      const maxNumber = Math.max(...values);
      resultSpan.textContent = maxNumber;
    } else {
      resultSpan.textContent = '(число)';
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', calculateMax);
  });
};
