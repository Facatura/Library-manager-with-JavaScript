let autoresCreados = new Array;

let agregarDatosAutor = function(){
        let resultadosTotales = document.getElementById("superResultado");
    let subirCrearAutor = document.getElementById("subirAgregacionA");

 
    subirCrearAutor.addEventListener("click", (event) =>{
            event.preventDefault();
            crearA();
        
    })
    let crearA = function(){
        let nombre = document.getElementById("nombreAgregar").value;
        let apellido = document.getElementById("apellidoAgregar").value;
        let dni = document.getElementById("dniAgregar").value;

        let autor = {
                nombre: nombre,
                apellido: apellido,
                dni: dni,
        }
        
        autoresCreados.push(autor);
        console.log(autoresCreados);
        resultadosTotales.innerHTML = '<p>Autor Subido exitosamente</p>';
        //console.log("el libro: "+" "+libro.titulo+" "+"tiene los siguientes datos: "+" "+"isbn: "+libro.isbn+" "+"genero: "+libro.genero+" "+"autor: "+libro.autor+" "+"paginas: "+libro.paginas);
}
}
   