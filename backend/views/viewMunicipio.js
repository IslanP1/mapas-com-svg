import { MunicipioController } from "../controllers/MunicipioController.js";

const getMunicipioPorEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const municipios = await MunicipioController.getMunicipioPorEstado(id);
        if (municipios != '') {
            return res.status(200).json(municipios);
        }
        res.status(404).json({ message: "Estado não encontrado" });
        
    } catch (error){
        console.error("Erro ao buscar municipios:", error);
        res.status(500).json({ message: "Erro ao buscar municipios", error: error.message });
    }
};

export const ViewMunicipio = { getMunicipioPorEstado };