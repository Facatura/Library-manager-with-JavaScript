 let subirCantPaginas = function(){
    let botonSubir = document.getElementById("libroPaginas");
    let resultadosTotales = document.getElementById("superResultado");
    console.log(botonSubir);
    botonSubir.addEventListener("click", (event) =>{
      event.preventDefault();
      
      function encontrarLibroMayorPaginas() {
        let resultadosTotales = document.getElementById("superResultado");
        if (LibrosCreados.length === 0) {
          return null; // Retorna null si no hay libros en el array
        }
      
        // Utiliza reduce() para encontrar el libro con la mayor cantidad de páginas
        let libroMasGrande = LibrosCreados.reduce(function(valorPrevio, valorActual) { //valorPrevio es el valor acumulado de el array y valorActual es lo que se consigue con cada iteracion al mismo
            if (valorActual.paginas > valorPrevio.paginas) {
                return valorActual;
              } else {
                return valorPrevio;
              } //esta funcion callback lo que hace es devolver el mayor entre las 2 iteraciones de el array, y luego uso ? para compararlos entre sí
        });
      
        return libroMasGrande;
      }
      
      // Llamo a la función para encontrar el libro con mas paginas
      let libroMayorPaginas = encontrarLibroMayorPaginas();
   
      
      if (libroMayorPaginas) {
        resultadosTotales.innerHTML = `<p>El libro con mayor cantidad de páginas es: ${libroMayorPaginas.titulo} con ${libroMayorPaginas.paginas} paginas</p>`;
      } else {
        resultadosTotales.innerHTML = '<p>No hay libros.</p>';
      }
    });
    }
   