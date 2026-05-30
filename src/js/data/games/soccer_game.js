import ball from '../../../images/ball.png';
export const soccerGame = () => {
  const gamesContainer = document.querySelector('.game-id_7');
  const gameHtml = `
      <h3 class="soccer__title">Футбол</h3>
      <div class="soccer__field">
        <div class="soccer__ball">
        <img src="${ball}" class="soccer__img" alt="button" />
        </div>
      </div>
      <div class="soccer__line"></div>
    `;

  gamesContainer.innerHTML = gameHtml;
  const divBall = document.querySelector('.soccer__ball');
  const field = document.querySelector('.soccer__field');
  divBall.style.top = `80px`;
  divBall.style.left = `330px`;
  let ballRotate = 0;
  divBall.style.transform = `rotate(${ballRotate}deg)`;
  const handleBallAround = event => {
    if (event.button === 0) {
      event.preventDefault();
      const posX = event.offsetX;
      const posY = event.offsetY;
      console.log(posX, posY);
      divBall.style.display = 'flex';
      divBall.style.top = `${posY}px`;
      divBall.style.left = `${posX}px`;
      ballRotate += 400;
      divBall.style.transform = `rotate(${ballRotate}deg)`;
    }
  };
  field.addEventListener('mousedown', handleBallAround);
  const handleContextMenu = event => {
    if (event.button === 2) {
      event.preventDefault();
    }
  };
  field.addEventListener('contextmenu', handleContextMenu);
};
