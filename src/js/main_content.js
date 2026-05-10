import { games } from './data/data_games.js';

const gamesContainer = document.querySelector('[data-games]');

const renderGames = (games, container) => {
  const html = games.reduce((acc, game) => {
    const gameHTML = `
    <section id="game-id_${game.id}" class="section">
      <div class="container">
        <div class="game game-id_${game.id}">
        </div>
      </div>
    </section>`;
    acc.push(gameHTML);
    return acc;
  }, []);

  container.innerHTML = html;

  games.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};

renderGames(games, gamesContainer);
