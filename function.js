'use strict'

// function
// one function === one thing
// 인자에 문제가 생긴다면 TypeScript를 권장

function printMessage(message){
    console.log(message);
}

printMessage('hi');

function changeName(obj){
    obj.name = 'sunup'
}

const sunup = {name: '12345'};
changeName(sunup);

printMessage(sunup.name);

//default parameters es6 add
function showMessage(message){
    if (message === undefined) {
        message = 'Hi';
    }
    console.log(message);
}
function showMessage1(message = 'Hi'){
    console.log(message);
}

showMessage1();

// Rest parameters 
function showArray(...args){
    for (let index = 0; index < args.length; index++) {
        console.log(args[index]);
    }

    for (const arg of args) {
        console.log(arg);   
    }

    args.forEach((arg) => {
        console.log(arg);
    });
}
showArray('A', 'B', 'C');

// return // default return undefined
function sum(a, b){
    return a + b;
}

let result = sum(1, 2);
console.log (result);

// early return
function checkOver10agePrint(age){
    if (age < 10) {
        return;
    }

    console.log(age);
}

checkOver10agePrint(1);

// function extantion
{
    const copySum = sum;
    result = copySum(1,9);
    printMessage(result);
}

// callback function
function randomQuize(answer, printYes, printNo){

    if (answer === 100) {
        printYes();
    }
    else{
        printNo();
    }
}

const printYes = function (){
    console.log('YES');
}

function printNo(){
    console.log('No');
}

randomQuize(100, printYes, printNo);

//arrow function
const add12 = (a, b) => a + b;
const add23 = (a, b) => {
    return a + b;
};
console.log(add12(1, 2));

// IIFE
(function print123(a = 11, b = 13){
    console.log(a + b);
})();