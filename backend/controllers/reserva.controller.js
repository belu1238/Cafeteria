import Reserva from "../models/reserva.model.js";
import reservaSchema from "../utils/reservaValidations.js";
import { enviarCorreo } from "../utils/emailService.js";

export const getReservas = async(req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error){
        res.status(500).json({error: "Error al obtener las reservas"});
    }    
}

export const createReserva = async(req, res) => {
    const validationResult = reservaSchema.safeParse(req.body);

    if(!validationResult.success) {
        return res.status(400).json({
            error: validationResult.error.issues.map((issue) => issue.message),
        });
    }

    try {
    const { nombre, apellido, email, fecha, hora, numeroPersonas } = req.body;

    const nuevaReserva = new Reserva({email, nombre, apellido, fecha, hora, numeroPersonas});
    const guardarReserva = await nuevaReserva.save();

    console.log("Datos enviados:", { email , nombre, apellido, fecha, hora, numeroPersonas});

    const correoEnviado =await enviarCorreo(email, nombre, apellido, fecha, hora, numeroPersonas);

    if(correoEnviado.success) {
        res.status(201).json({ 
            message: "Correo enviado con exito",
            reserva: guardarReserva
        });
    } else {
        res.status(500).json({ error: "Error al enviar el correo"});
    }
    } catch (error) {
        res.status(500).json({error: error.message});
    }  
}