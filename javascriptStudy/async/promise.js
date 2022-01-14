'use strict';

// callback 함수 대신 사용하기 용이
// state : pending -> fulfilled or rejected
// producer vs consumer

// 1. Producer
// when new Promsie is create, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work network, read files
  console.log('doing something...');
  setTimeout(() => {
    resolve('sunup');
    reject(new Error('not found user'));
  }, 2000);
});

// Consumers: then, catch, finally
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// promise chain
const num = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

num
  .then((number) => number * 2)
  .then((number) => number * 3)
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number + 2);
      }, 1000);
    });
  })
  .then((number) => console.log(number));

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('is not found Egg')));
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🧈`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return error + '🥖';
  })
  .then((egg) => cook(egg))
  .then((cook) => console.log(cook));

// callback Hell!! fix Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'sunup' && password === '1234') ||
          (id === 'coder' && password === '1234')
        ) {
          resolve(id);
        } else {
          reject(new Error(`not found ${id}`));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'sunup') {
          resolve({ name: 'sunup', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((userWithRole) => {
    alert(`hello ${userWithRole.name}, you have access ${userWithRole.role}`);
  })
  .catch((error) => console.log(error.message));
