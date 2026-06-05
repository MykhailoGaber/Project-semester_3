import { games } from './data_games';
import { renderGames } from '../main_content';
const buttonNumerical = document.querySelector('[data-filter="numerical"]');
const buttonGame = document.querySelector('[data-filter="game"]');
const buttonAcquaintance = document.querySelector(
  '[data-filter="acquaintance"]'
);

const gamesContainer = document.querySelector('[data-games]');

buttonNumerical.addEventListener('click', () => {
  const gameNumerical = games.filter(game => game.category === 'numerical');
  renderGames(gameNumerical, gamesContainer);
});

buttonGame.addEventListener('click', () => {
  const gameGame = games.filter(game => game.category === 'game');
  renderGames(gameGame, gamesContainer);
});

buttonAcquaintance.addEventListener('click', () => {
  const gameAcquaintance = games.filter(
    game => game.category === 'acquaintance'
  );
  renderGames(gameAcquaintance, gamesContainer);
});
