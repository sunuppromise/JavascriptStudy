'use strict'

function calculate(command, a, b){

    let result;
    switch (command) {
        case add:
            result = add(a, b);
            break;
        case substract:
            result = substract(a, b);
            break;
        case divide:
            result = divide(a, b);
            break;
        case multiply:
            result = multiply(a, b);
            break;
        case remainder:
            result = remainder(a, b);
            break;
        default:
            console.log('command is not find');
            break;
    }
    
    return console.log(`result : ${result}`);
}

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function remainder(a, b){
    return a % b;
}