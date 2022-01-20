'use strict';

function openModal() {
  const loginModal = document.getElementsByClassName('Loginmodal')[0];
  console.log(loginModal.style.display);
  loginModal.style.display = 'flex';
}

function closeModal() {
  const loginModal = document.getElementsByClassName('Loginmodal')[0];
  console.log(loginModal.style.display);
  loginModal.style.display = 'none';
}

{
  const modal = document.getElementsByClassName('Loginmodal')[0];
  modal.addEventListener('click', (e) => {
    const evTarget = e.target;
    if (evTarget.classList.contains('Loginmodal')) {
      modal.style.display = 'none';
    }
  });
}
