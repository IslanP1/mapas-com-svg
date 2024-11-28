import nodeFetch from "node-fetch";

const getEstados = async () => {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
    const response = await nodeFetch(url);
    const estados = await response.json();
    return estados; 
};

export const EstadoController = { getEstados };