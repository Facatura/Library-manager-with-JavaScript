
let buscarAutor = function(){
    let subirBusquedaA = document.getElementById("subirBusquedaA");
    let resultadosTotales = document.getElementById("superResultado");
    console.log(resultadosTotales);
    subirBusquedaA.addEventListener("click", (event) =>{
                event.preventDefault();
                buscarAutorPorNombre();
    })
    let buscarAutorPorNombre = function(){
   
      let busquedaNombreAutor = document.getElementById("nombreBuscarA").value;
      
    
      let autorEncontrado = autoresCreados.find(function(autor) {
        return autor.nombre === busquedaNombreAutor; 
      });
      if (autorEncontrado) { //esto muestra en el html todo lo que es los resultados de el libro wncontrado
          resultadosTotales.innerHTML = `
            <p>Autor encontrado:</p>
            <p>Nombre: ${autorEncontrado.nombre}</p>
            <p>Apellido: ${autorEncontrado.apellido}</p>
            <p>DNI: ${autorEncontrado.dni}</p>
          `;
        } else {
          resultadosTotales.innerHTML = '<p>El autor no existe o no fue encontrado.</p>';
        }
}
      
     
     
}

