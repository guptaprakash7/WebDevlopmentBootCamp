
// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!");
//     }
//     else {
//         console.log("Not Snake Eyes!");

//     }
// }
// isSnakeEyes(1, 1);
// isSnakeEyes(1, 5);
// isSnakeEyes();

// function printName(firstName, lastName) {
//     console.log(`${firstName[5]} ${lastName}`);
// }


// printName();

// DEFINE YOUR FUNCTION BELOW:

// function returnDay(num1) {
//     debugger
//     let arrOfWeekDays = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];

//     return arrOfWeekDays[num1 - 1];
// }

// returnDay(1);
// returnDay(7);
// returnDay(4);
// returnDay(0);


// functional scope

//let totalEggs = 0;

// function collect() {
//     var totalEggs = 6;
//     console.log(totalEggs);
// }
// collect();
// console.log(totalEggs);

//block scope

// if (true) {
//     let message = "hi";
//     console.log(message);
//     var msg = "hssi";
// }
// console.log(message);
// console.log(msg);

//lexical scope

// function Outer() {
//     let message = "this is a outer function variable";

//     function inner() {
//         console.log(message);
//     }
//     inner();
// }
// Outer();

//function expression and higher order function passing func as param.

// const add = function (x, y) {
//     console.log(`${x + y}`);
// }

// function CallTwice(func) {
//     func(5, 6);
//     func(5, 6);
// }

// CallTwice(add);

//return function from a function

// function outer() {
//     return function inner() {
//         console.log("hi i am inner");
//     }
// }

// outer();

// methods:

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** num;
//     }
// }

// Shorthand syntax of methods:
// const myMath1 = {
//     PI: 3.14159,
//     add(num) {
//         return num * num;

//     },
//     cube(num) {
//         return num ** num;
//     }
// }

//this keyword

// const cat = {
//     name: 'billi',
//     color: 'patani',
//     meow() {
//         console.log("Meo");
//         console.log(`${this.color}`);
//         console.log(this);
//     }
// }

// const cat1 = cat.meow;


// const hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg: function () {
//         this.eggCount += 1;
//         console.log("EGG");
//     }
// }
// debugger
// hen.name;
// hen.eggCount;
// hen.layAnEgg();
// hen.layAnEgg();
// hen.eggCount;

try {

    hello;
}
catch {
    console.log("Error occured");
}

console.log("after that");