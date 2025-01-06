import Reserva from "../models/reserva.model.js";
import reservaSchema from "../utils/reservaValidations.js";

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
        res.status(400).json({
            error: validationResult.error.issues.map((issue) => issue.message),
        });
    }

    try {
    const { nombre, apellido, email, numeroPersonas, hora, fecha } = req.body;

    const nuevaReserva = new Reserva({nombre, apellido, email, numeroPersonas, hora, fecha});
    const guardarReserva = await nuevaReserva.save();
    res.json(guardarReserva);
    } catch (error) {
        res.status(500).json({error: error.message});
    }  
}