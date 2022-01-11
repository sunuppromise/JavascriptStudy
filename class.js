'use strict'
//class in ES6
// syntactical sugar
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        speak(word) {
            console.log(word);

        }
    }

    const sunup = new Person('sunup', 30);
    console.log(sunup.name);
    console.log(sunup.age);

    sunup.speak('hello')
}

// get, set
{
    class User {
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get age(){
            return this._age;
        }
        set age(value){
            this._age = value < 0 ? 0 : value;
        }
    }

    const user1 = new User('sunup', 'promise', -1)
}

// public, private 너무 최근에 추가됨
{
    class NoteBook {
        publicField = 2;
        #privateField = 0;
    }
    const noteBook = new NoteBook();
    console.log(noteBook.publicField);
    console.log(noteBook.privateField);
}

// static 너무 최근에 추가됨
{
    class NoteBook {
        static publicField = 2;
        #privateField = 0;

        constructor(cpu, ram){
            this.cpu = cpu;
            this.ram = ram;
        }

        static printMessage(){
            console.log('hello noteBook')
        }
    }
    
    NoteBook.printMessage();
}

// 상속
{
    class Shapes{
        constructor(width, height, color = 'red'){
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw(){
            console.log(`drawing ${this.color} color of`);
        }
        getArea(){
            return this.width * this.height;
        }
    }

    class Rectangle extends Shapes{

    }
    class Triangle extends Shapes{
        draw(){
            super.draw(); //상속받은 부모 draw 호출
            console.log('🔺');
        }
        getArea(){
            return this.width * this.height / 2;
        }
    }

    const rectangle = new Rectangle(20, 20, 'red');
    rectangle.draw();

    const triangle = new Triangle(20, 20, 'red');
    triangle.draw();
    console.log(triangle.getArea());

// class checking instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shapes);
console.log(rectangle instanceof Object);
}