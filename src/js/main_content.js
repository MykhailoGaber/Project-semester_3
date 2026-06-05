import { games } from './data/data_games.js';
// import { soccerGame } from './data/games/soccer_game.js';

// import { randomGame } from './data/games/random_number_game.js';

const gamesContainer = document.querySelector('[data-games]');
export const renderGames = (games, container) => {
  const title = `
    <section class="games-title-section">
      <div class="container">
        <h2 class="games-title">Популярні інетрактивні ігри</h2>
      </div>
    </section>
  `;

  const html = games.reduce((acc, game) => {
    const gameHTML = `
    <section id="game-id_${game.id}" class="section">
      <div class="container">
        <div class="game game-id_${game.id}">
        
        </div>
      </div>
    </section>`;
    acc += gameHTML;
    return acc;
  }, '');

  container.innerHTML = title + html;
  games.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};

renderGames(games, gamesContainer);
