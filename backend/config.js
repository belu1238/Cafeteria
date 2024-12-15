import mongoose from "mongoose";

export const connetDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost/cafeteria');
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}