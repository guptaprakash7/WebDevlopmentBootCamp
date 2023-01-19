let maximum = parseInt(prompt("Enter your maximum number"));

while (!maximum) {
    maximum = parseInt(prompt("Enter your maximum number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Guess is too high Enter a new guess");
    } else {
        guess = prompt("Guess is too low Enter a new guess");
    }
}
console.log(`it took you ${attempts} guesses`);
console.log("you got it");
