function sayHello(name) {
    console.log('Hello ' + name);
    }
    sayHello('Kai');

// Variables

var name = 'Kai';
console.log(name);

//decalaration
//assignment

var age = 24;
console.log(age);

let city = "Sydney";
console.log(city);

const country = "Australia";
//country = "USA"; // This will cause an error because you cannot reassign a constant variable
console.log(country);

//Variable are case sensitive

let firstName = "Kai";
let FirstName = "John";
console.log(firstName);
console.log(FirstName);

let count = 1;
function increment() {
    count = count + 1;
    let flag = true;
    if (flag) {
        count = count + 1;
        let flag = false;
        console.log('Inside if block: ' + count);
        console.log('Inside if block: ' + flag);
    }

    console.log('Inside function: ' + count);
    console.log('Inside function: ' + flag);

}

increment();
console.log(count);


//

let isMarried = false;
console.log(typeof isMarried);

let hasEmployer = null;
let salary = undefined;
salary = 50000;
let bossSalary = 50000000n;
let greeting = "Hello, mate";
let symbol = Symbol('1234567890');

// Obj

let person = {
    name: 'Kai',
    age: 24,
    city: 'Sydney',     
};

let numbers = [1, 2, 3, 4, 5];
let sets = new Set([1, 2, 3, 4, 5]);

let map = new Map();
map.set('name', 'Kai');
map.set('age', 24);
map.set('city', 'Sydney');

// conversion of data types
let num = 42;
let number = '10';
let sum = num + Number(number);
console.log(sum);
let str = String(num);
console.log(str);

