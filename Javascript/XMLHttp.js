// request to API using the XMLHttpRequest

// const req = new XMLHttpRequest();

// req.onload = function(){
// console.log("Loaded");
// const data = JSON.parse(this.responseText);
// console.log(data);
// }
// req.onerror = function(){
//     console.log("Error!!");
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// request to API using the fetch

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("FirstRequest done");
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .then(res=>{
//     console.log("second done");
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(e=>{
//     console.log("Error!!!", e);
// })

// request to API using the fetch with async method
// const functionShowingRequestToAPIUsingAsync = async()=>{
//     try{
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2);
//     }
//     catch(e){
//         console.log("Error!!!", e);
//     }
// }

//request to API Using the axios

// axios.get("https://swapi.dev/api/people/1/")
// .then(res=>{
//     console.log(res);
// })
// .catch(e=>{
//     console.log(e);
// })
debugger;
axios
  .get("https://swapi.dev/api/people/1/")
  .then(() => {
    return 5;
  })
  .then((v) => {
    console.log(v);
    return 8;
  })
  .then((v) => {
    throw 5;
    return 10;
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });

// const getAxios = async()=>{
//     try{
//         const res = await axios.get("https://swapi.dev/api/people/1/");
//         console.log(res);
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }

// getAxios();

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  try {
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res.data.joke);
  } catch (e) {
    console.log(e);
  }
};
