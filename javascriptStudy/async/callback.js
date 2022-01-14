'use strict';

// javaScript is synchronous.
// hoisting, var, function 가장위로
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// callback Hell!!
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'sunup' && password === '1234') ||
        (id === 'coder' && password === '1234')
      ) {
        onSuccess(id);
      } else {
        onError(new Error(`not found ${id}`));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'sunup') {
        onSuccess({ name: 'sunup', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) =>
        alert(
          `hello ${userWithRole.name}, you have access ${userWithRole.role}`
        ),
      (error) => console.log(error.message)
    );
  },
  (error) => console.log(error.message)
);
