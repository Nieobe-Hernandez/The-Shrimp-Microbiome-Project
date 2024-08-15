import AxiosClient from "../config/http-client/axios-client";

const API_URL = 'http://localhost:8083/api';

export const getBacteriaDatos = async (page = 0, size = 100) => {
  const response = await AxiosClient.get(`${API_URL}?page=${page}&size=${size}`);
  return response.data;
};

export const searchBacteriaDatos = async (filter, search, page = 0, size = 100) => {
  const response = await AxiosClient.get(`${API_URL}/search`, {
    params: { filter, search, page, size }
  });
  return response.data;
};

export const getAllBacteriaDatos = async () => {
  const response = await AxiosClient.get(`${API_URL}/datos`);
  return response.data;
};

export const getBacteriaNombreAndValorMaxByDatoAnio = async (anio) => {
  const response = await AxiosClient.get(`${API_URL}/max-valores`, { params: { anio } });
  return response.data;
};

export const getTop10BacteriaNombreAndValorMaxByDatoAnio = async (anio) => {
  const response = await AxiosClient.get(`${API_URL}/top10-valores`, { params: { anio } });
  return response.data;
};

export const getBacteriaDatosByNombreAndAnio = async (nombre, anio) => {
  const response = await AxiosClient.get(`${API_URL}/by-nombre-anio`, { params: { nombre, anio } });
  return response.data;
};

export const getBacteriaDatosByNombreAnioAndOrgano = async (nombre, anio, organo) => {
  const response = await AxiosClient.get(`${API_URL}/by-nombre-anio-organo`, { params: { nombre, anio, organo } });
  return response.data;
};
