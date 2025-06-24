let buscarGenero = function(){
    let subirBusqueda = document.getElementById("subirBusquedaG");
    let resultadosTotales = document.getElementById('superResultado');
    console.log(resultadosTotales);
    subirBusqueda.addEventListener("click", (event) =>{
                event.preventDefault();
                busquedaG();
    })

}

let busquedaG = function(){
        let generoBuscado = document.getElementById("generoBuscar").value;
        let resultadosTotales = document.getElementById("superResultado");

        let generoEncontrado = GenerosCreados.find(function(genero) {
            return genero === generoBuscado; 
          });
          if (generoEncontrado) {
            resultadosTotales.innerHTML = `
            <p>Genero encontrado:</p>
            <p>Genero: ${generoEncontrado}</p>
          `;
          } else {
            resultadosTotales.innerHTML = '<p>Este genero no existe, proba con otro.</p>';
        }
}

  