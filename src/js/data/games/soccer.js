import ball from '../../../images/ball.png';
export const soccerGame = () => {
  const gamesContainer = document.querySelector('.game-id_2');
  const gameHtml = `
      <h3 class="soccer__title">Футбол</h3>
      <div class="soccer__field">
        <div class="soccer__ball">
        <img src="${ball}" class="soccer__img" alt="button" />
        </div>
      </div>
    `;

  gamesContainer.innerHTML = gameHtml;
  const divBall = document.querySelector('.soccer__ball');
  const field = document.querySelector('.soccer__field');
  const handleBallAround = event => {
    const posX = event.clientX;
    const posY = event.clientY;
    console.log(posX, posY);
    divBall.style.display = 'flex';
    divBall.style.top = `${posY}px`;
    divBall.style.left = `${posX}px`;
  };
  field.addEventListener('mousdown', handleBallAround);
};
