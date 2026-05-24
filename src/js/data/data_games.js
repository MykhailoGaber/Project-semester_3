import { randomGame } from './games/random_number_game.js';
// import { soccerGame } from './games/soccer_game.js';
// import { initTestGame } from './games/test_game.js';
import { initSspGame } from './games/ssp_game.js';
import { initScintistsSorting } from './games/scientists/scientists-sorting.js';

export const games = [
  {
    // init: initTestGame,
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
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    // init: soccerGame,
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    init: initScintistsSorting,
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
