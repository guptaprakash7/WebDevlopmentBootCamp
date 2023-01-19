const shelterForm = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const cats = document.querySelector('#cats');
shelterForm.addEventListener("submit", function(e){
    debugger
e.preventDefault();
    console.log("submitted");
    const catName = input.value;
    const liElement = document.createElement("LI");
    liElement.innerText = catName;
    cats.append(liElement);
    input.value = "";
})