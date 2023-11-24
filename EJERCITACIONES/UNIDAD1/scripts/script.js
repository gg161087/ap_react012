let form = document.getElementById('miForm');

let inputName = document.getElementById('name');
let messageName = document.getElementById('messageName')

let lastName = document.getElementById('lastName');
let messageLastName = document.getElementById('messageLastName')

let dni = document.getElementById('dni');
let messageDni = document.getElementById('messageDni')

let email = document.getElementById('email');
let messageEmail = document.getElementById('messageEmail')

let telephone = document.getElementById('telephone');
let messageTelephone = document.getElementById('messageTelephone')

let regularLetras = /^[a-zA-Z\s]*$/

const mostrarPrecio = () => {
    const tipoSeguro = document.getElementById("tipoSeguro");
    let precio;

    if (tipoSeguro === "Basico") {
        precio = 500;
    } else if (tipoSeguro === "Intermedio") {
        precio = 1000;
    } else {
        precio = 1500;
    }

    document.getElementById("precioSeguro").innerHTML = "El precio del seguro es: $" + precio;
}

inputName.addEventListener('blur', () => {
    const valorInput = inputName.value;
    console.log(!regularLetras.test(valorInput));
    if (valorInput.length < 3 || !regularLetras.test(valorInput)) {
        messageName.textContent = 'Ingrese un nombre válido';
        input.style.border = '2px solid red';
        input.style.backgroundColor = 'lightcoral';
    } else {
        messageName.textContent = '';
    }
});

lastName.addEventListener('blur', () => {
    const valorInput = lastName.value;
    if (valorInput.length < 3 || !regularLetras.test(valorInput)) {
        messageLastName.textContent = 'Ingrese un apellido válido';
    } else {
        messageLastName.textContent = '';
    }
});
dni.addEventListener('blur', () => {
    const valorInput = dni.value;
    if (Number(valorInput) < 1000000) {
        messageDni.textContent = 'Ingrese un dni válido';
    } else {
        messageDni.textContent = '';
    }
});
email.addEventListener('blur', () => {
    const valorInput = email.value;
    if (!validarEmail(valorInput)) {
        messageEmail.textContent = 'Ingrese un correo electrónico válido';
    } else {
        messageEmail.textContent = '';
    }
});
telephone.addEventListener('blur', () => {
    const valorInput = dni.value;
    if (Number(valorInput) < 5000000) {
        messageTelephone.textContent = 'Ingrese un n° válido ej.: 2215123467';
    } else {
        messageDni.textContent = '';
    }
});

form.addEventListener('submit', (event) => {

    event.preventDefault();
    if (inputName.value.trim() === '') {
        mostrarError(messageName, 'Ingrese un nombre válido');
    } else if (lastName.value.trim() === '') {
        mostrarError(messageLastName, 'Ingrese un apellido válido');
    } else if (Number(dni.value) < 1000000) {
        mostrarError(messageDni, 'Ingrese un dni válido');
    } else if (!validarEmail(email.value)) {
        mostrarError(email, 'Ingrese un correo electrónico válido');
    } else if (Number(telephone.value) < 5000000) {
        mostrarError(messageTelephone, 'Ingrese un n° válido ej.: 2215123467');
    } else {
        messageName.textContent = '';
        messageLastName.textContent = '';
        messageDni.textContent = '';
        messageEmail.textContent = '';
        messageTelephone.textContent = '';
        console.log('Formulario enviado exitosamente');
    }
});

function mostrarError(element, mensaje) {
    element.textContent = mensaje;
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}