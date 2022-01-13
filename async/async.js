'use strict';
// promise
function getPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🍕'), 2000);
  });
}
function getHotDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🌭'), 2000);
  });
}

function pickFood() {
  getPizza().then(console.log);
  getHotDog().then(console.log);
}

pickFood();

// async
function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

async function getPizza() {
  await delay(1000);
  return '🍕';
}
async function getHotDog() {
  await delay(3000);
  return '🌭';
}

function pickFood() {
  getPizza().then(console.log);
  getHotDog().then(console.log);
}

function pickAllFood() {
  return Promise.all([getPizza(), getHotDog()]);
}

function pickFirstOneFood() {
  return Promise.race([getPizza(), getHotDog()]);
}

pickAllFood().then((food) => console.log(food.join('+')));
pickFirstOneFood().then((food) => console.log(food));
