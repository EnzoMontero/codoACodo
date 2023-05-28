function mostrarInformacion(opcion) {
    var informacion = document.getElementById('informacion');
    informacion.innerHTML = '';

    switch (opcion) {
      case 'opcion1':
        informacion.innerHTML = '<ul class="fondo"><h1>Plan Básico</h1><li>1 viaje diario ida y vuelta a la clínica o centro educativo especializado</li><li>Servicio de transporte en vehículos especialmente equipados</li><li>Conductores capacitados y experimentados en el tramsporte de niños con necesidades especiales</li><li>Costo mensual de: $---</li></ul>';
        break;
      case 'opcion2':
        informacion.innerHTML = '<ul class="fondo"><h1>Plan Estandar</h1><li>2 viajes diarios ida y vuelta a la clínica o centro educativo especializado</li><li>Servicio de transporte en vehículos especialmente equipados</li><li>Conductores capacitados y experimentados en el tramsporte de niños con necesidades especiales</li><li>Costo mensual de: $---</li></ul>';
        break;
      case 'opcion3':
        informacion.innerHTML = '<ul class="fondo"><h1>Plan Premium</h1><li>3 o más viajes diarios ida y vuelta a la clínica o centro educativo especializado</li><li>Servicio de transporte en vehículos especialmente equipados</li><li>Conductores capacitados y experimentados en el tramsporte de niños con necesidades especiales</li><li>Costo mensual personalizado, según las necesidades específicas de cada niño</li></ul>';
        break;
      case 'opcion4':
        informacion.innerHTML = '<ul class="fondo"><h1>Plan Personalizado</h1><li>Incluye el Plan Premium más:</li><li>Viajes adicionales fuera de los horarios establecidos</li><li>Servicio de transporte en vehículos especialmente equipados</li><li>Conductores capacitados y experimentados en el tramsporte de niños con necesidades especiales</li><li>Costo adicional por viaje de: $---</li></ul>';
        break;
    }
  }