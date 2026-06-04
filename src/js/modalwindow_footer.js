const form = document.querySelector('.subscribe-form');
const modal = document.querySelector('#subscribeModal');
const closeModal = document.querySelector('#closeBtn');
const body = document.body;

const handleAnimationEnd = event => {
  if (event.animationName === 'smoothOut') {
    modal.close();
    modal.classList.remove('closing');
    body.style.overflow = '';
    modal.removeEventListener('animationend', handleAnimationEnd);
  }
};

const handleClose = () => {
  modal.classList.add('closing');
  modal.addEventListener('animationend', handleAnimationEnd);
};

const handleSubmit = event => {
  event.preventDefault();
  modal.showModal();
  form.reset();
  body.style.overflow = 'hidden';
};

const handleOverlayClick = event => {
  if (event.target === modal) {
    handleClose();
  }
};

form.addEventListener('submit', handleSubmit);
closeModal.addEventListener('click', handleClose);
modal.addEventListener('click', handleOverlayClick);
