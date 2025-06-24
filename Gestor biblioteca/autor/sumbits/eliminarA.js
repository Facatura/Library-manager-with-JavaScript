let eliminarDatosAutor = function(){
    let subirEliminarAutor = document.getElementById("subirEliminarAutor");

    console.log("iniciando eliminacion");
    subirEliminarAutor.addEventListener("click", (event) =>{
      event.preventDefault();
      eliminarAutores();
      console.log(autoresCreados);
    })
}

let cargarOpcionesA = function(){
  let elegir = document.getElementById("listaDeMuerteA");
  let resultadosTotales = document.getElementById("superResultado");
  elegir.innerHTML = ''; // Limpiar el select antes de cargar las opciones
  
  autoresCreados.forEach(function(autor, index) {
    let option = document.createElement('option');
    option.value = index; 
    option.text = autor.nombre; // Mostrar SOLA Y EXCLUSIVAMENTE el título del libro
    
    elegir.add(option); // Agregar la opción al select
  });
  }
  
  let eliminarAutores = function(){ 
    let resultadosTotales = document.getElementById("superResultado");
    let elegir = document.getElementById("listaDeMuerteA");
    let elegirIndex = elegir.value;
    elegirIndex.innerHTML = "  ";
    if (elegirIndex !== '' && elegirIndex >= 0 && elegirIndex < elegir.options.length) { 
        autoresCreados.splice(elegirIndex, 1); 
      elegir.options[elegirIndex].remove(); 
      console.log(autoresCreados);
      resultadosTotales.innerHTML = '<p>AUTOR ANIQUILADO</p>';
    } else {
  
      alert('Selecciona un autor existente para erradicarlo.');
    }
  }

  