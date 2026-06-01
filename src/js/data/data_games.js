// import { initTestGame } from './games/test_game.js';
import { soccerGame } from './games/soccer_game.js';
import { randomGame } from './games/random_number_game.js';
import { maxNumberGame } from './games/max_number.js';
// import { initTestGame } from './games/test_game.js';
import { initSspGame } from './games/ssp_game.js';
import { gameDinoInit } from './games/dinogame.js';
import { calculatorGame } from './games/calculator_game.js';
import { ourTeam } from './games/students/students-section.js';
import { initScintistsSorting } from './games/scientists/scientists-sorting.js';
import { initBonusGame } from './games/bomb-game.js';
import { initLeapYear } from './games/leap-year.js';
export const games = [
  {
    init: initLeapYear,
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    init: randomGame,
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    init: initSspGame,
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    init: calculatorGame,
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    init: gameDinoInit,
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    init: soccerGame,
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    init: initBonusGame,
    id: 8,
    name: 'Додаткова гра',
    category: 'game',
  },
  {
    // init: maxNumberGame,
    id: 9,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    init: ourTeam,
    id: 10,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    init: initScintistsSorting,
    id: 11,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
