
let controladorVistaGenero = function(){
    let subirFormulario = document.getElementById("subirFormulario");

    let buscarG = document.getElementById("buscarG");
    let agregarG = document.getElementById("agregarG");
    let eliminarG = document.getElementById("eliminarG");
    let resultadosTotales = document.getElementById("superResultado");

    buscarG.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesGenero[0];
        resultadosTotales = opcionesGenero[3];
        buscarGenero(window.document);
        cantLibros(window.document);
    })
    agregarG.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesGenero[1];
        resultadosTotales = opcionesLibro[3];
        agregarDatosGenero(window.document);
    })
    eliminarG.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesGenero[2];
        resultadosTotales = opcionesLibro[3];
        eliminarDatosGenero(window.document);
        cargarOpcionesG(window.document);
    })

}