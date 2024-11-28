import clientdb from "../config/db.js";

const getSvgPorEstadoEMunicipio = async (estado, municipio) => {
    let pathEstado = await clientdb.query('SELECT ST_AsSVG(geom) FROM estado WHERE nm_uf ilike $1', [estado]);
    let pathMunicipio = await clientdb.query('SELECT ST_AsSVG(geom) FROM municipio WHERE nm_mun ilike $1', [municipio]);
    let viewBox = await clientdb.query('SELECT getViewBox($1)', [estado]);
    return {
        pathEstado,
        pathMunicipio,
        viewBox
    }
};

export const MapaController = { getSvgPorEstadoEMunicipio };