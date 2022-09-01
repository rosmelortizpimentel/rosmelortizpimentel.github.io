const miDiv = document.getElementById("miDiv");
const elementsByClassName = document.getElementsByClassName("miDivClass");
const elementsByTagName = document.getElementsByTagName("div");
const elementsByTagNameWithClass = document.querySelectorAll("div.miDivClass")
const elementsByTagNameWithClassComplex = document.querySelectorAll("footer div.miDivClass")


console.log(miDiv,elementsByClassName);
console.log(elementsByTagName);
console.log(elementsByTagNameWithClass);
console.log(elementsByTagNameWithClassComplex);


const span = document.querySelector("div p span");
span.innerHTML="HOLA";


//miDiv.addEventListener("onmouseover",alert('onmouseover'));
//miDiv.addEventListener("onmouseout",alert('onmouseout'));


const link = document.getElementById("link");
link.href="https://facebook.com";
link.innerHTML="IR A FACEBOOK";


link.style.color="green";
link.style["text-decoration"]="none";

/* PREVENIR EVENTO POR DEFAULT + DETENER PROPAGACIÓN*/
function functionLink(_Event){
    _Event.preventDefault();
    _Event.stopPropagation();
}

link.addEventListener("click",functionLink);

const button = document.getElementsByTagName("button");

/* CAMBIAR CSS */
console.log(button[0].className);
button[0].className="red";
//button[0].setAttribute("disabled","");

/* AGREGAR EVENTO */
//button[0].addEventListener("click",alert('Hola'));

/* CREAR ELEMENTOS */
const nav = document.createElement("nav");
document.body.appendChild(nav);

const h1 = document.getElementsByTagName("h1")[0];
document.body.insertBefore(nav,h1);


