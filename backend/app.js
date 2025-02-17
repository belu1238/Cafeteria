import express from 'express';
import morgan from 'morgan';

import reservaRoutes from './routes/reservas.routes.js';
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", reservaRoutes);
app.get("/", (req, res) => res.send("Bienvenido a la cafeteria"));

export default app;
