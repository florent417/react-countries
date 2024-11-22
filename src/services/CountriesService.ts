import axios from 'axios';
import { Country } from '../models/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountries = async () => {
  const response = await axios.get<Country[]>(`${BASE_URL}/all`);
  return response.data;
};

const getCountriesBySearch = async (country: string) => {
  const response = await axios.get<Country[]>(`${BASE_URL}/name/${country}`);
  return response.data;
};

// TODO: Make private
const getFilteredResponse = async (fields: string[]) => {
  const fieldsStr = fields.join(',');
  const response = await axios.get<Country[]>(
    `${BASE_URL}/all?fields=${fieldsStr}`,
  );
  return response.data;
};

const getAllRegions = async () => {
  const responseData = await getFilteredResponse(['region']);
  return responseData.map((entry) => entry.region);
};

const getCountriesByRegion = async (region: string) => {
  const response = await axios.get<Country[]>(`${BASE_URL}/region/${region}`);
  return response.data;
};

const getCountry = async (country: string) => {
  const response = await axios.get<Country[]>(
    `${BASE_URL}/name/${country}?fullText=true`,
  );
  return response.data[0];
};

const getCountriesByRegionAndSearch = async (region: string) => {
  const response = await axios.get<Country[]>(`${BASE_URL}/region/${region}`);
  return response.data;
};

export {
  getAllCountries,
  getCountriesBySearch,
  getAllRegions,
  getCountriesByRegion,
  getCountry,
};
