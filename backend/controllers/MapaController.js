import clientdb from "../config/db.js";

const getSvgPorEstadoEMunicipio = async (estado, municipio) => {
    let pathEstado = await clientdb.query('SELECT ST_AsSVG(geom) FROM estado WHERE nm_uf ilike $1', [estado]);
    
    let pathMunicipio = await clientdb.query(
        `SELECT nm_mun, ST_AsSVG(geom) 
        FROM municipio 
        WHERE ST_Within(municipio.geom, (SELECT geom FROM estado WHERE nm_uf ilike $1 LIMIT 1))
          AND nm_mun ilike $2
        LIMIT 1`, 
        [estado, municipio]
    );
    
    let viewBox = await clientdb.query('SELECT getViewBox($1)', [estado]);
    return {
        pathEstado,
        pathMunicipio,
        viewBox
    }   
};

export const MapaController = { getSvgPorEstadoEMunicipio };