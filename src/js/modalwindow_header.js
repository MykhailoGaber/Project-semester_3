const nameForm = document.querySelector('#nameForm');
const nameModal = document.querySelector('#nameModal');
const closeNameBtn = document.querySelector('#closeNameBtn');
const nameInput = document.querySelector('#nameInput');
const nameOutput = document.querySelector('#name-output');
const body = document.body;
const savedName = localStorage.getItem('username');

if (savedName) {
  if (nameOutput) nameOutput.textContent = savedName;
  if (nameModal) nameModal.close();
} else if (nameModal) {
  nameModal.close();
  nameModal.showModal();
  body.style.overflow = 'hidden';
}

nameForm.addEventListener('submit', event => {
  event.preventDefault();

  const userName = nameInput.value.trim();
  if (userName) {
    localStorage.setItem('username', userName);
    if (nameOutput) nameOutput.textContent = userName;
  }

  nameModal.close();
  nameForm.reset();
  body.style.overflow = '';
});

closeNameBtn.addEventListener('click', () => {
  nameModal.close();
  body.style.overflow = '';
});

nameModal.addEventListener('click', event => {
  if (event.target === nameModal) {
    nameModal.close();
    body.style.overflow = '';
  }
});
