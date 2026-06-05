class BombGame {
  constructor(gameArea) {
    this.gameArea = document.querySelector(gameArea);
    this.score = 0;
    this.timeLeft = 45;
    this.gameOver = false;

    this.hudContainer = null;
    this.bombsContainer = null;

    this.gameTimer = null;
    this.spawnTimerB = null;
    this.spawnTimerG = null;
    this.spawnTimerP = null;

    this.gameModalStart();
  }
  init() {
    clearInterval(this.gameTimer);
    clearInterval(this.spawnTimerB);
    clearInterval(this.spawnTimerG);
    clearInterval(this.spawnTimerP);

    this.score = 0;
    this.timeLeft = 45;
    this.gameOver = false;

    this.hudContainer = document.querySelector('.bomb-game__hud');
    this.bombsContainer = document.querySelector('.bomb-game__field');

    this.renderHUD();

    this.gameTimer = setInterval(() => this.tick(), 1000);
    this.spawnTimerB = setInterval(() => this.spawnBomb(), 450);
    this.spawnTimerG = setInterval(() => this.spawnGreenCristal(), 1000);
    this.spawnTimerP = setInterval(() => this.spawnPurpleCristal(), 5000);
  }

  renderHUD() {
    const timeStyle =
      this.timeLeft <= 15
        ? 'style="color: var(--color-text-fail);"'
        : 'style="color: var(--color-text-success);"';

    const hudHTML = `
        <div class="bomb-hud__item">Час: <span class="bomb-hud__time" ${timeStyle}>${this.timeLeft}</span> с</div>
        <div class="bomb-hud__item">Бали: <span class="bomb-hud__score">${this.score}</span></div>`;

    this.hudContainer.innerHTML = hudHTML;
  }

  tick() {
    if (this.gameOver) {
      return;
    }
    this.timeLeft--;
    this.renderHUD();
    this.endGame();
  }

  spawnBomb() {
    if (this.gameOver) {
      return;
    }

    const bomb = document.createElement('div');
    bomb.classList.add('bomb');
    this.bombsContainer.append(bomb);

    const randomX = Math.floor(Math.random() * this.gameArea.offsetWidth - 40);
    const randomY = Math.floor(Math.random() * this.gameArea.offsetHeight - 40);

    bomb.style.top = `${randomY}px`;
    bomb.style.left = `${randomX}px`;

    const autoRemoveTimer = setInterval(() => bomb.remove(), 2000);

    bomb.addEventListener('mousedown', () => {
      if (this.gameOver) {
        return;
      }
      this.score -= 1;
      this.renderHUD();
      clearInterval(autoRemoveTimer);
      bomb.classList.add('explosion');

      setInterval(() => {
        bomb.remove();
      }, 300);
    });
  }
  spawnGreenCristal() {
    if (this.gameOver) {
      return;
    }

    const cristal = document.createElement('div');
    cristal.classList.add('green-cristal');
    this.bombsContainer.append(cristal);

    const randomX = Math.floor(Math.random() * this.gameArea.offsetWidth - 40);
    const randomY = Math.floor(Math.random() * this.gameArea.offsetHeight - 40);

    cristal.style.top = `${randomY}px`;
    cristal.style.left = `${randomX}px`;

    const autoRemoveTimer = setInterval(() => cristal.remove(), 2000);

    cristal.addEventListener('mousedown', () => {
      if (this.gameOver) {
        return;
      }
      this.score += 1;
      this.renderHUD();
      clearInterval(autoRemoveTimer);
      cristal.remove();
    });
  }
  spawnPurpleCristal() {
    if (this.gameOver) {
      return;
    }

    const cristal = document.createElement('div');
    cristal.classList.add('purple-cristal');
    this.bombsContainer.append(cristal);

    const randomX = Math.floor(Math.random() * this.gameArea.offsetWidth - 40);
    const randomY = Math.floor(Math.random() * this.gameArea.offsetHeight - 40);

    cristal.style.top = `${randomY}px`;
    cristal.style.left = `${randomX}px`;

    const autoRemoveTimer = setInterval(() => cristal.remove(), 2000);

    cristal.addEventListener('mousedown', () => {
      if (this.gameOver) {
        return;
      }
      this.score += 5;
      this.renderHUD();
      clearInterval(autoRemoveTimer);
      cristal.remove();
    });
  }
  endGame() {
    if (this.timeLeft <= 0) {
      this.gameOver = true;

      clearInterval(this.gameTimer);
      clearInterval(this.spawnTimerB);
      clearInterval(this.spawnTimerG);
      clearInterval(this.spawnTimerP);

      this.bombsContainer.innerHTML = '';
      this.gameOverModal();
    }
  }

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
      modal.remove();
      this.init();
    });
  }

  gameOverModal() {
    this.createModal(`Ваші бали: ${this.score}`, 'Спробувати знову', () =>
      this.restartGame()
    );
  }

  restartGame() {
    this.gameArea.querySelector('.bonus-game__modal').remove();
    this.init();
  }
}

export const initBonusGame = () => {
  const gameContainer = document.querySelector('.game-id_8');

  const gameHtml = `<div class="game__container">
        <h2 class="game__title">Bonus Game</h2>
        <div class="bomb-game__area">
        <div class="bomb-game__hud"></div>
            <div class="bomb-game__field"></div></div>
    </div>
    <div class="random_number__line"></div>`;

  gameContainer.innerHTML = gameHtml;

  new BombGame('.bomb-game__area');
};
