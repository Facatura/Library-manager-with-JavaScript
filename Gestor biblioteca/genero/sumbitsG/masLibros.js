
let cantLibros = function(){
    let boton = document.getElementById("generoLibros");
    let resultadosTotales = document.getElementById('superResultado');
    console.log(resultadosTotales);
    boton.addEventListener("click", (event) =>{
        
        event.preventDefault();
        masLibros();
        
        function masLibros() {
          if (LibrosCreados.length === 0) {
            resultadosTotales.innerHTML = ` <p>no existen libros, crea uno</p>`;
            return;
          }
        
          let conteoGeneros = {};
        
          LibrosCreados.forEach(function(libro) {
            let genero = libro.generoAgregado;
            if (!conteoGeneros[genero]) {
              conteoGeneros[genero] = 1;
            } else {
              conteoGeneros[genero]++;
            }
          });
        
          let generoMasLibros = Object.keys(conteoGeneros).reduce(function(prev, current) {
            return (conteoGeneros[current] > conteoGeneros[prev]) ? current : prev;
          }, Object.keys(conteoGeneros)[0]); // Establece el primer género como el inicial
        
          resultadosTotales.innerHTML = `<p>EL genero con mas libros es: ${generoMasLibros}</p>`;
        }
    })
   
}

