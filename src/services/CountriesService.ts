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

export { getAllCountries, getCountriesBySearch };
