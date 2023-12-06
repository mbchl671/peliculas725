document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí

let signUp = document.getElementById("signUp");
let signIp = document.getElementById("signIp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIp.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIp.classList.remove("disable");
}

signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIp.classList.add("disable");
}
});






/*let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[i].style.display='inline-block';
    }
    currentItem +=4;
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none'
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-1');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i = currentItem2; i < currentItem2 + 4; i++){
        boxes[i].style.display='inline-block';
    }
    currentItem +=4;
    if(currentItem2 >= boxes.length){
        loadMoreBtn2.style.display = 'none'
    }
}
let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i = currentItem3; i < currentItem3 + 4; i++){
        boxes[i].style.display='inline-block';
    }
    currentItem +=4;
    if(currentItem3 >= boxes.length){
        loadMoreBtn3.style.display = 'none'
    }
}*/




