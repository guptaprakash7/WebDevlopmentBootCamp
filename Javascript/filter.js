const arr = [1, 2, 3, 4, 5, 6, 7, 8];


const filterArr = arr.filter(n => n % 2 === 0);


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


const goodMovies = movies.filter(m => m.score > 90).map(m => m.title);


const validUserNamesArr = ['mark', 'staceymom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const validUserNames = validUserNamesArr => {
    return validUserNamesArr.filter(name => name.length < 10);
}
