
let controladorVistaAutor = function(){
    let subirFormulario = document.getElementById("subirFormulario");
    let buscarA = document.getElementById("buscarA");
    let agregarA = document.getElementById("agregarA");
    let eliminarA = document.getElementById("eliminarA");
    let resultadosTotales = document.getElementById("superResultado");

    buscarA.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesAutor[0];
        resultadosTotales.innerHTML = opcionesAutor[3];
        buscarAutor(window.document);
        encontrarDniMasGrande(window.document);
    })
    agregarA.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesAutor[1];
        resultadosTotales.innerHTML = opcionesAutor[3];
        agregarDatosAutor(window.document);
    })
    eliminarA.addEventListener("click", ()=> {
        subirFormulario.innerHTML = opcionesAutor[2];
        resultadosTotales.innerHTML = opcionesAutor[3];
        eliminarDatosAutor(window.document);
        cargarOpcionesA(window.document);
    })

}
