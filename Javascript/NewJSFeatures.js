//default params

const multiply = (a, b = 1) => {
    return a * b;
}

function greet(msg = "Hello", name) {
    console.log(`${msg} ${name}`);
}

let d=1;
// spread operator

const arr = [3, 1, 2, 5, 7];
let maxValue = Math.max(arr);
//output -- NAN

maxValue = Math.max(...arr); //output - 7


const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];// output = [1, 2, 3, 4];


const cat = { legs: 4, isFurry: true };
const dog = { eyes: 4, isPet: true };

const catdog = { ...cat, ...dog }; //{legs: 4, isFurry: true, eyes: 4, isPet: true}

const catNew = { ...cat, isMamal: true }; // {legs: 4, isFurry: true, isMamal: true}


//rest operator

function Demo(...restNumbers) {
    console.log(restNumbers);
}
//output - Demo(2, 3, 4) -- [2, 3, 4] 


function Demo1(value1, value2, ...restValue) {
    console.log(`${value1}`);
    console.log(`${value2}`);
    console.log(`${restValue}`);
}

//deconstructing

const fullName = ["Chandra", "Kanta", "Gupta"];

//old way of deconstructing array
const firstName = fullName[0];
const middleName = fullName[1];
const lastName = fullName[2];

const [fName, midName, lasName] = fullName;


//object deconstructing

const user = { name: "Prakash Gupta", age: 28, birthPlace: "Mathura" };

//old way of deconstructing object

let name = user.name;
let age = user.age;

//new way
const { name: userName, age: userAge } = user;


//deconstructing params

function person({ name, age }, email) {
    console.log(`${name} ${age} ${email}`);
}
// person(user) -- Prakash gupta 28


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]


const mapArray = movies.map(({ title, score }) => {
    console.log(`${title} - ${score}/100`);
})
