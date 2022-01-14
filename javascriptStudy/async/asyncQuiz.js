'use strict';

//Quiz
class UserStorage {
  async loginUser(id, password) {
    if (
      (id === 'sunup' && password === '1234') ||
      (id === 'coder' && password === '1234')
    ) {
      return id;
    } else {
      throw `not found ${id}`;
    }
  }

  async getRoles(user) {
    if (user === 'sunup') {
      return { name: 'sunup', role: 'admin' };
    } else {
      throw 'no access';
    }
  }
}

async function login(userId, password) {
  try {
    const id = await new UserStorage().loginUser(userId, password);
    const message = await new UserStorage().getRoles(id);
    return message;
  } catch (ex) {
    throw ex;
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

login(id, password)
  .then((userWithRole) =>
    alert(`hello ${userWithRole.name}, you have access ${userWithRole.role}`)
  )
  .catch((error) => alert(error));
