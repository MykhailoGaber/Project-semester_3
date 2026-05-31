export const maxNumberGame = () => {
    const gamesContainer = document.querySelector('.game-id_8');
    const gameHtml =`<div class="container">
  <h1 class="title">Введіть 3 числа</h1>
  
  <div class="input-group">
    <input type="number" class="number-input" placeholder="Введіть число">
    <input type="number" class="number-input" placeholder="Введіть число">
    <input type="number" class="number-input" placeholder="Введіть число">
  </div>

  <p class="result-text">
    Найбільше число, яке ви ввели - <span id="max-result">(число)</span>
  </p>
</div>`
  gameContainer.innerHtml = gameHtml 
  const inputs = document.querySelectorAll('.maxnumber-input');
const resultSpan = document.getElementById('maxnumber-result');

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

}