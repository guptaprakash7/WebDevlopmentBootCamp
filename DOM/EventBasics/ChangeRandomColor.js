const colorize = () =>{
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
    }
const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', colorize);
}
const h1s = document.querySelectorAll('h1');
for (const h1 of h1s) {
    h1.addEventListener('click', colorize);
}


function makeRandomColor() {

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

return `rgb(${r}, ${g}, ${b})`;

}

