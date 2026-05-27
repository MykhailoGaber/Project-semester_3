class BombGame {
  constructor(gameArea) {
    this.container = document.querySelector(gameArea);
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
    this.gameTimer = setInterval(() => this.tick(), 1000);
  }
  renderHUD() {
    const hudHTML = `<div class="bomb-game__hud">
        <div class="bomb-hud__item">Час: <span class="bomb-hud__time">${this.timeLeft}</span>с</div>
        <div class="bomb-hud__item">Бали: <span class="bomb-hud__score">${this.score}</span></div>
      </div>`;
  }
  tick() {
    this.timeLeft--;
    document.querySelector('.bomb-hud__time').childNodes[0].nodeValue =
      this.timeLeft;
  }
}

export const initBonusGame = () => {
  const gameContainer = document.querySelector('.game-id_11');

  const gameHtml = `<div class="game__container"
                        <h2 class="game__title">Bonus game</h2>
                        <div class="bomb-game__area">
                        </div>
                    </div>`;

  gameContainer.innerHTML = gameHtml;
};
