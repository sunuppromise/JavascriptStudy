'use strict';

// html 변수 지정
const contanier = document.getElementsByClassName('container');
const sliderList = document.getElementById('sliderList');
const sliderItems = document.getElementsByClassName('item');
const beforButton = document.getElementById('bef');
const afterButton = document.getElementById('aft');
let currentIndex = 0;

// 부모 박스 자식 최대 크기에 맞춰 높이 지정
function FixMaximumHeight() {
  let maxHeight = 0;

  for (let i = 0; i < sliderItems.length; i++) {
    if (maxHeight < sliderItems[i].scrollHeight) {
      maxHeight = sliderItems[i].scrollHeight;
    }
  }
  console.log(maxHeight);

  contanier[0].style.height = maxHeight + 'px';
  sliderList.style.height = maxHeight + 'px';
}

FixMaximumHeight();

// 슬라이드 가로 배치

function sliderItemPosition() {
  for (let i = 0; i < sliderItems.length; i++) {
    const item = sliderItems[i];
    item.style.left = i * 100 + '%';
  }
}

sliderItemPosition();

// 슬라이드 이동기능 구현
function goToSilde(idx) {
  sliderList.style.left = idx * -100 + '%';
  sliderList.classList.add('animated');
  currentIndex = idx;
}

// 버튼 기능 구현하기
beforButton.addEventListener('click', function (event) {
  event.preventDefault();
  let index = ++currentIndex;
  if (index >= sliderItems.length) {
    index = 0;
  }
  goToSilde(index);
  console.log(index);
});

afterButton.addEventListener('click', function (event) {
  event.preventDefault();
  let index = --currentIndex;
  if (index < 0) {
    index = sliderItems.length - 1;
  }
  goToSilde(index);
  console.log(index);
});
