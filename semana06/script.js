const form = document.getElementById('registroForm');
const btnEnviar = document.getElementById('btnEnviar');

// Objetos para rastrear validez
const camposValidos = {
    nombre: false,
    correo: false,
    password: false,
    confirmar: false,
    edad: false
};

// --- Funciones de Validación ---

const validarNombre = (valor) => {
    const error = document.getElementById('errorNombre');
    const input = document.getElementById('nombre');
    if (valor.length >= 3) {
        error.textContent = '';
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        return true;
    } else {
        error.textContent = 'Mínimo 3 caracteres';
        input.classList.add('invalid');
        return false;
    }
};

const validarCorreo = (valor) => {
    const error = document.getElementById('errorCorreo');
    const input = document.getElementById('correo');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular sugerida
    if (regex.test(valor)) {
        error.textContent = '';
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        return true;
    } else {
        error.textContent = 'Formato de correo inválido';
        input.classList.add('invalid');
        return false;
    }
};

const validarPassword = (valor) => {
    const error = document.getElementById('errorPassword');
    const input = document.getElementById('password');
    // Mínimo 8 caracteres, al menos un número y un carácter especial
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    if (regex.test(valor)) {
        error.textContent = '';
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        return true;
    } else {
        error.textContent = '8+ caracteres, 1 número y 1 especial';
        input.classList.add('invalid');
        return false;
    }
};

const validarConfirmar = (valor) => {
    const error = document.getElementById('errorConfirmar');
    const input = document.getElementById('confirmar');
    const originalPass = document.getElementById('password').value;
    
    if (valor === originalPass && valor !== '') {
        error.textContent = '';
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        return true;
    } else {
        error.textContent = 'Las contraseñas no coinciden';
        input.classList.add('invalid');
        return false;
    }
};

const validarEdad = (valor) => {
    const error = document.getElementById('errorEdad');
    const input = document.getElementById('edad');
    const edad = parseInt(valor);
    
    if (edad >= 18) {
        error.textContent = '';
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        return true;
    } else {
        error.textContent = 'Debe ser mayor o igual a 18 años';
        input.classList.add('invalid');
        return false;
    }
};

// --- Manejador Global de Entradas ---

const checkFormValidity = () => {
    const esValido = Object.values(camposValidos).every(v => v === true);
    btnEnviar.disabled = !esValido; // Habilitar botón de envío
};

form.addEventListener('input', (e) => {
    const id = e.target.id;
    const valor = e.target.value;

    if (id === 'nombre') camposValidos.nombre = validarNombre(valor);
    if (id === 'correo') camposValidos.correo = validarCorreo(valor);
    if (id === 'password') {
        camposValidos.password = validarPassword(valor);
        camposValidos.confirmar = validarConfirmar(document.getElementById('confirmar').value);
    }
    if (id === 'confirmar') camposValidos.confirmar = validarConfirmar(valor);
    if (id === 'edad') camposValidos.edad = validarEdad(valor);

    checkFormValidity();
});

// --- Envío de Formulario ---

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío real para demostrar validación
    alert("¡Formulario validado con éxito!"); // Alerta de éxito
});