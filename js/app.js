document.addEventListener('DOMContentLoaded', function() {

    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputFecha = document.querySelector('#fecha');
    const formulario = document.querySelector('#form');
    

    // Asignar eventos
    inputNombre.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputFecha.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
             mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else {
            console.log('si hay algo');
        }
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si el error ya existe
        const alerta = referencia.querySelector('.bg-red-400');
        if(alerta){
            alerta.remove();
        }

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-400', 'text-white', 'p-2', 'text-center');
        
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

});