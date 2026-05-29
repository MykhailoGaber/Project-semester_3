class GameDino {
  constructor(dino, gameArea) {
    this.dino = dino;
    this.gameArea = gameArea;
    this.gameOver = false;
    this.isJumping = false;

    this.showStartModal();
  }

  init() {
    this.setupControls();
    this.spawnObstacle();
    this.checkCollision();
  }

  setupControls() {
    const onSpace = event => {
      if (event.code !== 'Space') return;
      event.preventDefault();
      if (this.gameOver) {
        this.restartGame();
        return;
      }
      this.jump();
    };

    document.addEventListener('keydown', onSpace);
    this.gameArea.addEventListener('mousedown', () => {
      if (this.gameOver) {
        this.restartGame();
        return;
      }
      this.jump();
    });
  }

  jump() {
    if (this.isJumping || this.gameOver) return;
    this.isJumping = true;
    this.dino.classList.add('jump');

    setTimeout(() => {
      this.isJumping = false;
      this.dino.classList.remove('jump');
    }, 500);
  }

  checkCollision() {
    const gameLoop = () => {
      if (this.gameOver) return;

      const dinoRect = this.dino.getBoundingClientRect();
      const obstacles = Array.from(this.gameArea.querySelectorAll('.cactus'));

      for (const obstacle of obstacles) {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (
          dinoRect.right > obstacleRect.left &&
          dinoRect.left < obstacleRect.right &&
          dinoRect.bottom > obstacleRect.top
        ) {
          this.endGame(obstacle);
          return;
        }
      }

      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
  }

  spawnObstacle() {
    if (this.gameOver) return;

    const obstacle = document.createElement('div');
    obstacle.className = 'cactus';
    obstacle.style.height = this.randomHeight();
    obstacle.style.animationDuration = `${(Math.random() * 1.2 + 3.4).toFixed(2)}s`;
    this.gameArea.appendChild(obstacle);

    obstacle.addEventListener('animationend', () => {
      obstacle.remove();
      if (!this.gameOver) {
        this.spawnObstacle();
      }
    });
  }

  randomHeight() {
    return `${Math.floor(Math.random() * 31) + 30}px`;
  }

  endGame(obstacle) {
    this.gameOver = true;
    obstacle.style.animationPlayState = 'paused';
    this.dino.classList.add('dead');
    this.showGameOverModal();
  }

  showModal(text, buttonText, onClick) {
    const modalHtml = `
      <div class="dino__modal">
        <p class="dino__message">${text}</p>
        <button class="dino__start">${buttonText}</button>
      </div>
    `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);
    this.gameArea
      .querySelector('.dino__start')
      .addEventListener('click', onClick);
  }

  showStartModal() {
    this.showModal('Зіграємо?', 'Почати гру!', () => {
      const modal = this.gameArea.querySelector('.dino__modal');
      if (modal) modal.remove();
      this.init();
    });
  }

  showGameOverModal() {
    this.showModal('Ви програли!', 'Спробувати знову', () =>
      this.restartGame()
    );
  }

  restartGame() {
    const modal = this.gameArea.querySelector('.dino__modal');
    if (modal) modal.remove();
    this.gameArea.querySelectorAll('.cactus').forEach(el => el.remove());
    this.gameOver = false;
    this.dino.classList.remove('dead');
    this.spawnObstacle();
    this.checkCollision();
  }
}

export const gameDinoInit = () => {
  const container = document.querySelector('.dino-game');
  if (!container) return;

  const dino = container.querySelector('.dino');
  const gameArea = container.querySelector('.game__area');
  new GameDino(dino, gameArea);
};
