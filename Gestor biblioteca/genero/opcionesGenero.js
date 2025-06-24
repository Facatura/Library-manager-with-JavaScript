let opcionesGenero = new Array;

var busquedaDatosG = `<form id="formularioBusquedaG">\
<p>Opciones del Genero:</p>\
<input type="text" placeholder="NOMBRE" id="generoBuscar"> <br>\
<button id="subirBusquedaG">Buscar</button> <br>\
<button id="generoLibros" type= "sumbit">Genero con mayor cantidad de libros</button>\
</form>`;
var resultados = `<div id="superResultado"></div>`;
var agregarDatosG = `<form id="formularioAgregarG">\
<p>Opciones del Genero:</p>\
<input type="text" placeholder="NOMBRE" id="generoAgregar"> <br>\
<button id="subirCrearG" type= "sumbit">Agregar</button>\
</form>`;

var eliminarDatosG = `<form id="formularioEliminarG">\
<p>Opciones del Genero:</p>\
<label for="listaDeMuerteG">Buscar Victima</label>\
<select name="" id="listaDeMuerteG"></select> <br>\
<button id="eliminarElMalditoGenero" onclick="eliminarGenero()" type= "sumbit">Eliminar para siempre</button>\

</form>`;

opcionesGenero.push(busquedaDatosG);
opcionesGenero.push(agregarDatosG);
opcionesGenero.push(eliminarDatosG);
opcionesGenero.push(resultados);