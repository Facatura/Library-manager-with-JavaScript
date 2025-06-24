let opcionesLibro = new Array;

var busquedaDatos = `<form id="formularioLibroB">\
<p>Opciones del libro:</p>\
<input type="text" placeholder="Ingrese el ISBN de el libro" id="isbnBuscar"> <br>\
<button id="subirBuscarLibro" type= "sumbit">Buscar</button> <br>\
<button id="libroPaginas" type= "sumbit">Libro con mayor cantidad de paginas</button>\
</form>`;

var resultados = `<div id="superResultado"></div>`;

var agregarDatos = `<form id="formularioLibroA">\
<p>Opciones del libro:</p>\
<input type="text" placeholder="ISBN" id="isbnAgregar"> <br>\
<input type="text" placeholder="TITULO" id="tituloAgregar"><br> \
<label for="listaDeAutores">Seleccionar un Autor:</label>\
  <select id="listaDeAutores" name="autores"> </select><br>\
  <label for="listaDeGeneros">Seleccionar un Genero:</label>\
  <select id="listaDeGeneros" name="generos"> </select><br>\
<input type="text" placeholder="PAGINAS" id="paginasAgregar"><br>\
<button id="subirCrearLibro" type= "sumbit">Agregar</button>\
</form>`;

var eliminarDatos = `<form id="formularioLibroE">\
<p>Opciones del libro:</p>\
<label for="elegirEliminacion">Encontra tu victima </label>\
<select name="" id="elegirEliminacion"></select> <br>\
<button onclick="eliminarLibro()" id="subirEliminarLibro" type= "sumbit">Eliminar para siempre</button>\
</form>`;

opcionesLibro.push(busquedaDatos);
opcionesLibro.push(agregarDatos);
opcionesLibro.push(eliminarDatos);
opcionesLibro.push(resultados);
//este archivo solo guarda los elementos que me van a mostrar los botones buscar, agregar y eliminar dentro del html