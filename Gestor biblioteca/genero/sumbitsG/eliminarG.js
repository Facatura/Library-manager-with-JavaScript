
let eliminarDatosGenero = function(){
    let subirEliminarGenero = document.getElementById("eliminarElMalditoGenero");
    let resultadosTotales = document.getElementById("superResultado");
    console.log("iniciando eliminacion");
   
    subirEliminarGenero.addEventListener("click", (event) =>{
        console.log("amenaza neutralizada");
        event.preventDefault();
        /*if(lista == titulo){
            LibrosCreados.splice();
        }*/
        
    })
}

let cargarOpcionesG = function(){
    let elegir = document.getElementById("listaDeMuerteG");
    elegir.innerHTML = ''; // Limpiar el select antes de cargar las opciones
   
    GenerosCreados.forEach(function(genero, index) {
        let option = document.createElement('option');
        option.value = index; 
        option.text = genero; 
        elegir.add(option);
    });
  }
  
  let eliminarGenero = function(){ 
    let resultadosTotales = document.getElementById("superResultado");
    let elegir = document.getElementById("listaDeMuerteG");
    let elegirIndex = elegir.value;
    elegirIndex.innerHTML = "  ";
    console.log(GenerosCreados);
    if (elegirIndex !== '' && elegirIndex >= 0 && elegirIndex < elegir.options.length) { 
        GenerosCreados.splice(elegirIndex, 1); 
        elegir.options[elegirIndex].remove(); 
        resultadosTotales.innerHTML = '<p>GENERO ANIQUILADO</p>';
        console.log(GenerosCreados);
    } else {
      alert('Selecciona un Genero válido para erradicar.');
    }
  }

  