let opcionesAutor = new Array;


var busquedaDatosA = `<form id="formularioBusquedaA">\
<p>Opciones del Autor:</p>\
<input type="text" placeholder="NOMBRE" id="nombreBuscarA"> <br>\
<button id="subirBusquedaA" type="sumbit">Buscar</button><br>\
<button id="autoresDNI" type= "sumbit">Autor con el dni mas epico</button>\
</form>`;

var resultados = `<div id="superResultado"></div>`;

var agregarDatosA = `<form id="formularioAgregarA">\
<p>Opciones del Autor:</p>\
<input type="text" placeholder="NOMBRE" id="nombreAgregar"> <br>\
<input type="text" placeholder="APELLIDO" id="apellidoAgregar"><br> \
<input type="number" placeholder="DNI" id="dniAgregar"><br>\
<button id="subirAgregacionA">Agregar</button>\
</form>`;

var eliminarDatosA = `<form id="formularioEliminarA">\
<p>Opciones del Autor:</p>\
<label for="listaDeMuerteA">Buscar Victima</label>\
<select name="" id="listaDeMuerteA"></select> <br>\
<button id="subirEliminarAutor" type= "sumbit">Eliminar para siempre</button>\
</form>`;


opcionesAutor.push(busquedaDatosA);
opcionesAutor.push(agregarDatosA);
opcionesAutor.push(eliminarDatosA);
opcionesAutor.push(resultados);