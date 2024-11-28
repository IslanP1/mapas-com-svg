import nodeFetch from "node-fetch";

const getMunicipioPorEstado = async (id) => {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;
    const response = await nodeFetch(url);
    const municipios = await response.json();
    return municipios;
};

export const MunicipioController = { getMunicipioPorEstado };