//validacion de datos de crear cuenta

//validacion dato nombre
document.getElementById("nombre").addEventListener("keypress", function(event) {
    let tecla = event.key;
    let expresion = /^[A-Za-z\s]+$/;

    if (!expresion.test(tecla) && tecla !== "Enter") {
        // Muestra la alerta SweetAlert
        Swal.fire({
            title: "Error",
            text: "El nombre solo puede contener letras",
            icon: "error"
        });
        event.preventDefault(); // Evita que el formulario se envie si el campo esta vacio
    } else {
        // Oculta la alerta SweetAlert si el error fue corregido
        Swal.close();
    }
});

//validacion dato apellido
document.getElementById("apellido").addEventListener("keypress", function(event) {
    let tecla = event.key;
    let expresion = /^[A-Za-z\s]+$/;

    if (!expresion.test(tecla) && tecla !== "Enter") {
        // Muestra la alerta SweetAlert
        Swal.fire({
            title: "Error",
            text: "El apellido solo puede contener letras",
            icon: "error"
        });
        event.preventDefault(); // Evita que el formulario se envie si el campo esta vacio
    } else {
        // Oculta la alerta SweetAlert si el error ya fue corregido
        Swal.close();
    }
});

//validacion dato correo electronico
document.getElementById("correo").addEventListener("keyup", function(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        let correo = this.value;
        let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresion.test(correo)) {
            // Muestra la alerta SweetAlert
            Swal.fire({
                title: "Error",
                text: "Ingrese un correo electrónico válido",
                icon: "error"
            });
        } else {
            // Oculta la alerta SweetAlert si el error ya fue corregido
            Swal.close();
        }
    }
});


//validacion dato contrasena
document.getElementById("contrasena").addEventListener("keypress", function(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        let contrasena = this.value;

        // Expresión regular para validar que la contraseña solo contenga números y sea 4 dígitos
        let contrasenaRegExp = /^\d{4}$/;

        if (!contrasenaRegExp.test(contrasena)) {
            // Muestra la alerta SweetAlert si la contraseña no cumple con el formato
            Swal.fire({
                title: "Error",
                text: "La contraseña debe ser un número de 4 dígitos",
                icon: "error"
            });
        } else {
            // Oculta la alerta SweetAlert si la contraseña cumple con el formato
            Swal.close();
        }
    }
});

// Validación dato fecha de nacimiento
document.getElementById("fecha_nacimiento").addEventListener("keypress", function() {
    let fecha = new Date(this.value);
    let hoy = new Date();
    let fechaLimite = new Date();
    fechaLimite.setFullYear(fechaLimite.getFullYear() - 18); // Restar 18 años a la fecha actual
    
    if (fecha >= hoy || fecha.getFullYear() < 1900 || fecha > fechaLimite) {
        // Muestra la alerta SweetAlert
        Swal.fire({
            title: "Error",
            text: "La fecha de nacimiento debe ser válida y el usuario debe ser mayor de 18 años",
            icon: "error"
        });
    } else {
        // Oculta la alerta SweetAlert si el error ya fue corregido
        Swal.close();
    }
});

// Obtener el formulario por su identificador
const form = document.querySelector(".crearcuenta");

// captura de formulario de envío
document.getElementById("btn-registrar").addEventListener("click", function() {
    // Realizar todas las validaciones de datos
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let sexo = document.getElementById("sexo").value;

    // Validar que todos los campos estén llenos
    if (nombre === "" || apellido === "" || correo === "" || contrasena === "" || fechaNacimiento === "" || sexo === "") {
        Swal.fire({
            title: "Error",
            text: "Por favor, complete todos los campos",
            icon: "error"
        });
    } else {
        // Mostrar alerta de registro exitoso
        Swal.fire({
            title: "¡Registro exitoso!",
            text: "Usuario ha sido registrado exitosamente.",
            imageUrl: "img/fondopokemon.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"    

        }).then(() => {
            // Redirigir al usuario a la página de inicio de sesión después de que se cierre la alerta
            window.location.href = "login.html";
        });
    }
});



