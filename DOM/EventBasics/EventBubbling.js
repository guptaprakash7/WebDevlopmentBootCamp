const button = document.querySelector('button');

button.addEventListener('click', function(e){
    alert('button click');
    e.stopPropagation();
})