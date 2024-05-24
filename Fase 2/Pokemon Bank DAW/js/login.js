document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.querySelector('.login');
    const emailInput = document.getElementById('inputEmail');
    const passwordInput = document.getElementById('inputPassword');
    const pinInput = document.getElementById('inputPin');

    const constraints = {
        email: {
            presence: { message: "es requerido" },
            email: { message: "no es un correo electrónico válido" }
        },
        password: {
            presence: { message: "es requerida" },
            length: {
                minimum: 6,
                message: "debe tener al menos 6 caracteres"
            }
        },
        pin: {
            presence: { message: "es requerido" },
            format: {
                pattern: "^[0-9]{4}$",
                message: "debe ser un PIN de 4 dígitos"
            }
        }
    };

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const pin = pinInput.value;

        const validation = validate({ email, password, pin }, constraints);

        if (validation) {
            if (validation.email) {
                Swal.fire({
                    title: 'Error de Validación',
                    text: validation.email[0],
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } else if (validation.password) {
                Swal.fire({
                    title: 'Error de Validación',
                    text: validation.password[0],
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } else if (validation.pin) {
                Swal.fire({
                    title: 'Error de Validación',
                    text: validation.pin[0],
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } else {
            if (email === 'Ash@pokemonbank.com' && password === 'Ash1234*' && pin === '1234') {
                Swal.fire({
                    title: 'Inicio de Sesión Exitoso',
                    text: 'Redirigiendo a la siguiente página...',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                    willClose: () => {
                        window.location.href = 'transacciones.html';
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error de Inicio de Sesión',
                    text: 'Credenciales incorrectas. Por favor, intente nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    });
});
