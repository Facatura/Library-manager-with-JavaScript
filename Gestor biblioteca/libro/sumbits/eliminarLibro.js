
let eliminarDatosLibro = function(){
    let subirEliminarLibro = document.getElementById("subirEliminarLibro");
    let resultadosTotales = document.getElementById("superResultado");
    console.log("iniciando eliminacion");
    subirEliminarLibro.addEventListener("click", (event) =>{
        console.log("amenaza neutralizada");
        event.preventDefault();
        
        /*if(lista == titulo){
            LibrosCreados.splice();
        }*/
        
    })
}

let cargarOpciones = function(){
  let elegir = document.getElementById("elegirEliminacion");
  elegir.innerHTML = ''; // Limpiar el select antes de cargar las opciones
  
  LibrosCreados.forEach(function(libro, index) {
    let option = document.createElement('option');
    option.value = index; 
    option.text = libro.titulo; // Mostrar SOLA Y EXCLUSIVAMENTE el título del libro
    
    elegir.add(option); // Agregar la opción al select
  });
  }
  
  function eliminarLibro() { //la funcion eliminar libro recibe elegir al igual que la anterior, y va a comparar el elemento que vos elegiste de el array con sigo mismo, osea, con lo que indique el select que tiene la id "elegirEliminacion"
    let resultadosTotales = document.getElementById("superResultado");
    let elegir = document.getElementById("elegirEliminacion");
    let elegirIndex = elegir.value;
    elegirIndex.innerHTML = "  ";//estos espacios seian para eliminar el select asi queda vacio cuando no hay ningun valor pero no lo pude arreglar jeje
    console.log(LibrosCreados);
    if (elegirIndex !== '' && elegirIndex >= 0 && elegirIndex < elegir.options.length) { //la funcion principal de este if es asegurarse de que elegirIndex no este vacio nunca, porque si lo esta, no tendria sentido el resto de la funcion
      LibrosCreados.splice(elegirIndex, 1); // Elimina el elemento del array
      resultadosTotales.innerHTML = '<p>LIBRO ANIQUILADO</p>';
      elegir.options[elegirIndex].remove(); // Elimina la opción seleccionada del select (no funciona como me gustaria pero bueno)
    } else {
  
      alert('Selecciona un libro válido para eliminar.');
    }
  }

  