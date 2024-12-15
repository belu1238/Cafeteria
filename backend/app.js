import express from 'express';

import reservaRoutes from './routes/reservas.routes.js';
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", reservaRoutes);

export default app;

