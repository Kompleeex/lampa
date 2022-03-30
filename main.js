window.addEventListener("load", init);


function ID(elem){
    return document.getElementById(elem); 
}
function $(elem){
    return document.querySelector(elem);
}
function ß(elem){
    return document.querySelectorAll(elem)
}


function init(){
    let lampak = ß("article .lampa");
        lampak[0].addEventListener("click", kattintas); 
        lampak[1].addEventListener("click",kattintas2);
        lampak[2].addEventListener("click",kattintas3);

}

function kattintas(){
    event.target.style.backgroundColor = "red";
}

function kattintas2(){
    event.target.style.backgroundColor = "yellow";
    
}


function kattintas3(){
    event.target.style.backgroundColor = "green";
    event.target.removeEventListener("click", kattintas2)
}


