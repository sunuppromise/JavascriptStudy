'use strict'
// 자료구조
// 검색, 삽입, 삭제, 정렬 등을 알고리즘을 통해 처리

// Array
// Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index Prosition
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(`${fruits[0]}, ${fruits[1]}`);
console.log(fruits[fruits.length -1]);

for (const fruit of fruits) {
    console.log(fruit);
}

//foreach
fruits.forEach(function (fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

// Addtion, deletion, copy
// push
fruits.push('🍋', '🍍');

console.log(fruits);

// pop
fruits.pop();
fruits.pop();

console.log(fruits);

// unshift // very slow 배열을 하나씩 밀고 새로운 item 추가
fruits.unshift('🍋', '🍍');
console.log(fruits);

//shift // very slow 배열을 하나씩 당겨온 후 새로운 item 추가
fruits.shift();
console.log(fruits);

// remove
fruits.push('🍈', '🥭', '🍏', '🍑', '🍒', '🍅')
console.log(fruits);
// delete count 입력을 안할 시 해당 위치부터 다 지움
// 지우고 새로운 데이터도 추가 가능
fruits.splice(1, 3, '🍒', '🍒');
console.log(fruits);

//combine two array
const fruits2 = ['🍒', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍍'));
console.log(fruits.indexOf('🌶'));
// inclues
console.log(fruits.includes('🍍'));
console.log(fruits.includes('🌶'));

// last indexof
console.clear();
console.log(fruits);
console.log(fruits.lastIndexOf('🍒'));

// Array class
console.clear();
const temp = [1,2,3,4,5];
console.log(temp);
console.log(temp.length);
console.log(temp.toString());
console.log(temp.toLocaleString());
console.log(temp.pop());
console.log(temp.push(6));
console.log(temp);

const tempA = ['a', 'b', 'c'];

console.log(temp.concat(tempA));
console.log(temp.join('::'));
console.log(temp.reverse());
console.log(temp.shift());
temp.push(7,8,9,1,2,3);
console.log(temp);
console.log(temp.slice());
console.log(temp.slice(0, temp.length));
console.log(temp.sort(function(a, b){
    return a - b;
}));
console.log(temp.sort((a, b) => b - a));

console.clear();

console.log(temp);
console.log(temp.splice(3, 7, 6, 5, 4, 3, 2, 1));
console.log(temp);

console.log(temp.sort((a, b) => a - b));

console.log(temp.unshift(-1, 0));
console.log(temp);

console.log(temp.indexOf(4, 3))
temp.unshift(1,1,1);
console.log(temp);
console.log(temp.lastIndexOf(1));


console.clear();
const isBelowThreshold = (currentValue) => currentValue < 0;
const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1);
console.log(array1.every(isBelowThreshold));
array1.every((test, index, array1) =>{
    console.log(`[${array1}], ${index} -> ${test}`);
    return test < 50;
});

const arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

console.log(array1.some(isBelowThreshold));


console.clear();
array1.forEach(element => console.log(element));
console.log(array1.forEach(element => console.log(element)));

console.log(array1.map(element => element * 2));

console.log(array1.filter(element => element > 13));

const arr3 = [1, 2, 3, 4, 5, 6];

const reducer = (previousValue, currentValue) => previousValue - currentValue

console.log(array1);
console.log(array1.reduce(reducer));
console.log(array1.reduceRight(reducer));