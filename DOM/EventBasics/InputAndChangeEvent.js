const changeEventField = document.querySelector('#change');

changeEventField.addEventListener('change', function(){
    console.log('is from change event')
    
})

const inputEventField = document.querySelector('#input');

inputEventField.addEventListener('input', function(){
    console.log('is from input event')

})