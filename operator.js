// string concatenation
{
    console.log('my' + 'dog');
    console.log('1' + 2);
    console.log(`string literats: 1+ 2 = ${1+2}`);
}

// numeric operators
{
    console.log(1+1);
    console.log(1-1);
    console.log(1/1);
    console.log(1*1);
    console.log(1%1);
    console.log(1**1);
}

// Increment and decrement operators
{
    let counter = 2;
    const preIncrement = ++counter;
    console.log(`const preIncrement = ++counter ${preIncrement}`);
    let postIncrement = counter++;
    console.log(`const preIncrement = ++counter ${postIncrement++}`);
    console.log(`const preIncrement = ++counter ${postIncrement}`);
}

// Assignment operators
{
    let x = 3;
    let y = 6;
    x += y;
    x -= y;
    x *= y;
    x /= y;
}

// Comparison operator
{
    console.log(10 < 6);
    console.log(10 <= 6);
    console.log(10 > 6);
    console.log(10 >= 6);
}

// Logical operator
{
    const value1 = true;
    const value2 = 4 < 2;
    
    // for, finds the first truthy value
    // 함수를 제일 뒤로
    console.log(value1 || value2 || check());
    console.log(value1 && value2 && check());

    let nullitem = null

    if (nullitem == null){
        console.log(`nullItem is ${nullitem}`);
    }
    
    function check(){
        for (let i = 0; i < 10; i++){
    
        }
        return true;
    }
}

// == loose equality
{
    const stringfive = '5';
    const numberfive = 5;
    console.log(stringfive == numberfive);
    console.log(stringfive != numberfive);
}
// === strict equality
{
    const stringfive = '5';
    const numberfive = 5;
    console.log(stringfive === numberfive);
    console.log(stringfive !== numberfive);
}
// object equality
{
    const sunup1 = {name: 'promise'};
    const sunup2 = {name: 'promise'};
    const sunup3 = sunup1;

    console.log(sunup1 == sunup2);
    console.log(sunup1 === sunup2);
    console.log(sunup1 == sunup3);
    console.log(sunup1 === sunup3);
}

// Conditional operator if
{
    const name = 'df';
    if (name === 'sunup')
    {
        console.log('welcome sunup');
    }
    else if( name === 'bob')
    {
        console.log('welcome bob');
    }
    else
    {
        console.log('bye bye');
    }
}

// ternary operator: ?
{
    const name = 'df';
    console.log(name === 'sunup' ? 'yes' : 'no');
}

// switch
{
    const browser = 'IE';
    switch (browser) {
        case 'IE':
            console.log('No!!!');
            break;
        case 'Chrome':
            console.log('No!!!');
            break;
        case 'FireFox':
            console.log('No!!!');
            break;
        default:
            console.log('How are you?');
            break;
    }
}

// loop while, do while, for
{
    let i = 3;
    while(i > 0)
    {
        console.log(i--);
    }

    do {
        console.log(i);
    } while (i > 0);

    let k = 0;

    for (let index = 0; index < 3; index++) 
    {
        for (let j = 0; j < 3; j++) 
        {
            console.log(++k);
        }
    }

    for (let i = 0; i < 10; i++){
        
        if (i % 2 !== 0) {
            continue;
        }

        console.log(`even ${i}`);
    }

    for (let i = 0; i < 10; i++){
        
        if (i === 8) {
            console.log('bye bye');
            break;
        }

        console.log(i);
    }
}