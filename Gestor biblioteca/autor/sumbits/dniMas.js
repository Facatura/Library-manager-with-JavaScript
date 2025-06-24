
let encontrarDniMasGrande = function(){
  let resultadosTotales = document.getElementById('superResultado');
    let botonAutoresDNI = document.getElementById("autoresDNI");

    botonAutoresDNI.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log("hola mundo");
        autorConDniMayor();
    })
    function autorConDniMayor() {
        if (autoresCreados.length === 0) {
            resultadosTotales.innerHTML = `<p> No hay autores </p>`;
          return;
        }
      
        let dniMayor = -1; // Inicializar con un valor menor al posible DNI
        let autorConDniMayor = null;
      
        autoresCreados.forEach(function(autor) {
          let dni = autor.dni;
          if (dni > dniMayor) {
            dniMayor = dni;
            autorConDniMayor = autor;
          }
        });
      
        if (autorConDniMayor) {
          resultadosTotales.innerHTML = `<p>El autor con el DNI más grande es: ${autorConDniMayor.nombre} ${autorConDniMayor.apellido}</p>DNI: ${autorConDniMayor.dni}</p>`;
        } else {
          resultadosTotales.innerHTML = `<p>No se encontró ningún autor con DNI.</p>`;
        }
      }
}