let divs = document.querySelectorAll('.parrafo1, .parrafo2, .parrafo3'); //Seleccionar los tres divs por su ID
let index = 0; //Indice inicial

// Mostrar el primer div de inmediato
divs[index].style.display = 'block';

setInterval(function() {
  divs[index].style.display = 'none'; //Ocultar div actual
  
  index++; //Incrementar el índice
  if (index >= divs.length) { //Reiniciar índice si se excede la cantidad de divs
    index = 0;
  }
  
  divs[index].style.display = 'block'; //Mostrar siguiente div
}, 15000); //Ejecutar cada 15 segundos
