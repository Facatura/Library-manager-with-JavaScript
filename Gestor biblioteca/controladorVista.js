
window.addEventListener("load", () =>{
    Librito.addEventListener("click", (event)=>{
        event.preventDefault();
        subItemsL.innerHTML = opciones[0];
        subItemsL.classList.toggle("mostrarlos");
        controladorVistaLibro(window.document);
        limpiarResultados();
    })
    Autorcito.addEventListener("click", (event)=>{
        event.preventDefault();
        subItemsA.innerHTML = opciones[1];
        subItemsA.classList.toggle("mostrarlos");
        controladorVistaAutor(window.document);
        limpiarResultados();
    })
    Generito.addEventListener("click", ()=>{
        subItemsG.innerHTML = opciones[2];
        subItemsG.classList.toggle("mostrarlos");
        controladorVistaGenero(window.document);
        limpiarResultados();
    })
});
let limpiarResultados = function(){
        resultados.innerHTML = ''; 
}

let Librito = document.getElementById("botonLibrito");
let Autorcito = document.getElementById("botonAutorcito");
let Generito = document.getElementById("botonGenerito");

let subItemsL = document.getElementById("subItemsL");
let subItemsA = document.getElementById("subItemsA");
let subItemsG = document.getElementById("subItemsG");

