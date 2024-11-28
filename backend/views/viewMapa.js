import { MapaController } from "../controllers/MapaController.js";

const getSvgPorEstadoEMunicipio = async (req, res) => {
    try {
        const { estado, municipio } = req.params;
        const { pathEstado, pathMunicipio, viewBox } = await MapaController.getSvgPorEstadoEMunicipio(estado, municipio); 
    
        res.status(200).json({
            pathestado: pathEstado.rows[0].st_assvg,
            pathmunicipio: pathMunicipio.rows[0].st_assvg,
            viewBox: viewBox.rows[0].getviewbox
        });
    } catch (error) {
        console.error("Erro ao buscar SVG:", error);
        res.status(500).json({ message: "Erro ao buscar SVG", error: error.message });
    }
}

export const ViewMapa = { getSvgPorEstadoEMunicipio };