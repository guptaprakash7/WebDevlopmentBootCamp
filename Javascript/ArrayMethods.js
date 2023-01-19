const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function (el) {
//     console.log(el);
// })

const double = arr.map(function (el) { return el * 2 });

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


// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })

const movieTitles = movies.map(el => el.title);


const add = (x, y) => (
    x + y
)

const addNew = (x, y) => x + y;

const square = x => x * x;

const greet = () => "Hello Friend";