const searchForm1 = document.querySelector('#searchForm');
searchForm1.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = searchForm1.elements.query.value;
    const config = {params: {q:searchTerm}};
    const res = await axios.get("https://api.tvmaze.com/search/shows", config);
    makeImage(res.data);
    searchForm1.elements.query.value = '';
})


const makeImage =(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}