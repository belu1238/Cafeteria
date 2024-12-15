import moongoose from "mongoose";

const reservaSchema = new moongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    numeroPersonas: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    hora: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
})

export default moongoose.model('Reserva', reservaSchema);