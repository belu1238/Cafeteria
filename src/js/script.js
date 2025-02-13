async function enviarReserva() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const numeroPersonas = document.getElementById('personas').value;
    const hora = document.getElementById('hora').value;
    const fecha =document.getElementById('fecha').value;

    const reserva = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        numeroPersonas: parseInt(numeroPersonas),
        hora: hora,
        fecha: fecha        
    }

    try {
        const response = await fetch('http://localhost:3000/api/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserva)            
        }) 
        console.log(reserva);
        
        if(response.ok){
            Swal.fire({
            title: "Reserva Exitosa!",
            text: `Tu reserva ha sido realizada para el ${fecha} a las ${hora}. Te contactaremos para confirmar tu reserva`,
            icon: "success"
            });
        } else {
            //Manejo de errores HTTP
            const error = await response.json();
            Swal.fire({
                icon: "error",
                title: "Error en la reserva",
                text: "Ocurrio un problema al solicitar tu solicitud",
            });
            console.log(error);
        }
        
        } catch(error) {
            //Manejo de errores de red
        Swal.fire({
            icon: "error",
            title: "Oops... Hubo un error!",
            text: "No se pudo conectar con el servidor. Por favor, inténtelo mas tarde.",
        });
    }
};

