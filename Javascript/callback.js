// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "pink";
//     }, 1000);
// }, 1000);

// using callback
// const fakeRequestUsingCallBack = (url, success, failure) => {
// const delay = Math.round(Math.random() * 4500) + 500;

// setTimeout(()=>{
// if(delay > 4000){
//     failure("Connection Timedout");
// }
// else{
//     success(`Here is your fake data from ${url}`);
// }
// }, delay)
// }

// fakeRequestUsingCallBack('book.com/page1', function(response){
//  console.log("It worked!!");
// console.log(response);

// fakeRequestUsingCallBack('book.com/page2', function(response){
//     console.log("It worked again!!");
//    console.log(response);
//    },
//    function(err){
//        console.log("It failed 2nd");
//        console.log(err);
//    }
//    )
// },
// function(err){
//     console.log("It failed");
//     console.log(err);
// }
// )

//using promise
const fakeRequestUsingPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.round(Math.random() * 4500) + 500;

    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timedout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//1st way to call this

// fakeRequestUsingPromise('fake.com/api')
//     .then(()=>{
//         console.log("worked");
//         fakeRequestUsingPromise('fake2.com/api')
//             .then(()=>{
//             console.log("workedd");
//             })
//             .catch(()=>{
//             console.log("errore");
//             })
//     })
//     .catch(()=>{
//         console.log("error");
//     })

//2nd way - better way to call it, which is a good way

// fakeRequestUsingPromise('fake.com/api')
//     .then((data)=>{
//     console.log("worked(req1)");
//     console.log(data);
//     return fakeRequestUsingPromise('fake2.com/api');
// })
// .then((data)=>{
//     console.log("worked(req2)");
//     console.log(data);
//     return fakeRequestUsingPromise('fake2.com/api')
// })
// .then((data)=>{
//     console.log("worked(req3)");
//     console.log(data);
//     return fakeRequestUsingPromise('fake3.com/api')
// })
// .catch((error)=>{
//     console.log("error");
//     console.log(error);
// })

// call the request using async and await basically showing how to handle the reject in async await
// async await demo is in aysnc.js

async function makeRequest() {
  try {
    let data = await fakeRequestUsingPromise("fake.com/api");
    console.log(data);
    let data1 = await fakeRequestUsingPromise("fake.com/api");
    console.log(data1);
  } catch (e) {
    console.log("Error caught");
    console.log("Error is", e);
  }
}

var d = "text";
