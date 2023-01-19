function onClickButton1(){
    alert("Hello button 1");
}

const button1 = document.querySelector('#button1');
button1.onclick = onClickButton1;

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function(e){
    console.log('you clicked me!!');
    console.log(e);
});

//cnst button3 = document.querySelector('button3');
button2.addEventListener('click', (e)=>{
    console.log('you clicked me2!!');
    console.log(`button2 ${e}`);
}, {once: true});

const inputField = document.querySelector('input');

inputField.addEventListener('keydown',
function(e){
console.log(e)

})