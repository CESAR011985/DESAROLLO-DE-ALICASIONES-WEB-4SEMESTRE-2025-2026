document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Botón de Alerta Personalizada
    const btnAlerta = document.getElementById('btnAlerta');
    btnAlerta.addEventListener('click', () => {
        alert('🚀 ¡Hola! Esta es una alerta activada con JavaScript.');
    });

    // 2. Validación de Formulario
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // Detener el envío si no es válido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert('✅ ¡Formulario enviado con éxito!');
            form.reset();
            form.classList.remove('was-validated');
            return;
        }

        form.classList.add('was-validated');
    }, false);
});