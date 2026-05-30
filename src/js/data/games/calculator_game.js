export const calculatorGame = () => {
  const gamesContainer = document.querySelector('.game-id_4');

  const gameHtml = `
  <h3 class="game__title">Калькулятор</h3>
<div class="calc-div">
<input
  class="calc-number calc-number-1" 
  type="number"
  placeholder="Введіть число"
/>

<div class="calc-symboles">
  <ul class="calc-list">
    <li class="calc-item">
      <button type="button" class="calc-button calc-button-style addition">+</button>
    </li>
    <li class="calc-item">
      <button type="button" class="calc-button calc-button-style multiplication">*</button>
    </li>
    <li class="calc-item">
      <button type="button" class="calc-button calc-button-style substraction">-</button>
    </li>
    <li class="calc-item">
      <button type="button" class="calc-button calc-button-style division">/</button>
    </li>
  </ul>
</div>
<input
  class="calc-number calc-number-2"
  type="number"
  placeholder="Введіть число"
/>
<button type="button" class="calc-result calc-button-style calc-result">=</button>


<input
  class="calc-text-result" 
  type="text"
  placeholder="Результат" disabled
/>
</div>


`;
  gamesContainer.innerHTML = gameHtml;

  // inputs
  const firstNumber = document.querySelector('.calc-number-1');
  const secondeNumber = document.querySelector('.calc-number-2');
  //   const inputs = document.querySelectorAll('.calc-number');

  // input answer
  const lastNumber = document.querySelector('.calc-text-result');

  // symboles
  const addition = document.querySelector('.addition');
  const multiplication = document.querySelector('.multiplication');
  const substraction = document.querySelector('.substraction');
  const division = document.querySelector('.division');
  const result = document.querySelector('.calc-result');

  // numbers
  let value1 = 0;
  let value2 = 0;

  // symboles
  let symbole = '';

  //=====logic=====

  //inputs
  firstNumber.addEventListener('input', event => {
    value1 = Number(event.target.value);
  });

  secondeNumber.addEventListener('input', event => {
    value2 = Number(event.target.value);
  });

  //symboles
  addition.addEventListener('click', () => {
    symbole = '+';
  });

  multiplication.addEventListener('click', () => {
    symbole = '*';
  });

  substraction.addEventListener('click', () => {
    symbole = '-';
  });

  division.addEventListener('click', () => {
    symbole = '/';
  });

  //symbole =

  result.addEventListener('click', () => {
    switch (symbole) {
      case '+':
        lastNumber.value = value1 + value2;

        break;

      case '*':
        lastNumber.value = value1 * value2;
        break;
      case '-':
        lastNumber.value = value1 - value2;
        break;
      case '/':
        if (value2 === 0) {
          lastNumber.value = 'Ділення на 0 не існує';
        } else {
          lastNumber.value = value1 / value2;
        }

        break;
    }
  });
};
