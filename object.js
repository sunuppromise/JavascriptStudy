'use strict'
// object = {key : value}; 에 배열이다. 단 key는 string Type

// 1. Literals and properties
//not use object
const name = 'sunup';
const age = 30;
print (name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

//use object
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const obj1 = {} //'object literal' syntax
const obj2 = new Object(); // object constructor' syntax

const sunup = {name : 'sunup', age : 30}
print (sunup);

//Javascript는 runtime 다이나믹 언어 이기때문에 중간에 추가 가능
sunup.hasJob = true; 
console.log(sunup.hasJob);
delete sunup.hasJob;
console.log(sunup.hasJob);

// Computed properties
console.log(sunup.name);
console.log(sunup['name']);

function printValue(obj, key){
    console.log(obj.key);
    console.log(obj[key]);
}

printValue(sunup, 'name');

// Property Value shorthand
const person1 = { name: 'bob', age : 20};
const person2 = { name: 'dod', age : 20};
const person3 = { name: 'qoq', age : 20};

function makePerson(name, age){
    return {
        name,
        age,
    };
}

// constructor function
function Person(name, age){
    // this = {}
    this.name = name;
    this.age = age;
    // return this
}

const person4 = new Person('AOA', 21);

console.log(`${person4.name}`);

// In operator : property existence check
console.log('name' in sunup);
console.log('age' in sunup);

// for in, for of
console.clear;
for (const key in sunup){
    console.log(key);
}

// for of
const array = [1,2,3,4,5];
for (const iterator of array) {
    console.log(iterator); 
}

// foreach
array.forEach(element => {
    console.log(element); 
});

// cloning
const sunup2 = sunup;
sunup2.name = 'sunup2'
console.log(sunup2.name);

// old way
const sunup3 = {};
for (const key in sunup) {
    sunup3[key] = sunup[key];
}
console.log(sunup3);

// Object.assign
const sunup4 = {};
Object.assign(sunup4, sunup);
console.log(sunup3);

// Object.assign source multi
const fruit = {};
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 50};

Object.assign(fruit, fruit1, fruit2);

console.log(fruit);
