const colorArr = ['red', 'black', 'blue'];

for (const iterator of colorArr) {
    console.log(iterator);
}



const person = { firstName: 'Prakash', lastName: 'Gupta' };

for (const key in person) {

    console.log(`${key} ${person[key]}`);
}