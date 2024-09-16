// Fill in the blanks to complete the exercises.

const lastName = 'Marcello';
const height = 177;
const isStudent = true;
console.log(lastName, height, isStudent);

let currentCity = 'Rome';
currentCity = 'Bruxelles';
console.log(currentCity);

const calculateArea = (length, width) => length*width;
console.log(calculateArea(2, 2));

const greetUser = () => console.log('hello');;
greetUser();

const car = {
    make: 'ford',
    model: 'year',
    year: 1979
};
console.log(car.make, car.model,car.year);

car.describe = function () {
    console.log(`This car is a ${car.make} ${car.model} ${car.year}.`);
};
car.describe();

const fruits = ['apple', 'melon', 'cherry'];
fruits.push('banana');
console.log(fruits);

// Exercise 8: Array Methods
fruits.forEach((fruit) => fruit);
const upperFruits = fruits.map((fruit) => fruit);
console.log(`i love ${upperFruits}`);

const moreFruits = ['peaches', 'orange', 'watermelon'];
console.log(moreFruits);

const sumNumbers = (...args) => args.reduce((sum, num) => sum+num, 0);
console.log(sumNumbers(1, 2, 3, 4, 5));

const { make, model } = car;
console.log(make, model);

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

setTimeout(() => {
    console.log('hello');
}, 1000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
