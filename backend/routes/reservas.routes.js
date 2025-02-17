import { Router } from "express";
import { getReservas, createReserva } from "../controllers/reserva.controller.js";

const router = Router();

router.get("/", (req, res) => res.send("Bienvenido a la cafeteria"));
router.get("/reservas", getReservas);
router.post("/reservas", createReserva);

export default router;