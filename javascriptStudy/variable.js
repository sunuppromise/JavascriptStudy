'use strict'

// Variable
// let es6 mutable 
// var hoisting:선언 위치와 상관없이 가장위에 선언된다 가정
// 유연성이 높지만 오류발생 위험이 높음
// 블록 처리하더라도 밖에서 사용가능
// 만약 익스플로어로 개발해야한다면 BABLE 사용
{
    let name = 'sunuppromsie'
    console.log(name);
    name = 'robot';
    console.log(name);
}

// const Immutable
// security
// thread safe
{
    const maxnumber = 1;
    console.log(maxnumber);
}

// Variable types;
// primitive, single item: number(short, int, long, float, double 알아서 입력됨), string, boolean, null, undefiedn, symbol etc..
// object
// function first-class function(함수에 함수를 변수로 사용가능, 함수리턴도 가능)
{
    const infinity = 1 / 0
    const negativeInfinity = -1 / 0;
    const nAn = 'asd asdfa asdf' / 2;
    console.log(infinity)
    console.log(negativeInfinity)
    console.log(nAn)
}

// bigInt
{
    const bigInt = 123123123123123123123123123123123123123123123123n;
    console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
}

//string
{
    const char = 'a';
    const test = 'test';
    console.log(`char ${char}, test ${test}`);
}

//boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
{
    const test = 1 > 3 ;
    const isRead = true;
    console.log(`value: ${test}, type: ${typeof test}`);
    console.log(`${test},     ${isRead}`)
}

// null
{
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);
}

// undefined
{
    let x;
    console.log(`value: ${x}, type: ${typeof x}`);
}

// symbol, create unique identifiers for objects
{
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2);
    const gsymbol1 = Symbol.for('id');
    const gsymbol2 = Symbol.for('id');
    console.log(gsymbol1 === gsymbol2);
}

// object
{
    const sunup = {name: 'sunuppromise', age: 30};
    console.log(sunup.age, sunup.name);
    sunup.age = 20;
    console.log(sunup.age);
}
// dynamic typing
{
    let text = 'hello';
    console.log(text.charAt(0));
    console.log(`value: ${text}, type: ${typeof text}`);
    text = 1;
    console.log(`value: ${text}, type: ${typeof text}`);
    text = '7' + 5;
    console.log(`value: ${text}, type: ${typeof text}`);
    text = '8' / '2';
    console.log(`value: ${text}, type: ${typeof text}`);
    // console.log(text.charAt(0)); // runtime error => type script를 사용하는 이유
}