class BombGame {
  constructor(gameArea) {
    this.gameArea = document.querySelector(gameArea);
    this.score = 0;
    this.timeLeft = 45;
    this.gameOver = false;

    this.gameTimer = null;
    this.spawnTimer = null;

    this.gameModalStart();
  }
  init() {
    this.score = 0;
    this.timeLeft = 45;
    this.gameOver = false;

    this.renderHUD();

    this.gameTimer = setInterval(this.tick(), 1000);
  }

  renderHUD() {
    const hudHTML = `<div class="bomb-game__hud">
        <div class="bomb-hud__item">Час: <span class="bomb-hud__time">${this.timeLeft}</span>с</div>
        <div class="bomb-hud__item">Бали: <span class="bomb-hud__score">${this.score}</span></div>
      </div>`;

    this.gameArea.innerHTML = hudHTML;
  }

  tick() {
    if (this.gameOver) {
      return;
    }
    this.timeLeft--;
  }

  endGame() {}

  createModal(message, buttonText, buttonCallback) {
    const modalHtml = `
      <div class="bonus-game__modal">
        <p class="bonus-game__message">${message}</p>
        <button class="bonus-game__start button">${buttonText}</button>
      </div>
    `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

    const modal = this.gameArea.querySelector('.bonus-game__modal');
    modal.classList.add('show');

    const retryButton = this.gameArea.querySelector('.bonus-game__start');
    retryButton.addEventListener('click', buttonCallback);
  }

  gameModalStart() {
    this.createModal('Зіграємо?', 'Почати гру!', () => {
      const modal = this.gameArea.querySelector('.bonus-game__modal');
      modal.classList.remove('show');
      this.init();
    });
  }
  gameOverModal() {
    this.createModal('Ви програли!', 'Спробувати знову', () =>
      this.restartGame()
    );
  }
  restartGame() {
    this.gameArea.querySelector('.bonus-game__modal').remove();
    this.gameOver = false;
  }
}

export const initBonusGame = () => {
  const gameContainer = document.querySelector('.game-id_11');

  const gameHtml = `<div class="game__container">
        <h2 class="game__title">Bonus Game</h2>
        <div class="bomb-game__area"></div>
    </div>`;

  gameContainer.innerHTML = gameHtml;
};

new BombGame('.bomb-game__area');
