
/*let LibrosCreados = new Array;*/
let controladorVistaLibro = function(){
    let subirFormulario = document.getElementById("subirFormulario");
    
    let buscarLibro = document.getElementById("buscarL");
    let agregarLibro = document.getElementById("agregarL");
    let eliminarLibro = document.getElementById("eliminarL");
    let resultadosTotales = document.getElementById("superResultado");
  

    buscarLibro.addEventListener("click", ()=>{
        subirFormulario.innerHTML = opcionesLibro[0];
        resultadosTotales = opcionesLibro[3];
        busquedaDatosLibro(window.document);
        subirCantPaginas(window.document);
    });

    agregarLibro.addEventListener("click", ()=> {
         subirFormulario.innerHTML = opcionesLibro[1];
         resultadosTotales = opcionesLibro[3];
         agregarDatosLibro(window.document);
         cargarAutores(window.document);
         cargarGeneros(window.document);
    });

    eliminarLibro.addEventListener("click", ()=>{
        subirFormulario.innerHTML = opcionesLibro[2];
        resultadosTotales = opcionesLibro[3];
        eliminarDatosLibro(window.document);
        cargarOpciones(window.document);
        
    });

}

//aca esta lo que van a hacer los 3 botones de el libro, en este caso: buscar llamará al primer valor de el array opcionesLibro, el cual contiene
//el contenido html que yo quiero que muestre en la pagina, como se verá en cada uno de los respectivos codigos que contienen
//las funciones, que son llamadas acá