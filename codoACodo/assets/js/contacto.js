const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const formulario = document.getElementById('sheet-form');

formulario.addEventListener('submit', function(event) {
event.preventDefault(); // Evitar que el formulario se envíe automáticamente

if (validarFormulario()) {
enviarDatosASheetDB();
}
});

function validarFormulario() {
const nombre = nombreInput.value;
const email = emailInput.value;
const telefono = telefonoInput.value;

// Validar el campo nombre
if (nombre === '') {
alert('Por favor, ingrese su nombre');
return false;
}

// Validar el campo email
if (email === '') {
alert('Por favor, ingrese su email');
return false;
} else if (!validarEmail(email)) {
alert('Por favor, ingrese un email válido');
return false;
}

// Validar el campo telefono
if (telefono === '') {
alert('Por favor, ingrese su teléfono');
return false;
}

// Si todos los campos son válidos, se puede enviar el formulario
return true;
}

function validarEmail(email) {
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regexEmail.test(email);
}

function enviarDatosASheetDB() {
const nombre = nombreInput.value;
const email = emailInput.value;
const telefono = telefonoInput.value;

const datos = {
nombre: nombre,
email: email,
telefono: telefono
};

fetch('https://sheetdb.io/api/v1/simi1yj1v3xop', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(datos)
})
.then(response => response.json())
.then(data => {
console.log('Los datos se han enviado correctamente a SheetDB');
limpiarFormulario();
mostrarMensajeEnviado();
// Aquí puedes agregar el código que deseas ejecutar después de enviar los datos a SheetDB
})
.catch(error => {
console.error('Error al enviar los datos a SheetDB:', error);
// Aquí puedes manejar los errores de la solicitud a SheetDB
});
}


function limpiarFormulario() {
    document.getElementById("sheet-form").reset();
} 
function mostrarMensajeEnviado() {
    document.getElementById('mensajeEnviado').style.zIndex = 2;
}
function ocultarMensajeEnviado() {
    document.getElementById('mensajeEnviado').style.zIndex = -1;
}

