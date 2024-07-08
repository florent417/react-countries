import axios from 'axios';
import { Country } from '../models/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountries = async () => {
  const response = await axios.get<Country[]>(`${BASE_URL}/all`);
  return response.data;
};

const getCountry = async (country: string) => {
  const response = await axios.get<Country[]>(
    `${BASE_URL}/name/${country}?fullText=true`,
  );
  return response.data[0];
};

export { getAllCountries, getCountry };
