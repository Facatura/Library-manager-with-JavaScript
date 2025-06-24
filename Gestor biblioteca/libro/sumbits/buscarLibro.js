
let busquedaDatosLibro = function(){

    let subirBuscarLibro = document.getElementById("subirBuscarLibro");
    let resultadosTotales = document.getElementById('superResultado');
    console.log(resultadosTotales);
    subirBuscarLibro.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log("libro buscado");
        buscarLibro();
    })
}

let buscarLibro = function(){
        let isbnBusqueda = document.getElementById('isbnBuscar').value;
        let resultadosTotales = document.getElementById('superResultado');
        let libroEncontrado = LibrosCreados.find(function(libro) {
          return libro.isbn === isbnBusqueda; 
        });
       
        if (libroEncontrado) { //esto muestra en el html todo lo que es los resultados de el libro wncontrado
         
          resultadosTotales.innerHTML = `
              <p>Libro encontrado:</p>
              <p>ISBN: ${libroEncontrado.isbn}</p>
              <p>Título: ${libroEncontrado.titulo}</p>
              <p>Autor: ${libroEncontrado.autorAgregado}</p>
              <p>Genero: ${libroEncontrado.generoAgregado}</p>
              <p>Paginas: ${libroEncontrado.paginas}</p>
            `;
          } else {
            resultadosTotales.innerHTML = '<p>Libro no encontrado.</p>';
          }
  }

 