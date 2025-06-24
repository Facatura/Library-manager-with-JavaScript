let GenerosCreados = new Array;

let agregarDatosGenero = function(){
    
    let subirCrearGenero = document.getElementById("subirCrearG");
    let resultadosTotales = document.getElementById("superResultado");
    subirCrearGenero.addEventListener("click", (event) =>{
            event.preventDefault();
            crearG();
        
    })
    let crearG = function(){
        let resultadosTotales = document.getElementById("superResultado");
        let genero = document.getElementById("generoAgregar").value;
      
        GenerosCreados.push(genero);
        console.log(GenerosCreados);
        resultadosTotales.innerHTML = '<p>Genero Subido exitosamente</p>';
        //console.log("el libro: "+" "+libro.titulo+" "+"tiene los siguientes datos: "+" "+"isbn: "+libro.isbn+" "+"genero: "+libro.genero+" "+"autor: "+libro.autor+" "+"paginas: "+libro.paginas);
}
}
   