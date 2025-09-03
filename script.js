const titulo = document.getElementById("subtituloprincipal");
let estadoOriginal = true;


titulo.addEventListener("click", () => {
    if (estadoOriginal === true){
titulo.innerText = "que preparé";
titulo.style.color= "grey";
}


else{
titulo.innerText = "Postres";
titulo.style.color= "rgb(129, 95, 52)";
}

estadoOriginal = !estadoOriginal;
});