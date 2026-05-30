const form = document.querySelector('.subscribe-form');
const modal = document.querySelector('#subscribeModal');
const closeModal = document.querySelector('#closeBtn');
const body = document.body;
form.addEventListener('submit', event => {
  event.preventDefault();
  modal.showModal();
  form.reset();
  body.style.overflow = 'hidden';
});
closeModal.addEventListener('click', () => {
  modal.close();
  body.style.overflow = '';
});
modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.close();
    body.style.overflow = '';
  }
});
