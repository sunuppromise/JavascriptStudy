'use strict'

// JSON
// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    },
}

console.clear();
json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'sunup' : value;
});
console.log(json);

// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

const obj2 = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());

