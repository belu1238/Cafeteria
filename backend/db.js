import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connetDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}