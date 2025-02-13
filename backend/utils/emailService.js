import nodemailer from "nodemailer";

const userGmail = "belencanalda5@gmail.com";
const passAppGmail = "ufwg szvk gfiv juns";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

const enviarCorreo = async(destinatario, nombre, apellido, fecha, hora, numeroPersonas) => {
    try {
      const mensajeHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <h2 style="color: #5E311E; text-align: center;">¡Reserva Confirmada!</h2>
                <p style="font-size: 16px; color: #000;">
                    Hola <strong>${nombre} ${apellido}</strong>,<br><br>
                    Tu reserva ha sido confirmada con éxito. Aquí están los detalles:
                </p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fecha:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${fecha}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Hora:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${hora}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Cantidad de Personas:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${numeroPersonas}</td>
                    </tr>
                </table>
                <p style="font-size: 16px; color: #333; text-align: center;">
                    ¡Gracias por elegirnos! Te esperamos.
                </p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="" style="background-color: #C39C63; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visitar Sitio</a>
                </div>
            </div>
        `;


        const info = await transporter.sendMail({
            from: userGmail,
            to: destinatario,
            subject: "Confirmacion de Reserva",
            html: mensajeHtml
        })

        console.log('Correo enviado:' + info.messageId);
        return { success: true, message: 'Correo enviado correctamente'};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return { success: false, message: 'Error al enviar el correo'};
    }
}

export { enviarCorreo}