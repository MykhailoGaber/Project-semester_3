import { scientistsList } from './data_scientists.js';
import { renderScientists } from './render-scientists.js';

export const initScintistsSorting = () => {
  const gameContainer = document.querySelector('.game-id_11');
  const gameHtml = `
    <h3 class="game__title">Обери вченого/их</h3>
    <section class="scintists">
      <div class="container">
        <div class="scientists__container" data-scintists></div>
      </div>
    </section>
    <div class="scientists-buttons">
      <ul class="scientists-buttons__list">
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="century19">Які вчені народилися в 19 ст.</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="einstein">Знайти рік народження Albert Einshtein</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="sortAlphabet">Відсортувати вчених за алфавітом</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="startWithC">Знайти вчених, прізвища яких починаються на на літеру “С” </button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="sortByAge">Відсортувати вчених за кількістю прожитих років</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="deleteA">Видалити всіх вчених, ім’я яких починається на “А”</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="latestBorn">Знайти вченого, який народився найпізніше</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="longestShortest">Знайти вченого, який прожив найдовше і вченого, 
який прожив найменше</button></li>
        <li class="scientists-buttons__item"><button class="scientists-buttons__button" data-action="sameInitials">Знайти вчених, в яких співпадають перші літери імені і прізвища</button></li>
      </ul>
    </div>
  `;
  gameContainer.innerHTML = gameHtml;

  const scientistsContainer = document.querySelector('.scientists__container');
  renderScientists(scientistsList, scientistsContainer);

  const buttonCentury19 = document.querySelector('[data-action="century19"]');
  const buttonEinstein = document.querySelector('[data-action="einstein"]');
  const buttonSortAlphabet = document.querySelector(
    '[data-action="sortAlphabet"]'
  );
  const buttonStartWithC = document.querySelector('[data-action="startWithC"]');
  const buttonSortByAge = document.querySelector('[data-action="sortByAge"]');
  const buttonDeleteA = document.querySelector('[data-action="deleteA"]');
  const buttonLatestBorn = document.querySelector('[data-action="latestBorn"]');
  const buttonLongestShortest = document.querySelector(
    '[data-action="longestShortest"]'
  );
  const buttonSameInitials = document.querySelector(
    '[data-action="sameInitials"]'
  );

  const sortedScientistsList = [...scientistsList];

  // 1
  buttonCentury19.addEventListener('click', () => {
    const result = sortedScientistsList.filter(
      s => s.born >= 1801 && s.born <= 1900
    );
    renderScientists(result, scientistsContainer);
  });
  // 2
  buttonEinstein.addEventListener('click', () => {
    const result = sortedScientistsList.filter(
      s => s.firstName == 'Albert' && s.lastName == 'Einstein'
    );
    renderScientists(result, scientistsContainer);
  });
  // 3
  buttonSortAlphabet.addEventListener('click', () => {
    const result = sortedScientistsList.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
    renderScientists(result, scientistsContainer);
  });
  // 4
  buttonStartWithC.addEventListener('click', () => {
    const result = sortedScientistsList.filter(s => s.lastName[0] === 'C');
    renderScientists(result, scientistsContainer);
  });

  // 5
  buttonSortByAge.addEventListener('click', () => {
    const result = sortedScientistsList.sort(
      (a, b) => a.dead - a.born - (b.dead - b.born)
    );
    renderScientists(result, scientistsContainer);
  });
  // 6
  buttonDeleteA.addEventListener('click', () => {
    const result = sortedScientistsList.filter(s => s.firstName[0] !== 'A');
    renderScientists(result, scientistsContainer);
  });
  // 7
  buttonLatestBorn.addEventListener('click', () => {
    const sorted = sortedScientistsList.sort((a, b) => b.born - a.born);
    const latest = sorted[0];
    renderScientists([latest], scientistsContainer);
  });
  // 8
  buttonLongestShortest.addEventListener('click', () => {
    const sorted = sortedScientistsList.sort(
      (a, b) => a.dead - a.born - (b.dead - b.born)
    );
    const longestLive = sorted[0];
    const shortestLive = sorted[sorted.length - 1];

    const result = [];
    result.push(shortestLive);
    result.push(longestLive);

    renderScientists(result, scientistsContainer);
  });
  // 9
  buttonSameInitials.addEventListener('click', () => {
    const result = sortedScientistsList.filter(
      s => s.firstName[0] === s.lastName[0]
    );
    renderScientists(result, scientistsContainer);
  });
};
