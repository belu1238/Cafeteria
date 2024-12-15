import Reserva from "../models/reserva.model.js";

export const getReservas = async(req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
}

export const createReserva = async(req, res) => {
    const { nombre, apellido, email, numeroPersonas, hora, fecha } = req.body;

    const nuevaReserva = new Reserva({nombre, apellido, email, numeroPersonas, hora, fecha});
    const guardarReserva = await nuevaReserva.save();
    res.json(guardarReserva);
}