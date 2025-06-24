function eliminarLibro() {
    let selectLibros = document.getElementById('selectLibros');
    let detallesLibro = document.getElementById('detallesLibro');
    let selectedValue = selectLibros.value;
  
    detallesLibro.innerHTML = ''; // Limpiar detalles
  
    if (selectedValue !== '') {
      let libroSeleccionado = LibrosCreados[selectedValue];
      let detallesHTML = `<p><strong>Título:</strong> ${libroSeleccionado.titulo}</p>`;
      detallesHTML += `<p><strong>Autor:</strong> ${libroSeleccionado.autor}</p>`;
      detallesHTML += `<p><strong>Año:</strong> ${libroSeleccionado.año}</p>`;
  
      detallesLibro.innerHTML = detallesHTML;
    }
  }