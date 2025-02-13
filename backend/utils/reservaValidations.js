import { z } from 'zod';

const reservaSchema = z.object({
    nombre: z.string().min(3, "El nombre es obligatorio"),
    apellido: z.string().min(3, "El apellido es obligatorio"),
    email: z.string().email("El email no es valido"),
    numeroPersonas: z.number()
    .min(1, "Debe haber al menos 1 persona")
    .max(6, "No puede haber mas de 6 personas"),
    hora: z.string().regex(/^\d{2}:\d{2}$/, "Hora inválida"),       
    fecha: z.coerce.date()
})

export default reservaSchema;