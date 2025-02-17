import app from "./app.js";
import { connetDb } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

connetDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 3000")
});