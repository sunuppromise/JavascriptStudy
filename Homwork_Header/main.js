'use strict';

const toggleBtn = document.querySelector('.hambuger');
const menu = document.querySelector('.navi');
const icons = document.querySelector('.etcIcons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
