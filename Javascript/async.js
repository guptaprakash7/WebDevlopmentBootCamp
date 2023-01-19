//simple syntax
// async function hello(){

// }

//async with arrow function
// const sing = async ()=>{
//     throw new Error("failed");
//     return 'Prakash'
// }

// sing()
// .then(data=>{
//     console.log('welcome', data)
// })
// .catch(err=>{
//     console.log('Error', err)
// })

//example of login

// const login = async(userName, passWord) =>{
//     if(!userName || !passWord) throw 'Missing credentials'
//     if(passWord==="12345") return "Welcome"
//     throw "Invalid Password"
// }

// login('ssdd', '3')
// .then(data=>{
//     console.log('Most', data)
// })
// .catch(err=>{
//     console.log('Error', err)
// })

const delayedColor = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColor('red', 1000)
// .then(()=> delayedColor('pink', 1000))
// .then(()=> delayedColor('green', 1000))
// .then(()=> delayedColor('yellow', 1000))
// .then(()=> delayedColor('orange', 1000))
// .then(()=> delayedColor('blue', 1000))

async function rainBow(){
    await delayedColor('pink', 1000)
    await delayedColor('green', 1000)
    await delayedColor('yellow', 1000)
    await delayedColor('orange', 1000)
    await delayedColor('blue', 1000)
    await delayedColor('black', 1000)
}

async function PrintRainBow(){   
    await rainBow();
    console.log('finished')
}