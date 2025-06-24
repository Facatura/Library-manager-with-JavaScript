
let LibrosCreados = new Array;

let agregarDatosLibro = function(){
    
    let subirCrearLibro = document.getElementById("subirCrearLibro");

    console.log("iniciando creacion");
    subirCrearLibro.addEventListener("click", (event) =>{
            event.preventDefault();
            crear();
            
        
    })
    let crear = function(){
      let resultadosTotales = document.getElementById("superResultado");
      let isbn = document.getElementById("isbnAgregar").value;
      let titulo = document.getElementById("tituloAgregar").value;
      let generoAgregado = document.getElementById("listaDeGeneros").value;
      let autorAgregado = document.getElementById("listaDeAutores").value;
      let paginas = document.getElementById("paginasAgregar").value;
    
    
      let libro = new Libro(isbn, titulo, autorAgregado, generoAgregado, paginas); // Dejar autor en blanco por ahora
    
      
      if (isbn === "" || titulo === "" || paginas === "") {
        alert("No puedes crear un libro vacío");
        return; // Detiene el proceso si algún campo obligatorio está vacío
      }
    
      LibrosCreados.push(libro);
      console.log(LibrosCreados);
      resultadosTotales.innerHTML = '<p>Libro Subido exitosamente</p>';
    }
      //console.log("el libro: "+" "+libro.titulo+" "+"tiene los siguientes datos: "+" "+"isbn: "+libro.isbn+" "+"genero: "+libro.genero+" "+"autor: "+libro.autor+" "+"paginas: "+libro.paginas);
}

   
function cargarAutores() {
  let selectAutores = document.getElementById("listaDeAutores");

  // Limpiar opciones previas
  selectAutores.innerHTML = "";

  // Llenar select con opciones de autores
  autoresCreados.forEach(function(autor){
    let option = document.createElement('option');
    option.value = autor.nombre; // Supongo que el nombre del autor es el valor
    option.textContent = autor.nombre;
    selectAutores.appendChild(option);
  });
}
function cargarGeneros() {
  let selectGeneros = document.getElementById("listaDeGeneros");

  // Limpiar opciones previas
  selectGeneros.innerHTML = "";

  // Llenar select con opciones de autores
  GenerosCreados.forEach(function(genero){
    let option = document.createElement('option');
    option.value = genero; // Supongo que el nombre del autor es el valor
    option.textContent = genero;
    selectGeneros.appendChild(option);
  });
}
