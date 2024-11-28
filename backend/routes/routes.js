import express from "express";
import { ViewEstado } from "../views/viewEstado.js";
import { ViewMunicipio } from "../views/viewMunicipio.js";
import { ViewMapa } from "../views/viewMapa.js";

const router = express.Router();

// Estados
router.get("/api/estados/", ViewEstado.getEstados);

// Municipio por estado
router.get("/api/municipios/:id", ViewMunicipio.getMunicipioPorEstado);

// Mapa
router.get("/api/mapa/:estado/:municipio", ViewMapa.getSvgPorEstadoEMunicipio);




export const routes = router;