// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let index = 1; index < 151; index++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = index;
    const newImage = document.createElement('img');
    newImage.src = `${baseURL}${index}.png`;

    pokemon.appendChild(label);
    pokemon.appendChild(newImage);
    container.appendChild(pokemon);
    
}