$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        // Previene el envío del formulario por defecto
        event.preventDefault();
        
        // Limpia los mensajes de retroalimentación anteriores
        $('#nameFeedback').text('');
        $('#emailFeedback').text('');
        $('#phoneFeedback').text('');
        $('#messageFeedback').text('');
        $('#successMessage').text(''); // Limpia el mensaje de éxito
        
        // Obtiene los valores de los campos
        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var phone = $.trim($('#phone').val());
        var message = $.trim($('#message').val());

        // Valida los campos
        var hasErrors = false;

        // Valida el nombre
        if (name === '') {
            $('#nameFeedback').text('El nombre es obligatorio.');
            hasErrors = true;
        }

        // Valida el correo electrónico
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            $('#emailFeedback').text('Por favor, ingresa un correo electrónico válido.');
            hasErrors = true;
        }

        // Valida el número de teléfono
        var phonePattern = /^\d{9}$/; // Solo 9 dígitos
        if (phone === '' || !phonePattern.test(phone)) {
            $('#phoneFeedback').text('Por favor, ingresa un número de teléfono válido (debe contener solo 9 dígitos).');
            hasErrors = true;
        }

        // Valida el mensaje
        if (message === '') {
            $('#messageFeedback').text('El mensaje no puede estar vacío.');
            hasErrors = true;
        }

        // Muestra el mensaje de éxito si no hay errores
        if (!hasErrors) {
            $('#successMessage').text('Formulario enviado con éxito.');
            // Aquí puedes agregar código para enviar el formulario o procesar los datos.
        }
    });
});