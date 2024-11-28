import { EstadoController } from "../controllers/EstadoController.js";

const getEstados = async (req, res) => {
    try {
        const estados = await EstadoController.getEstados();
        res.status(200).json(estados);
    } catch (error) {
        console.error("Erro ao buscar estados:", error);
        res.status(500).json({ message: "Erro ao buscar estados", error: error.message });
    }
};

export const ViewEstado = { getEstados };